import { Controller, Get, Inject } from '@nestjs/common';
import {
  CccModuleOptions,
  MODULE_OPTIONS_TOKEN,
  MODULE_OPTIONS_TOKEN2,
  OPTIONS_TYPE2,
} from './ccc.module-definition';

@Controller('dynamic-module/ccc')
export class CccController {
  // @Inject(MODULE_OPTIONS_TOKEN)
  // private options: CccModuleOptions;

  @Inject(MODULE_OPTIONS_TOKEN2)
  private options2: typeof OPTIONS_TYPE2;

  // @Get()
  // hello() {
  //   return this.options;
  // }

  @Get('aaa')
  hello2() {
    return this.options2;
  }
}
