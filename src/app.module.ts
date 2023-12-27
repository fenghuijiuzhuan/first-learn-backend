import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';
import { BbbModule } from './bbb/bbb.module';
import { GlobalModule } from './global/global.module';
import { LifeModule } from './life/life.module';
import { AopModule } from './aop/aop.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { Global2Guard } from './global/global2.guard';
import { Time4Interceptor } from './global/time4.interceptor';

@Module({
  imports: [
    PersonModule,
    OtherModule,
    BbbModule,
    GlobalModule,
    LifeModule,
    AopModule,
  ],
  controllers: [AppController],
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
  ],
})
export class AppModule {}
