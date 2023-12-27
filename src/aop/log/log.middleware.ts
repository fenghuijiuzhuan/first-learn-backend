import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('aop middleware log before', req.url);

    next();

    console.log('aop middleware log after');
  }
}
