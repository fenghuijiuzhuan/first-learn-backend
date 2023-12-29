import { Module } from '@nestjs/common';
import { DecoratorService } from './decorator.service';
import { DecoratorController } from './decorator.controller';

@Module({
  controllers: [DecoratorController],
  providers: [DecoratorService],
})
export class DecoratorModule {}
