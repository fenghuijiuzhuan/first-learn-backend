import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HelloFilter } from './hello.filter';
import { AaaDto } from './dto/aaa.dto';
import { UnLoginException, UnLoginFilter } from './unlogin.filter';

@Controller('exception')
@UsePipes(new ValidationPipe())
@UseFilters(HelloFilter)
export class ExceptionController {
  @Get()
  hello() {
    // throw new HttpException('xxxx', HttpStatus.BAD_REQUEST);
    // throw new BadRequestException('yyy');
    throw new BadGatewayException('yyy');
    return 'hello';
  }

  @Post('aaa')
  aaa(@Body() aaaDto: AaaDto) {
    return 'success';
  }

  @Post('bbb')
  @UseFilters(UnLoginFilter)
  bbb(@Body() bbb) {
    throw new UnLoginException();
  }
}
