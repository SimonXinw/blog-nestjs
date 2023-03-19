import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(), // 配置日志
  });

  // 全局校验
  app.useGlobalPipes(new ValidationPipe());

  // 监听端口
  await app.listen(8888);
}

bootstrap();
