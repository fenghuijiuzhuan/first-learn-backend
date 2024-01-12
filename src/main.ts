import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
import { GlobalGuard } from './global/global.guard';
import { Time3Interceptor } from './global/time3.interceptor';
import { GlobalPipe } from './global/global.pipe';
import * as session from 'express-session';
import { join } from 'path';
console.log(session);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.use(
    session({
      secret: 'lalala',
      cookie: {
        maxAge: 100000,
      },
    }),
  );

  app.useStaticAssets('public', { prefix: '/static' });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.useStaticAssets(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  app.use(function (req: Request, res: Response, next: NextFunction) {
    // 全局中间件
    // console.log('before', req.url);
    next();
    // console.log('after');
  });

  app.useGlobalPipes(new GlobalPipe());
  app.useGlobalInterceptors(new Time3Interceptor());
  app.useGlobalGuards(new GlobalGuard());
  // setTimeout(() => {
  //   app.close();
  // }, 10000);
  await app.listen(3000);
  console.log('server start port: 3000');
}
bootstrap();
