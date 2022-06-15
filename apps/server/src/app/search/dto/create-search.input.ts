import { InputType, Field, ObjectType } from '@nestjs/graphql';

@InputType('SearchInput')
export class SearchInput {
  @Field({ nullable: true })
  owner_name: string;

  @Field({ nullable: true })
  owner_role: string;

  @Field({ nullable: true })
  owner_phone: number;

  @Field({ nullable: true })
  vehical_number: string;

  @Field({ nullable: true })
  color: string;

  @Field({ nullable: true })
  car_type: string;

  @Field({ nullable: true })
  locationCode: string;

  @Field({ nullable: true })
  lotSize: number;
}
