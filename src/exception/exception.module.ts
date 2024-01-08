import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';
import { HelloFilter } from './hello.filter';
import { OtherService } from 'src/other/other.service';

@Module({
  imports: [],
  controllers: [ExceptionController],
  providers: [OtherService, HelloFilter],
})
export class ExceptionModule {}
