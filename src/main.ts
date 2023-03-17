import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局校验
  app.useGlobalPipes(new ValidationPipe());

  // 监听端口
  await app.listen(8888);
}

bootstrap();
