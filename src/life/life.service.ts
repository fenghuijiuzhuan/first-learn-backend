import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateLifeDto } from './dto/create-life.dto';
import { UpdateLifeDto } from './dto/update-life.dto';

@Injectable()
export class LifeService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('service onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('service onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('service onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('service beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('service onApplicationShutdown', signal);
  }

  create(createLifeDto: CreateLifeDto) {
    return 'This action adds a new life';
  }

  findAll() {
    return `This action returns all life`;
  }

  findOne(id: number) {
    return `This action returns a #${id} life`;
  }

  update(id: number, updateLifeDto: UpdateLifeDto) {
    return `This action updates a #${id} life`;
  }

  remove(id: number) {
    return `This action removes a #${id} life`;
  }
}
