import { Inject, Injectable } from '@nestjs/common';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';
import { AaaService } from 'src/aaa/aaa.service';
import { GlobalService } from 'src/global/global.service';

@Injectable()
export class BbbService {
  constructor(private aaaService: AaaService) {}

  @Inject(GlobalService)
  private readonly globalService: GlobalService;

  create(createBbbDto: CreateBbbDto) {
    return 'This action adds a new bbb';
  }

  findAll() {
    return (
      `This action returns all bbb` +
      this.aaaService.findAll() +
      this.globalService.findAll()
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} bbb`;
  }

  update(id: number, updateBbbDto: UpdateBbbDto) {
    return `This action updates a #${id} bbb`;
  }

  remove(id: number) {
    return `This action removes a #${id} bbb`;
  }
}
