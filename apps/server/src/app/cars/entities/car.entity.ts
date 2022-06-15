import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType('Car')
@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column('text')
  @Field()
  vehical_number: string;

  @Column()
  @Field()
  color: string;

  @Field({ nullable: true })
  @Column()
  car_type: string;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
