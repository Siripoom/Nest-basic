import { Injectable } from '@nestjs/common';
import { Employees } from 'src/dto/employees';

@Injectable()
export class EnWorkService {
  private datas: Employees[] = [{ employees: 14, working: 9, notWorking: 5 }];
  readAll(): Employees[] {
    return this.datas;
  }
}
