import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepo: Repository<Car>){}
  create(createCarInput: CreateCarInput) {
    this.carRepo.create(createCarInput);
    return this.carRepo.save(createCarInput);
  }

  findAll() {
    return this.carRepo.find({});
  }

  findOne(id: number) {
    return this.carRepo.findOneBy({id});
  }
}
