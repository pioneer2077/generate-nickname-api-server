import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { NicknameModule } from './nickname/nickname.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'gjsqud01!',
      username: 'postgres',
      entities: [],
      database: 'nickname-db',
      synchronize: true,
      logging: true,
    }),
    NicknameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
