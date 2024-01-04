import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { DddService } from '../ddd/ddd.service';

@Injectable()
export class CccService {
  constructor(
    @Inject(forwardRef(() => DddService)) private dddService: DddService,
  ) {}

  ccc() {
    return 'ccc';
  }

  eee() {
    return this.dddService.ddd() + 'eee';
  }
}
