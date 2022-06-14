import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParkingsService } from './parkings.service';
import { Parking } from './entities/parking.entity';
import { CreateParkingInput } from './dto/create-parking.input';
import { UpdateParkingInput } from './dto/update-parking.input';

@Resolver(() => Parking)
export class ParkingsResolver {
  constructor(private readonly parkingsService: ParkingsService) {}

  @Mutation(() => Parking)
  createParking(@Args('createParkingInput') createParkingInput: CreateParkingInput) {
    return this.parkingsService.create(createParkingInput);
  }

  @Query(() => [Parking], { name: 'parkings' })
  findAll() {
    return this.parkingsService.findAll();
  }

  @Query(() => Parking, { name: 'parking' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parkingsService.findOne(id);
  }

  @Mutation(() => Parking)
  updateParking(@Args('updateParkingInput') updateParkingInput: UpdateParkingInput) {
    return this.parkingsService.update(updateParkingInput.id, updateParkingInput);
  }

  @Mutation(() => Parking)
  removeParking(@Args('id', { type: () => Int }) id: number) {
    return this.parkingsService.remove(id);
  }
}
