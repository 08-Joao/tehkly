import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { FastifyRequest } from 'fastify';
import { firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserRole } from 'generated/prisma';
import { UserService } from 'src/user/application/services/user.service';
import { ROLES_KEY } from '../decorators/role.decorator';

interface AuthResponse {
  valid: boolean;
  user: {
    id: string;
    email: string;
    name: string;
    phoneNumber?: string;
    birthDate?: string;
  };
}

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private readonly httpService: HttpService,
        private readonly userService: UserService,
        private reflector: Reflector,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<FastifyRequest>();
        const accessToken = request.cookies?.accessToken;

        if (!accessToken) {
            throw new UnauthorizedException('Token não fornecido');
        }

        try {
            const cookieHeader = `accessToken=${accessToken}`;
            
            const data = await firstValueFrom(
                this.httpService.get<AuthResponse>(
                    `${process.env.AUTH_API_URL}/me`,
                    {
                        headers: {
                            Cookie: cookieHeader,
                        },
                        timeout: 5000,
                        withCredentials: true,
                    },
                ).pipe(
                    map(response => response.data),
                ),
            );

            if (!data.valid) {
                throw new UnauthorizedException('Token inválido');
            }

            const userData = data.user;

            if (!userData || !userData.id || !userData.email || !userData.name) {
                throw new UnauthorizedException('Dados de autenticação incompletos');
            }
            
            const user = await this.userService.getOrCreate({
                id: userData.id,
                email: userData.email,
                name: userData.name,
                phoneNumber: userData.phoneNumber,
                birthDate: userData.birthDate,
            });

            request['user'] = user;

            // Validar roles se especificadas no decorator
            const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ]);

            if (requiredRoles && requiredRoles.length > 0) {
                if (!requiredRoles.includes(user.role)) {
                    throw new ForbiddenException('Você não tem permissão para acessar este recurso');
                }
            }

            return true;
        } catch (error: any) {
            if (error instanceof UnauthorizedException || error instanceof ForbiddenException) {
                throw error;
            }
            throw new UnauthorizedException('Token inválido');
        }
    }
}
