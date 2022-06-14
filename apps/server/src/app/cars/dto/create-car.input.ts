import { InputType, Int, Field } from '@nestjs/graphql';
import { CarType } from '../../car-types/entities/car-type.entity';

@InputType()
export class CreateCarInput {
  @Field()
  vehical_number:string

  @Field()
  color:string;

  @Field(type => CarType, { nullable: true })
  car_type: CarType;
}
