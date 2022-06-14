import { Injectable } from '@nestjs/common';
import { CreateParkingFeeInput } from './dto/create-parking-fee.input';
import { UpdateParkingFeeInput } from './dto/update-parking-fee.input';

@Injectable()
export class ParkingFeesService {
  create(createParkingFeeInput: CreateParkingFeeInput) {
    return 'This action adds a new parkingFee';
  }

  findAll() {
    return `This action returns all parkingFees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingFee`;
  }

  update(id: number, updateParkingFeeInput: UpdateParkingFeeInput) {
    return `This action updates a #${id} parkingFee`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingFee`;
  }
}
