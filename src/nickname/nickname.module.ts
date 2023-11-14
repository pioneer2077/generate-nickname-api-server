import { Module } from '@nestjs/common';
import { NicknameService } from './nickname.service';
import { NicknameController } from './nickname.controller';

@Module({
  controllers: [NicknameController],
  providers: [NicknameService],
})
export class NicknameModule {}
