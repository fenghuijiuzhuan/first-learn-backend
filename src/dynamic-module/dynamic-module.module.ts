import { Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';
import { AaaModule } from './aaa/aaa.module';

@Module({
  controllers: [DynamicModuleController],
  providers: [DynamicModuleService],
  imports: [
    AaaModule.register({
      aaa: 111,
      bbb: 222,
    }),
  ],
})
export class DynamicModuleModule {}
