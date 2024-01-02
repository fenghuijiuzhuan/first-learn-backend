import { Controller, SetMetadata, applyDecorators } from '@nestjs/common';

export const MyController = () => Controller('controller');
export const MyController2 = (path, metadata) => {
  return applyDecorators(Controller(path), SetMetadata('controller', metadata));
};
