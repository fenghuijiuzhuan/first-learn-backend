import { SetMetadata } from '@nestjs/common';

export const CustomDecorator = (...args: string[]) => SetMetadata('custom-decorator', args);
