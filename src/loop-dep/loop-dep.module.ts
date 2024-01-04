import { Module } from '@nestjs/common';
import { LoopDepService } from './loop-dep.service';
import { LoopDepController } from './loop-dep.controller';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { CccService } from './ccc/ccc.service';
import { DddService } from './ddd/ddd.service';

@Module({
  controllers: [LoopDepController],
  providers: [LoopDepService, CccService, DddService],
  imports: [AaaModule, BbbModule],
})
export class LoopDepModule {}
