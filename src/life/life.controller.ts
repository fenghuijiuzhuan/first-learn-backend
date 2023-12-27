import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { LifeService } from './life.service';
import { CreateLifeDto } from './dto/create-life.dto';
import { UpdateLifeDto } from './dto/update-life.dto';

@Controller('life')
export class LifeController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly lifeService: LifeService) {}

  onModuleInit() {
    console.log('controller onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('controller onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('controller onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('controller beforeApplicationShutdown', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('controller onApplicationShutdown', signal);
  }

  @Post()
  create(@Body() createLifeDto: CreateLifeDto) {
    return this.lifeService.create(createLifeDto);
  }

  @Get()
  findAll() {
    return this.lifeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lifeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLifeDto: UpdateLifeDto) {
    return this.lifeService.update(+id, updateLifeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lifeService.remove(+id);
  }
}
