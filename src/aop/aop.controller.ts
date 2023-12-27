import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  Query,
  UsePipes,
  UseFilters,
} from '@nestjs/common';
import { AopService } from './aop.service';
import { CreateAopDto } from './dto/create-aop.dto';
import { UpdateAopDto } from './dto/update-aop.dto';
import { LoginGuard } from './login/login.guard';
import { TimeInterceptor } from './time.interceptor';
import { Time2Interceptor } from './time2.interceptor';
import { ValidatePipe } from './validate.pipe';
import { Validate2Pipe } from './validate2.pipe';
import { TestFilter } from './test.filter';
import { Test2Filter } from './test2.filter';

@Controller('aop')
@UseInterceptors(Time2Interceptor)
@UsePipes(Validate2Pipe)
@UseFilters(Test2Filter)
export class AopController {
  constructor(private readonly aopService: AopService) {}

  @Get()
  hello() {
    console.log('handler...');

    return 'hello aop';
  }

  @Get('aaa')
  @UseGuards(LoginGuard)
  aaa() {
    console.log('aop aaa...');

    return 'aop aaa';
  }

  @Get('bbb')
  @UseInterceptors(TimeInterceptor)
  bbb() {
    console.log('aop bbb...');
    return 'aop bbb';
  }

  @Get('ccc')
  @UseFilters(TestFilter)
  ccc(@Query('num', ValidatePipe) num: number) {
    return num + 1;
  }

  @Post()
  create(@Body() createAopDto: CreateAopDto) {
    return this.aopService.create(createAopDto);
  }

  // findAll不会被匹配到 被hello代替
  @Get()
  findAll() {
    console.log('handler2...');

    return this.aopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAopDto: UpdateAopDto) {
    return this.aopService.update(+id, updateAopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aopService.remove(+id);
  }
}
