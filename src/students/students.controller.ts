import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDto } from './dtos/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('who-are-you-get')
  whoAreYou(@Query('name') name: string) {
    return this.studentsService.ImStudent(name);
  }

  @Post('who-are-you-post')
  whoAreYouPost(@Body() student: StudentDto) {
    return this.studentsService.ImXW(student.name);
  }
}