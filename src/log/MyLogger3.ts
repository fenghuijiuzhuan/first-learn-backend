import { LoggerService } from '@nestjs/common';
import * as chalk from 'chalk';
import * as dayjs from 'dayjs';
import { Logger, createLogger, format, transports } from 'winston';

export class MyLogger implements LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'debug',
      transports: [
        new transports.Console({
          format: format.combine(
            format.colorize(),
            format.printf(({ context, level, message, time }) => {
              const appStr = chalk.green(`[NEST]`);
              const contextStr = chalk.yellow(`[${context}]`);
              return `${appStr} ${time} ${level} ${contextStr} ${message}`;
            }),
          ),
        }),
        new transports.File({
          format: format.combine(format.timestamp(), format.json()),
          filename: '111.log',
          dirname: 'log',
        }),
      ],
    });
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
