import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NicknameService } from './nickname.service';
import { CreateNicknameDto } from './dto/create-nickname.dto';
import { UpdateNicknameDto } from './dto/update-nickname.dto';

@Controller('nickname')
export class NicknameController {
  constructor(private readonly nicknameService: NicknameService) {}

  @Post()
  create(@Body() createNicknameDto: CreateNicknameDto) {
    return this.nicknameService.create(createNicknameDto);
  }

  @Get()
  findAll() {
    return this.nicknameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nicknameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNicknameDto: UpdateNicknameDto) {
    return this.nicknameService.update(+id, updateNicknameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nicknameService.remove(+id);
  }
}
