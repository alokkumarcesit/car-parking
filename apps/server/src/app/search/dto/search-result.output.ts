import { Field, ObjectType } from "@nestjs/graphql";
import { Car } from "../../cars/entities/car.entity";
import { Parking } from "../../parkings/entities/parking.entity";
import { User } from "../../users/entities/user.entity";

@ObjectType()
export class SearchResult{
    @Field(type=>[User], {nullable:true})
    owner:User[]

    @Field(()=>[Parking],{nullable:true})
    slot:Parking[]

    @Field(()=>[Car], {nullable:true})
    car:Car[]
} 