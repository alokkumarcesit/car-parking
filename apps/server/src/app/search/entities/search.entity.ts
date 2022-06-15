import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Search {
  @Field({nullable:true})
  car:string;

  @Field({nullable:true})
  slot:string

  @Field({nullable:true})
  owmer:string;
}
