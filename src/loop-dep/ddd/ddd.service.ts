import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CccService } from '../ccc/ccc.service';

@Injectable()
export class DddService {
  constructor(
    @Inject(forwardRef(() => CccService)) private cccService: CccService,
  ) {}

  ddd() {
    return this.cccService.ccc();
  }
}
