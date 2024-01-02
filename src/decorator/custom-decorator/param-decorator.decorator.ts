import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const CustomParamDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return '自定义参数装饰器';
  },
);
