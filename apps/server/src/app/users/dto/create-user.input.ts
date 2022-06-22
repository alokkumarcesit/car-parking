import { InputType, Float, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @MinLength(10)
  @Field(() => Float, { nullable: true })
  phone: number;

  @Field()
  name: string;

  @IsEmail()
  @Field()
  email: string;

  @MinLength(6)
  @Field({ nullable: true, description: 'Password of the user' })
  password: string;

  @Field({ nullable: true })
  role: string;
}
