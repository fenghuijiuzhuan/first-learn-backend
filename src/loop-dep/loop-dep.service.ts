import { Injectable } from '@nestjs/common';
import { CreateLoopDepDto } from './dto/create-loop-dep.dto';
import { UpdateLoopDepDto } from './dto/update-loop-dep.dto';
import { CccService } from './ccc/ccc.service';
import { DddService } from './ddd/ddd.service';

@Injectable()
export class LoopDepService {
  constructor(
    private cccService: CccService,
    private dddService: DddService,
  ) {}

  getHello() {
    return this.cccService.eee() + this.dddService.ddd();
  }

  create(createLoopDepDto: CreateLoopDepDto) {
    return 'This action adds a new loopDep';
  }

  findAll() {
    return `This action returns all loopDep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loopDep`;
  }

  update(id: number, updateLoopDepDto: UpdateLoopDepDto) {
    return `This action updates a #${id} loopDep`;
  }

  remove(id: number) {
    return `This action removes a #${id} loopDep`;
  }
}
