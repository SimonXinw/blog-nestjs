import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/students.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  private readonly logger = new Logger(StudentsService.name);

  /**
   * @GET
   */
  async findAll(name?: string) {
    // return this.studentRepository.find() ?? 'not fund';
  }

  ImXW(name: string) {
    this.logger.log(`log >>>>>> get student name is ${name}`);

    return 'not fund';
  }

  /**
   * @获取学生姓名
   */
  async getStudentName(id: number) {
    this.logger.log(`Fn Name: ${this.getStudentName.name} >>> data: ${id}`);

    const results = await this.studentRepository.findOne({
      where: { id },
    });

    return results ?? '没找到';
  }

  async setStudentName(name: string) {
    this.logger.log(`Fn Name: ${this.setStudentName.name} >>> params: ${name}`);

    const results = await this.studentRepository.save({ name });

    return results ?? '没找到';
  }
}
