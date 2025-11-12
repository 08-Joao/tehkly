import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/application/services/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) {}

async getOrCreate(data: CreateUserDto) {
    if (!data.id || !data.email || !data.name) {
      throw new Error('Dados de usuário incompletos');
    }

    try {
      // 1. Verifica se usuário já existe
      const existingUser = await this.prismaService.user.findUnique({
        where: { id: data.id },
        include: { userSubscriptions: true },
      });

      if (existingUser) {
        if(existingUser.name !== data.name || existingUser.email !== data.email || existingUser.phoneNumber !== data.phoneNumber || existingUser.birthDate !== data.birthDate){
          // Atualiza todos os dados do usuário
          const updatedUser = await this.prismaService.user.update({
            where: { id: data.id },
            data: {
              email: data.email,
              name: data.name,
              phoneNumber: data.phoneNumber || '',
              birthDate: data.birthDate,
            },
            include: { userSubscriptions: true },
          });
  
          return updatedUser;
        }
        // Retorna o usuário existente se os dados são iguais
        return existingUser;
      }

      // 2. Usuário não existe, cria TUDO em uma transação

      const user = await this.prismaService.user.create({
          data: {
            id: data.id,
            email: data.email,
            name: data.name,
            phoneNumber: data.phoneNumber || '',
            birthDate: data.birthDate || new Date().toISOString(),
          },
        });

      return user;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    // Need to call auth.tehkly.com to update user there too
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    // Need to call auth.tehkly.com to remove user from there too
    return this.prismaService.user.delete({ where: { id } });
  }
}
