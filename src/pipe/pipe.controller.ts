import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { JjPipe } from './jj.pipe';
import { Kk } from './dto/kk.dto';

enum Ggg {
  AAA = '111',
  BBB = '222',
  CCC = '333',
}

@Controller('pipe')
export class PipeController {
  @Get()
  parseInt(
    @Query(
      'aa',
      new ParseIntPipe({
        // 错误时修改返回
        // errorHttpStatusCode: HttpStatus.NOT_FOUND,
        exceptionFactory(error) {
          console.log(error);
          throw new HttpException('xxx' + error, HttpStatus.NOT_IMPLEMENTED);
        },
      }),
    )
    aa: number,
  ) {
    return aa + 1;
  }

  @Get('cc')
  parseFloat(@Query('cc', ParseFloatPipe) cc: number) {
    return cc + 1;
  }

  @Get('dd')
  parseBool(@Query('dd', ParseBoolPipe) dd: boolean) {
    return dd;
  }

  @Get('ee')
  parseArray(
    @Query(
      'ee',
      new ParseArrayPipe({
        separator: '..',
        optional: true,
      }),
    )
    ee: number[],
  ) {
    // return ee.reduce((total, cur) => total + cur, 0);
    return ee;
  }

  @Get('gg/:enum')
  parseEnum(@Param('enum', new ParseEnumPipe(Ggg)) e: Ggg) {
    return e;
  }

  @Get('hh/:uuid')
  parseUUID(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return uuid;
  }

  @Get('ii')
  defaultValue(@Query('ii', new DefaultValuePipe('aaa')) ii: string) {
    return ii;
  }
  @Get('jj/:bbb')
  jj(@Query('aaa', JjPipe) aaa: string, @Param('bbb', JjPipe) bbb: string) {
    return aaa + bbb;
  }

  @Post('kk')
  kk(@Body(new ValidationPipe()) obj: Kk) {
    console.log(obj);
    return obj;
  }
}
