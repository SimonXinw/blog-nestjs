import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dtos/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  // Link - http://localhost:8888/students/who-are-you-get?name=222
  @Get('who-are-you-get')
  whoAreYou(@Query('name', ParseIntPipe) name: number) {
    return this.studentsService.ImStudent(name);
  }

  // 测试链接 curl -X POST -d"name=NB"  http://127.0.0.1:3000/students/who-are-you-post
  @Post('who-are-you-post')
  whoAreYouPost(@Body() student: StudentDto) {
    return this.studentsService.ImXW(student.name);
  }

  // Link - http://localhost:8888/students/get-name-by-id?id=1
  @Get('get-name-by-id')
  getNameById(@Query('id', ParseIntPipe) id: number) {
    return this.studentsService.getStudentName(id);
  }
}
