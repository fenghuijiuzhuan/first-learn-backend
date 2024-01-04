import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoopDepService } from './loop-dep.service';
import { CreateLoopDepDto } from './dto/create-loop-dep.dto';
import { UpdateLoopDepDto } from './dto/update-loop-dep.dto';

@Controller('loop-dep')
export class LoopDepController {
  constructor(private readonly loopDepService: LoopDepService) {}

  @Get()
  hello() {
    return this.loopDepService.getHello();
  }

  @Post()
  create(@Body() createLoopDepDto: CreateLoopDepDto) {
    return this.loopDepService.create(createLoopDepDto);
  }

  @Get()
  findAll() {
    return this.loopDepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loopDepService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoopDepDto: UpdateLoopDepDto) {
    return this.loopDepService.update(+id, updateLoopDepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loopDepService.remove(+id);
  }
}
