import {
  Controller,
  Get,
  Header,
  HostParam,
  HttpCode,
  Next,
  Redirect,
  Render,
  Req,
  Res,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Controller({
  host: ':host.0.0.1',
  path: 'aaa',
})
export class AaaController {
  @Get('bbb')
  bbb(@HostParam('host') host) {
    return 'aaa bbb host:' + host;
    // aaa bbb host:127
  }

  @Get('ccc')
  ccc(@Req() req: Request) {
    console.log(req.hostname);
    console.log(req.url);
    return 'aaa ccc';
  }

  @Get('ddd')
  ddd(@Res({ passthrough: true }) res: Response) {
    console.log(res);

    res.end('aaa ddd');
  }

  @Get('eee')
  eee(@Next() next: NextFunction) {
    console.log('handler1');
    next(); // 转到下个handler
    return 'aaa eee handler1';
  }

  @Get('eee')
  eee2() {
    console.log('handler2');
    return 'aaa eee handler2';
  }

  @Get('fff')
  @HttpCode(300)
  fff() {
    // 修改状态码
    return 'aaa fff';
  }

  @Get('ggg')
  @Header('a1', 'b2')
  ggg() {
    // res headers 增加a1: b2
    return 'aaa ggg';
  }

  // 重定向路由
  @Get('hhh')
  @Redirect('http://juejin.cn')
  hhh() {}

  // 重定向路由
  @Get('iii')
  @Redirect()
  async iii() {
    return {
      url: 'http://juejin.cn',
      statusCode: 302,
    };
  }

  @Get('user')
  @Render('user')
  user() {
    return { name: 'yvan', age: 22 };
  }
}
