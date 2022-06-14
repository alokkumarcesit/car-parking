import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Entity("parkings")
export class Parking {
  @Field()
  @PrimaryGeneratedColumn()
  id:number

  @Field()
  @Column({unique:true})
  locationCode: string;

  @Field()
  @Column()
  location_details: string;

  @Field()
  @Column({default:0})
  lotSize: number;

  @Field()
  @OneToOne(()=>User,{nullable:true})
  @JoinColumn()
  owners: User

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;
  
  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
