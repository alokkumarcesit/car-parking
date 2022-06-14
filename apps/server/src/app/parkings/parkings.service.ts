import { Injectable } from '@nestjs/common';
import { CreateParkingInput } from './dto/create-parking.input';
import { UpdateParkingInput } from './dto/update-parking.input';

@Injectable()
export class ParkingsService {
  create(createParkingInput: CreateParkingInput) {
    return 'This action adds a new parking';
  }

  findAll() {
    return `This action returns all parkings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parking`;
  }

  update(id: number, updateParkingInput: UpdateParkingInput) {
    return `This action updates a #${id} parking`;
  }

  remove(id: number) {
    return `This action removes a #${id} parking`;
  }
}
