import { Injectable } from '@nestjs/common';

@Injectable()
export class RxjsService {
  hello() {
    return 'hello';
  }
}
