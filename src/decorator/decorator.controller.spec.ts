import { Test, TestingModule } from '@nestjs/testing';
import { DecoratorController } from './decorator.controller';
import { DecoratorService } from './decorator.service';

describe('DecoratorController', () => {
  let controller: DecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecoratorController],
      providers: [DecoratorService],
    }).compile();

    controller = module.get<DecoratorController>(DecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
