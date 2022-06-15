import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Car } from '../cars/entities/car.entity';
import { Parking } from '../parkings/entities/parking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Car, Parking])],
  providers: [SearchResolver, SearchService, Car],
})
export class SearchModule {}
