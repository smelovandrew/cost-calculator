import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum FlowTypes {
  'inflow',
  'outflow',
}

enum Currencies {
  'SGD',
  'USD',
}

enum OperationTypes {
  'food',
  'transport',
  'salary',
  'other',
}

@Entity()
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 16 })
  flowType: FlowTypes;

  @Column({ type: 'varchar', length: 16 })
  operationType: OperationTypes;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'datetime' })
  date: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 8, default: Currencies.SGD })
  currency: Currencies;

  @CreateDateColumn()
  createdAt: Date;

  constructor(rawOperation: Partial<Operation>) {
    Object.assign(this, rawOperation);
  }
}
