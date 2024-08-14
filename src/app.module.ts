import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://huuthientech:Thien1997@ongsangtao.rhfsi.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
