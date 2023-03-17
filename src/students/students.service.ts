import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  ImStudent(name?: number) {
    return typeof name;
  }

  ImXW(name: string) {
    return 'XW  NB' + name;
  }

  // 获取学生姓名
  getStudentName(id: number) {
    const ID_NAME_MAP = {
      1: '王阳明',
    };

    return ID_NAME_MAP[id] ?? 'not found';
  }
}