import { Controller, Get, Param } from '@nestjs/common';
import { Employees } from 'src/dto/employees';
import { EnWorkService } from './en-work.service';

@Controller('en-work')
export class EnWorkController {
  constructor(private enWorkService: EnWorkService) {}

  @Get()
  getEmployees(): Employees[] {
    return this.enWorkService.readAll();
  }
}
