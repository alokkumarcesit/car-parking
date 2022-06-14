import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {
  @Field()
  vehical_number:string

  @Field()
  color:string;

  @Field()
  car_type:string;
}
