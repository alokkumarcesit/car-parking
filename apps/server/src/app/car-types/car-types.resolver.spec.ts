import { Test, TestingModule } from '@nestjs/testing';
import { CarTypesResolver } from './car-types.resolver';
import { CarTypesService } from './car-types.service';

describe('CarTypesResolver', () => {
  let resolver: CarTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarTypesResolver, CarTypesService],
    }).compile();

    resolver = module.get<CarTypesResolver>(CarTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
