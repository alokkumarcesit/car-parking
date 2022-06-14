import { Test, TestingModule } from '@nestjs/testing';
import { ParkingsResolver } from './parkings.resolver';
import { ParkingsService } from './parkings.service';

describe('ParkingsResolver', () => {
  let resolver: ParkingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingsResolver, ParkingsService],
    }).compile();

    resolver = module.get<ParkingsResolver>(ParkingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
