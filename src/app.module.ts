import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 按照这里的配置，所有entity的对象可以自动注入，不需导入到任何模块了
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
