import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/students.entity';

@Injectable()
export class StudentsService {
  private readonly logger = new Logger(StudentsService.name);

  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  /**
   * @GET
   */
  async findAll(name?: string) {
    return this.studentRepository.find() ?? 'not fund';
  }

  ImXW(name: string) {
    this.logger.log(`log >>>>>> get student name is ${name}`);

    return 'not fund';
  }

  /**
   * @获取学生姓名
   */
  async getStudentName(id: number) {
    this.logger.log(`log >>>>>> get student id is ${id}`);

    const results = await this.studentRepository.find();

    return results && 'not found';
  }

  async setStudent(name: string) {
    const results = await this.studentRepository.create({ name });

    return results;
  }

  async removeStudent(id: number) {
    await this.studentRepository.delete(id);
  }
}
