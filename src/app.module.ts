import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';
import { BbbModule } from './bbb/bbb.module';
import { GlobalModule } from './global/global.module';
import { LifeModule } from './life/life.module';
import { AopModule } from './aop/aop.module';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { Global2Guard } from './global/global2.guard';
import { Time4Interceptor } from './global/time4.interceptor';
import { Global2Pipe } from './global/global2.pipe';
import { Global2Filter } from './global/global2.filter';
import { DecoratorModule } from './decorator/decorator.module';
import { AaaController } from './aaa.controller';
import { LoopDepModule } from './loop-dep/loop-dep.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { PipeModule } from './pipe/pipe.module';
import { ExceptionModule } from './exception/exception.module';
import { UploadModule } from './upload/upload.module';
import { LogModule } from './log/log.module';
import { WinstonModule } from './winston/winston.module';
import { format, transports } from 'winston';
import * as chalk from 'chalk';
import 'winston-daily-rotate-file';

@Module({
  imports: [
    PersonModule,
    OtherModule,
    BbbModule,
    GlobalModule,
    LifeModule,
    AopModule,
    DecoratorModule,
    LoopDepModule,
    DynamicModuleModule,
    RxjsModule,
    PipeModule,
    ExceptionModule,
    UploadModule,
    LogModule,
    WinstonModule.forRoot({
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
        new transports.DailyRotateFile({
          format: format.combine(format.timestamp(), format.json()),
          filename: 'test-%DATE%.log',
          datePattern: 'YYYY-MM-DD-HH-mm',
          dirname: 'log',
          maxSize: '10k',
        }),
      ],
    }),
  ],
  controllers: [AppController, AaaController],
  providers: [
    {
      provide: 'app-service',
      useClass: AppService,
    },
    {
      provide: 'person',
      useFactory() {
        return {
          name: '郭',
          age: '17',
        };
      },
    },
    {
      provide: 'person2',
      useExisting: 'person',
    },
    {
      provide: 'person3',
      useFactory(person: { name: string }, appService: AppService) {
        return {
          name: person.name,
          desc: appService.getHello(),
        };
      },
      inject: ['person', 'app-service'],
    },
    {
      provide: APP_GUARD,
      useClass: Global2Guard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: Time4Interceptor,
    },
    {
      provide: APP_PIPE,
      useClass: Global2Pipe,
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: Global2Filter,
    // },
  ],
})
export class AppModule {}
