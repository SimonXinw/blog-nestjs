import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensitiveController } from './sensitive/sensitive.controller';

@Module({
  imports: [
    StudentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'school',
      autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
      synchronize: true, // 数据库自动同步 entity 文件修改
    }),
  ],
  controllers: [AppController, SensitiveController],
  providers: [AppService],
})
export class AppModule {}
