import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { MyLogger } from './MyLogger';
import { MyLogger2 } from './MyLogger2';

@Controller('log')
export class LogController {
  @Inject(MyLogger)
  private logger: MyLogger;

  @Inject(MyLogger2)
  private logger2: MyLogger2;
  @Get()
  getHello() {
    this.logger.debug('aaa', LogController.name);
    this.logger.error('bbb', LogController.name);
    this.logger.fatal('ccc', LogController.name);
    this.logger.log('ddd', LogController.name);
    this.logger.verbose('eee', LogController.name);
    this.logger.warn('fff', LogController.name);

    this.logger2.log('yyy', LogController.name);
    return 'hello log';
  }
}
