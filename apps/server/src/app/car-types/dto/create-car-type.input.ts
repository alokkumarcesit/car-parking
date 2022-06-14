import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarTypeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
