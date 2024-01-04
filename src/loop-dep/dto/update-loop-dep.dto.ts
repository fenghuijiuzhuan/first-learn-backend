import { PartialType } from '@nestjs/mapped-types';
import { CreateLoopDepDto } from './create-loop-dep.dto';

export class UpdateLoopDepDto extends PartialType(CreateLoopDepDto) {}
