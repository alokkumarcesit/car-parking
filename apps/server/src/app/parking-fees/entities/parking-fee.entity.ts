import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CarType } from '../../car-types/entities/car-type.entity';

@ObjectType()
@Entity("fees")
export class ParkingFee {
  
  @Field()
  @PrimaryGeneratedColumn()
  id:number;

  @Field()
  @OneToOne(()=>CarType)
  car_type:CarType;

  @Field()
  @Column()
  first_charge:number;

  @Field()
  @Column()
  second_charge:number;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
  
  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
