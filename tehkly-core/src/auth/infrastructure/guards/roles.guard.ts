import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { HttpService } from '@nestjs/axios';
import { FastifyRequest } from 'fastify';
import { firstValueFrom } from 'rxjs';
import { UserService } from 'src/user/application/services/user.service';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserRole } from 'generated/prisma';

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

interface FastifyRequestWithCookies extends FastifyRequest {
  cookies: Record<string, string>;
}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private httpService: HttpService,
    private userService: UserService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<FastifyRequestWithCookies>();

    // Pega o cookie accessToken (httpOnly, domain .tehkly.com)
    const accessToken = request.cookies?.accessToken;

    if (!accessToken) {
      throw new UnauthorizedException('Token não fornecido');
    }

    // Monta o header de cookie para enviar ao serviço de auth
    const cookieHeader = `accessToken=${accessToken}`;

    try {
      // 1. Valida token no api-auth.tehkly.com
      const authResponse = await firstValueFrom(
        this.httpService.get<AuthResponse>(
          `${process.env.AUTH_API_URL}/verify-token`,
          {
            headers: {
              Cookie: cookieHeader,
            },
            timeout: 5000,
            withCredentials: true,
          },
        ),
      );

      const data = authResponse.data;

      if (!data.valid) {
        throw new UnauthorizedException('Token inválido');
      }

      const userData = data.user;

      // Valida campos obrigatórios
      if (!userData || !userData.id || !userData.email || !userData.name) {
        throw new UnauthorizedException('Dados de autenticação incompletos');
      }

      // 2. Busca ou CRIA usuário no primeiro acesso
      const user = await this.userService.getOrCreate({
        id: userData.id,
        email: userData.email,
        name: userData.name,
      });

      // 3. Adiciona usuário ao request
      request['user'] = user;

      // 4. Verifica as roles necessárias
      const requiredRoles = this.reflector.get<UserRole[]>(
        ROLES_KEY,
        context.getHandler(),
      );

      // Se não há roles definidas, apenas a autenticação é necessária
      if (!requiredRoles) {
        return true;
      }

      // Verifica se o usuário tem uma das roles necessárias
      if (!requiredRoles.includes(user.role)) {
        throw new ForbiddenException(
          `Acesso negado. Roles necessárias: ${requiredRoles.join(', ')}`,
        );
      }

      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }

      if (error instanceof ForbiddenException) {
        throw error;
      }

      if (error.response?.status === 401) {
        throw new UnauthorizedException('Token inválido');
      }

      if (error.response?.status === 403) {
        throw new UnauthorizedException('Token expirado');
      }

      if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
        throw new UnauthorizedException('Serviço de autenticação indisponível');
      }

      Logger.error(error);
      throw new UnauthorizedException('Erro ao validar token');
    }
  }
}
