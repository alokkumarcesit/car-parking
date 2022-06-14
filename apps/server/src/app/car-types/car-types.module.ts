import { Module } from '@nestjs/common';
import { CarTypesService } from './car-types.service';
import { CarTypesResolver } from './car-types.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarType } from './entities/car-type.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CarType])],
  providers: [CarTypesResolver, CarTypesService]
})
export class CarTypesModule {}
