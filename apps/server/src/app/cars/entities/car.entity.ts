import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  @Field()
  car_type:string;
}
