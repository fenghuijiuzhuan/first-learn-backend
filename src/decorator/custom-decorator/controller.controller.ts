import { Get, SetMetadata, UseGuards } from '@nestjs/common';
import { DecoratorService } from '../decorator.service';
import { MyController, MyController2 } from './controller.decorator';
import { CustomDecoratorGuard } from './custom-decorator.guard';

// @Controller('controller')
// @MyController()
@MyController2('controller2', 2)
export class ControllerController {
  constructor(private readonly decoratorService: DecoratorService) {}
  @Get('aaa')
  @SetMetadata('custom-decorator', 'admin')
  @UseGuards(CustomDecoratorGuard)
  hello2() {
    return '自定义组合controller metadata装饰器';
  }

  @Get()
  hello() {
    return this.decoratorService.findAll() + '自定义controller装饰器';
  }
}
