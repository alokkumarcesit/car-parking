import { Test, TestingModule } from '@nestjs/testing';
import { ParkingFeesResolver } from './parking-fees.resolver';
import { ParkingFeesService } from './parking-fees.service';

describe('ParkingFeesResolver', () => {
  let resolver: ParkingFeesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingFeesResolver, ParkingFeesService],
    }).compile();

    resolver = module.get<ParkingFeesResolver>(ParkingFeesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
