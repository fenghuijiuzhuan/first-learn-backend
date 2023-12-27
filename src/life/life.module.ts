import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { LifeService } from './life.service';
import { LifeController } from './life.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [LifeController],
  providers: [LifeService],
})
export class LifeModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('module onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('module onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('module onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('module beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    const lifeService = this.moduleRef.get<LifeService>(LifeService);
    console.log('----------------', lifeService, lifeService.findAll());

    console.log('module onApplicationShutdown', signal);
  }
}
