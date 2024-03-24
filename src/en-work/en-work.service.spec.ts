import { Test, TestingModule } from '@nestjs/testing';
import { EnWorkService } from './en-work.service';

describe('EnWorkService', () => {
  let service: EnWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnWorkService],
    }).compile();

    service = module.get<EnWorkService>(EnWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
