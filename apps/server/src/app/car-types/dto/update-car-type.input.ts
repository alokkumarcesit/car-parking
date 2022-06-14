import { CreateCarTypeInput } from './create-car-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarTypeInput extends PartialType(CreateCarTypeInput) {
  @Field(() => Int)
  id: number;
}
