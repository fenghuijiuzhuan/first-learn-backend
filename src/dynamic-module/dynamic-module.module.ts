import { Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';
import { AaaModule } from './aaa/aaa.module';
import { CccModule, CccModule2 } from './ccc/ccc.module';

@Module({
  controllers: [DynamicModuleController],
  providers: [DynamicModuleService],
  imports: [
    AaaModule.register({
      aaa: 111,
      bbb: 222,
    }),
    // CccModule.register({
    //   aaa: 1,
    //   bbb: 'bbb',
    // }),
    // CccModule.registerAsync({
    //   useFactory: async () => {
    //     await 111;
    //     return {
    //       aaa: 222,
    //       bbb: ' bbb',
    //     };
    //   },
    //   inject: [],
    // }),
    CccModule2.register({
      aaa: 333,
      bbb: 'bbb',
      isGlobal: true,
    }),
  ],
})
export class DynamicModuleModule {}
