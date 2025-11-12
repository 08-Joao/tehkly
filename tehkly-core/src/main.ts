import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import cookiePlugin from '@fastify/cookie';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

    app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://tehkly.com',
    ],
    credentials: true,
  });

  await app.register(cookiePlugin);
  await app.listen(process.env.PORT ?? 4000, '0.0.0.0');
}
bootstrap();
