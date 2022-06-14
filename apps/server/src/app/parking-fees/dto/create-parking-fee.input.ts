import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateParkingFeeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
