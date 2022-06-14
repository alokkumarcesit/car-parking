import { CreateParkingFeeInput } from './create-parking-fee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateParkingFeeInput extends PartialType(CreateParkingFeeInput) {
  @Field(() => Int)
  id: number;
}
