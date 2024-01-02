import { Module } from '@nestjs/common';
import { DecoratorService } from './decorator.service';
import { DecoratorController } from './decorator.controller';
import { ControllerController } from './custom-decorator/controller.controller';

@Module({
  controllers: [DecoratorController, ControllerController],
  providers: [DecoratorService],
})
export class DecoratorModule {}
