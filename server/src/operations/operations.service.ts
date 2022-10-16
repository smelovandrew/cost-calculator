import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Operation } from './operation.entity';

@Injectable()
export class OperationsService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
    @InjectRepository(Operation)
    private usersRepository: Repository<Operation>,
  ) {}

  findAll(): Promise<Operation[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Operation> {
    return this.usersRepository.findOneBy({ id });
  }

  createOne(operation: Partial<Operation>): Promise<Operation> {
    return this.usersRepository.save(new Operation(operation));
  }
}
