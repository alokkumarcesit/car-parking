import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../cars/entities/car.entity';
import { Parking } from '../parkings/entities/parking.entity';
import { User } from '../users/entities/user.entity';
import { SearchInput } from './dto/create-search.input';
import { SearchResult } from './dto/search-result.output';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(Car) private carRepo: Repository<Car>,
    @InjectRepository(Parking) private parkingRepo: Repository<Parking>
  ) {}

  async findAll(searchInput: SearchInput) {
    const result: SearchResult = { car: null, owner: null, slot: null };
    if (
      searchInput.car_type ||
      searchInput.color ||
      searchInput.vehical_number
    ) {
      const car = await this.carRepo.find({
        where: [
          { vehical_number: searchInput.vehical_number },
          { color: searchInput.color },
          { car_type: searchInput.car_type },
        ],
      });
      result.car = car;
    }
    if (
      searchInput.owner_name ||
      searchInput.owner_role ||
      searchInput.owner_phone
    ) {
      const owner = await this.userRepo.find({
        where: [
          { name: searchInput.owner_name },
          { role: searchInput.owner_role },
          { phone: searchInput.owner_phone },
        ],
      });

      result.owner = owner.map((data) => ({ ...data } as User));
    }
    if (searchInput.locationCode || searchInput.lotSize) {
      const slot = await this.parkingRepo.findBy({
        locationCode: searchInput.locationCode,
        lotSize: searchInput.lotSize,
      });
      result.slot = slot;
    }
    return result;
  }
}
