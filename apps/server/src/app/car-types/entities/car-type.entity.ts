import { ObjectType, Field } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity("cartypes")
@ObjectType()
export class CarType {
  @PrimaryGeneratedColumn()
  @Field()
  id:number

  @Column()
  @Field()
  type:string;
  
  @Field({nullable:true})
  @Column()
  @CreateDateColumn()
  created_at: Date;
  
  @Field({nullable:true})
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
