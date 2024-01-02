import { Get, UseGuards, applyDecorators } from '@nestjs/common';
import { CustomDecorator } from './custom-decorator.decorator';
import { CustomDecoratorGuard } from './custom-decorator.guard';

export function MergedDecorator(path, role) {
  return applyDecorators(
    Get(path),
    CustomDecorator(role),
    UseGuards(CustomDecoratorGuard),
  );
}
