import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dtos/students.dto';
import { User } from '../common/decorators';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // Link - http://localhost:8888/students/who-are-you-get?name=222
  @Get('who-are-you-get')
  whoAreYou(@Query('name') name: string) {
    return this.studentsService.findAll(name);
  }

  // 测试链接 -  curl -X POST -d"name=NB"  http://127.0.0.1:8888/students/who-are-you-post
  // 测试链接 -  curl -X POST http://127.0.0.1:8888/students/who-are-you-post -H 'Content-Type: application/json' -d '{"name": 1}'
  // 测试链接 -  curl -X POST http://127.0.0.1:8888/students/who-are-you-post -H 'Content-Type: application/json' -d '{"name": "辛望牛逼"}'
  @Post('who-are-you-post')
  whoAreYouPost(@Body() student: StudentDto) {
    return this.studentsService.ImXW(student.name) ?? 'not fund';
  }

  // Link - http://localhost:8888/students/get-name-by-id?id=1
  @Get('get-name-by-id')
  getNameById(@Query('id', ParseIntPipe) id: number) {
    return this.studentsService.getStudentName(id);
  }

  // curl -X POST http://127.0.0.1:8888/students/set-student-name -H 'Content-Type: application/json' -d '{"user": "xw"}'
  @Post('set-student-name')
  setStudentName(@User() user: string) {
    return this.studentsService.setStudent(user);
  }

  @Get('delete-student-name')
  removeStudent(@Query('id', ParseIntPipe) id: number) {
    // return this.studentsService.removeStudent(id);
  }

  // curl -X POST http://127.0.0.1:8888/students/who-is-request -H 'Content-Type: application/json' -d '{"user": "xinwang"}'
  @Post('who-is-request')
  whoIsReq(@User() user: string) {
    return user;
  }
}
