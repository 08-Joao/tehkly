import { HttpService } from "@nestjs/axios";
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { FastifyRequest } from "fastify";
import { firstValueFrom } from "rxjs";
import { map } from "rxjs/operators";
import { UserService } from "src/user/application/services/user.service";

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
export class AuthGuard implements CanActivate {
    constructor(private readonly httpService: HttpService, private readonly userService: UserService) { }
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest<FastifyRequest>();

        const accessToken = request.cookies?.accessToken;

        if (!accessToken) {
            throw new UnauthorizedException('Token não fornecido');
        }

        // Monta o header de cookie para enviar ao serviço de auth
        const cookieHeader = `accessToken=${accessToken}`;

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

            return true;
        } catch (error: any) {
            throw new UnauthorizedException('Token inválido');
        }
    }
}