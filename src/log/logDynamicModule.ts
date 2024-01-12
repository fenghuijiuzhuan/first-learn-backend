import { DynamicModule, Module } from '@nestjs/common';
import { MyLogger2 } from './MyLogger2';

@Module({})
export class logDynamicModule {
  static register(option): DynamicModule {
    return {
      module: logDynamicModule,
      providers: [
        MyLogger2,
        {
          provide: 'LOG_OPTIONS',
          useValue: option,
        },
      ],
      exports: [MyLogger2, 'LOG_OPTIONS'],
    };
  }
}
