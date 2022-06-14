import { Module } from '@nestjs/common';
import { ParkingFeesService } from './parking-fees.service';
import { ParkingFeesResolver } from './parking-fees.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingFee } from './entities/parking-fee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ParkingFee])],
  providers: [ParkingFeesResolver, ParkingFeesService]
})
export class ParkingFeesModule {}
