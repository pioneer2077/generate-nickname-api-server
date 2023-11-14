import { PartialType } from '@nestjs/mapped-types';
import { CreateNicknameDto } from './create-nickname.dto';

export class UpdateNicknameDto extends PartialType(CreateNicknameDto) {}
