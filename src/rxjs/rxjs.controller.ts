import { Controller, Get, Next, UseInterceptors } from '@nestjs/common';
import { RxjsService } from './rxjs.service';
import { RxjsInterceptor } from './rxjs.interceptor';
import { MapInterceptor } from './map.interceptor';
import { TapInterceptor } from './tap.interceptor';
import { CatchErrorInterceptor } from './catch-error.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller('rxjs')
export class RxjsController {
  constructor(private readonly rxjsService: RxjsService) {}

  @Get()
  @UseInterceptors(RxjsInterceptor, MapInterceptor, TapInterceptor)
  hello(@Next() next): string {
    next();
    return this.rxjsService.hello();
  }

  @Get()
  @UseInterceptors(CatchErrorInterceptor)
  hello2() {
    throw new Error('xxxx');
  }

  @Get('timeout')
  @UseInterceptors(TimeoutInterceptor)
  async timeout() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return 'timeout';
  }
}
