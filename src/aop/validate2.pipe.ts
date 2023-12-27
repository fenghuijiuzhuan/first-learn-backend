import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Validate2Pipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('aop pipe validate2 to controller', value);

    return value + 1;
  }
}
