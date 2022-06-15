import { InputType, Field } from '@nestjs/graphql';
import { CarType } from '../../car-types/entities/car-type.entity';

@InputType('CreateCarInput')
export class CreateCarInput {
  @Field()
  vehical_number: string;

  @Field()
  color: string;

  @Field()
  car_type: string;
}
