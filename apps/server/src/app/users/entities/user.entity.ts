import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum UserRole{
  ADMIN = 'admin',
  GUEST= "guest"
}

@ObjectType()
@Entity()
export class User {

  @Field()
  @PrimaryGeneratedColumn()
  id:number;

  @Column('text',{})
  @Field()
  name:string;

  @Column('text',{
    nullable:true,
    unique:true,
  })
  @Field({nullable:true})
  email:string;


  @Column('text',{
    nullable:true
  })
  password:string;

  @Column({
    type: "enum",
    enum: UserRole,
    default:UserRole.GUEST
  })
  @Field()
  role:string;

  @Column('bigint',{
    unique:true,
    nullable:true,
  })
  @Field(()=>Float, {nullable:true})
  phone:number;

  @Field()
  @Column({default:true})
  isActive:boolean;
}
