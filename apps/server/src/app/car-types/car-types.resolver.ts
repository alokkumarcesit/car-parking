import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarTypesService } from './car-types.service';
import { CarType } from './entities/car-type.entity';
import { CreateCarTypeInput } from './dto/create-car-type.input';
import { UpdateCarTypeInput } from './dto/update-car-type.input';

@Resolver(() => CarType)
export class CarTypesResolver {
  constructor(private readonly carTypesService: CarTypesService) {}

  @Mutation(() => CarType)
  createCarType(@Args('createCarTypeInput') createCarTypeInput: CreateCarTypeInput) {
    return this.carTypesService.create(createCarTypeInput);
  }

  @Query(() => [CarType], { name: 'carTypes' })
  findAll() {
    return this.carTypesService.findAll();
  }

  @Query(() => CarType, { name: 'carType' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carTypesService.findOne(id);
  }

  @Mutation(() => CarType)
  updateCarType(@Args('updateCarTypeInput') updateCarTypeInput: UpdateCarTypeInput) {
    return this.carTypesService.update(updateCarTypeInput.id, updateCarTypeInput);
  }

  @Mutation(() => CarType)
  removeCarType(@Args('id', { type: () => Int }) id: number) {
    return this.carTypesService.remove(id);
  }
}
