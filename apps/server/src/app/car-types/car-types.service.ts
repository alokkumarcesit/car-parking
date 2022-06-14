import { Injectable } from '@nestjs/common';
import { CreateCarTypeInput } from './dto/create-car-type.input';
import { UpdateCarTypeInput } from './dto/update-car-type.input';

@Injectable()
export class CarTypesService {
  create(createCarTypeInput: CreateCarTypeInput) {
    return 'This action adds a new carType';
  }

  findAll() {
    return `This action returns all carTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carType`;
  }

  update(id: number, updateCarTypeInput: UpdateCarTypeInput) {
    return `This action updates a #${id} carType`;
  }

  remove(id: number) {
    return `This action removes a #${id} carType`;
  }
}
