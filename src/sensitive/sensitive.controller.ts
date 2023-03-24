import { Controller, Get, Query } from '@nestjs/common';
import { SensitiveService } from './sensitive.service';
import { SensitiveType } from './constants';

@Controller('sensitive')
export class SensitiveController {
  constructor(private readonly sensitiveService: SensitiveService) {}

  // http://localhost:8888/sensitive/get-by-type?type=set
  @Get('/get-by-type')
  getSensitive(@Query('type') type: SensitiveType) {
    return this.sensitiveService.getSensitive(type);
  }
}
