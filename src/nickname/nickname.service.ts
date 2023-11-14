import { Injectable } from '@nestjs/common';
import { CreateNicknameDto } from './dto/create-nickname.dto';
import { UpdateNicknameDto } from './dto/update-nickname.dto';

@Injectable()
export class NicknameService {
  create(createNicknameDto: CreateNicknameDto) {
    return 'This action adds a new nickname';
  }

  findAll() {
    return `This action returns all nickname`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nickname`;
  }

  update(id: number, updateNicknameDto: UpdateNicknameDto) {
    return `This action updates a #${id} nickname`;
  }

  remove(id: number) {
    return `This action removes a #${id} nickname`;
  }
}
