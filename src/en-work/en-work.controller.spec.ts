import { Test, TestingModule } from '@nestjs/testing';
import { EnWorkController } from './en-work.controller';

describe('EnWorkController', () => {
  let controller: EnWorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnWorkController],
    }).compile();

    controller = module.get<EnWorkController>(EnWorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
