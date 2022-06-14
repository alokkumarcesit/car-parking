import { Test, TestingModule } from '@nestjs/testing';
import { ParkingFeesService } from './parking-fees.service';

describe('ParkingFeesService', () => {
  let service: ParkingFeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingFeesService],
    }).compile();

    service = module.get<ParkingFeesService>(ParkingFeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
