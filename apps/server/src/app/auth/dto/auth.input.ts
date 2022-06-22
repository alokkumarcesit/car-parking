import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field(() => String)
  email?: string;

  @Field(() => String)
  password?: string;
}

@ObjectType()
export class LoginResult {
  @Field(() => String)
  email?: string;

  @Field(() => String)
  token?: string;
}
