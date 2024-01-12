import { Module } from '@nestjs/common';
import { LogController } from './log.controller';
import { MyLogger } from './MyLogger';
import { logDynamicModule } from './logDynamicModule';

@Module({
  imports: [
    logDynamicModule.register({
      xxx: 1,
      yyy: 2,
    }),
  ],
  controllers: [LogController],
  providers: [MyLogger],
  exports: [MyLogger],
})
export class LogModule {}
