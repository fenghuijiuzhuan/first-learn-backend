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
    {
      provide: APP_FILTER,
      useClass: Global2Filter,
    },
  ],
})
export class AppModule {}
