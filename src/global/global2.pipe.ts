import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class Global2Pipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('pipe global2 to provider', value);

    return value;
  }
}
