import { LoggerService } from '@nestjs/common';
import * as chalk from 'chalk';
import * as dayjs from 'dayjs';
import { Logger, createLogger, format, transports } from 'winston';

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor(options) {
    this.logger = createLogger(options);
  }

  log(message: any, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('info', message, { context, time });
  }

  error(message: any, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('error', message, { context, time });
  }

  warn(message: any, context: string) {
    const time = dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    this.logger.log('warn', message, { context, time });
  }
}
