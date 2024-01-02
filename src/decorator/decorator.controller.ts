import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  SetMetadata,
  UseGuards,
  Headers,
  Ip,
  Session,
  UseFilters,
} from '@nestjs/common';
import { DecoratorService } from './decorator.service';
import { CreateDecoratorDto } from './dto/create-decorator.dto';
import { UpdateDecoratorDto } from './dto/update-decorator.dto';
import { AaaDto } from './dto/aaa.dto';
import { DecoratorGuard } from './decorator.guard';
import { ContextFilter } from './context/context.filter';
import { AaaException } from './context/AaaException';
import { ContextGuard } from './context/context.guard';
import { Roles } from './context/role.decorator';
import { Role } from './context/role';

@Controller('api/decorator')
@SetMetadata('roles', ['user'])
export class DecoratorController {
  constructor(private readonly decoratorService: DecoratorService) {}

  @Get('context')
  @UseFilters(ContextFilter)
  @UseGuards(ContextGuard)
  @Roles(Role.Admin)
  context(): string {
    throw new AaaException('aaa', 'bbb');
  }

  @Post('/aaa')
  aaa(@Body() aaa: AaaDto) {
    console.log(aaa);
    return 'decorator aaa';
  }

  @Post()
  create(@Body() createDecoratorDto: CreateDecoratorDto) {
    return this.decoratorService.create(createDecoratorDto);
  }

  @Get('/bbb')
  @UseGuards(DecoratorGuard)
  @SetMetadata('roles', ['admin'])
  bbb() {
    return 'decorator bbb';
  }

  @Get('/ccc')
  ccc(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept, headers);
    return 'decorator ccc';
  }

  @Get('/Ip')
  ip(@Ip() ip: string) {
    console.log(ip);
    return 'decorator ip: ' + ip;
  }

  @Get('/session')
  session(@Session() session) {
    console.log(session);
    if (!session.count) {
      session.count = 0;
    }
    session.count = session.count + 1;
    return 'decorator session: ' + session.count;
  }

  @Get()
  findAll() {
    return this.decoratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decoratorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDecoratorDto: UpdateDecoratorDto,
  ) {
    return this.decoratorService.update(+id, updateDecoratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decoratorService.remove(+id);
  }
}
