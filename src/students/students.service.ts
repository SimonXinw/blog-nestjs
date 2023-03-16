import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  ImStudent(name?: string) {
    return 'Im xw nb plus' + name;
  }

  ImXW(name: string) {
    return 'XW  NB' + name;
  }
}
