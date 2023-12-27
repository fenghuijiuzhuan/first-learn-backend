import { PartialType } from '@nestjs/mapped-types';
import { CreateLifeDto } from './create-life.dto';

export class UpdateLifeDto extends PartialType(CreateLifeDto) {}
