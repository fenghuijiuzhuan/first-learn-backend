import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class JjPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('自定义pipe', value, metadata);

    return 'aaa';
  }
}
