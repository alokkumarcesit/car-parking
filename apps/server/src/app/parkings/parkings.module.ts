import { Module } from '@nestjs/common';
import { ParkingsService } from './parkings.service';
import { ParkingsResolver } from './parkings.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './entities/parking.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Parking])],
  providers: [ParkingsResolver, ParkingsService]
})
export class ParkingsModule {}
