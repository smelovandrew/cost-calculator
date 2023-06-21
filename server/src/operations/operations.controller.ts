import { Controller, Get, HttpStatus, Req } from '@nestjs/common';
import { Request } from 'express';
import { OperationsService } from './operations.service';
import { Operation } from './operation.entity';
import type { FailedResponse, SuccessfulResponse } from '../types';

interface GetOperationsResponse extends SuccessfulResponse {
  operations: Operation[];
}

@Controller('operations')
export class OperationsController {
  constructor(private operationsService: OperationsService) {}

  @Get()
  async findAll(
    @Req() request: Request,
  ): Promise<GetOperationsResponse | FailedResponse> {
    try {
      const operations = await this.operationsService.findAll();

      return { status: 'success', operations };
    } catch (e) {
      const error = e as Error;
      console.error(`Failed to get all operations`, error);
      request.res.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      return { status: 'error', message: error.message };
    }
  }
}
