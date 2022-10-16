import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { OperationsService } from './operations.service';
import { Operation } from './operation.entity';

@Controller('operations')
export class OperationsController {
  constructor(private operationsService: OperationsService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<Operation[]> {
    const data = await this.operationsService.findAll();
    console.log(data);

    return data;
  }
}
