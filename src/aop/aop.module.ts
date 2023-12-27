import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AopService } from './aop.service';
import { AopController } from './aop.controller';
import { LogMiddleware } from './log/log.middleware';

@Module({
  controllers: [AopController],
  providers: [AopService],
})
export class AopModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 只有aop/aaa路由下生效
    consumer.apply(LogMiddleware).forRoutes('aop/aaa*');
  }
}
