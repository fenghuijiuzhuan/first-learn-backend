import { Module } from '@nestjs/common';
import { CccController } from './ccc.controller';
import {
  ConfigurableModuleClass,
  ConfigurableModuleClass2,
} from './ccc.module-definition';

@Module({
  controllers: [CccController],
})
export class CccModule extends ConfigurableModuleClass {}

@Module({
  controllers: [CccController],
})
export class CccModule2 extends ConfigurableModuleClass2 {}
