import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { CarType } from '../../car-types/entities/car-type.entity';

@ObjectType()
@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn()
  @Field()
  id:number

  @Column("text")
  @Field()
  vehical_number:string

  @Column()
  @Field()
  color:string;

  @Field(type => CarType, { nullable: true })
  @OneToOne(()=>CarType)
  @JoinColumn()
  car_type:CarType;

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
  
  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
