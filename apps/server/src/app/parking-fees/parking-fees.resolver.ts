import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ParkingFeesService } from './parking-fees.service';
import { ParkingFee } from './entities/parking-fee.entity';
import { CreateParkingFeeInput } from './dto/create-parking-fee.input';
import { UpdateParkingFeeInput } from './dto/update-parking-fee.input';

@Resolver(() => ParkingFee)
export class ParkingFeesResolver {
  constructor(private readonly parkingFeesService: ParkingFeesService) {}

  @Mutation(() => ParkingFee)
  createParkingFee(@Args('createParkingFeeInput') createParkingFeeInput: CreateParkingFeeInput) {
    return this.parkingFeesService.create(createParkingFeeInput);
  }

  @Query(() => [ParkingFee], { name: 'parkingFees' })
  findAll() {
    return this.parkingFeesService.findAll();
  }

  @Query(() => ParkingFee, { name: 'parkingFee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.parkingFeesService.findOne(id);
  }

  @Mutation(() => ParkingFee)
  updateParkingFee(@Args('updateParkingFeeInput') updateParkingFeeInput: UpdateParkingFeeInput) {
    return this.parkingFeesService.update(updateParkingFeeInput.id, updateParkingFeeInput);
  }

  @Mutation(() => ParkingFee)
  removeParkingFee(@Args('id', { type: () => Int }) id: number) {
    return this.parkingFeesService.remove(id);
  }
}
