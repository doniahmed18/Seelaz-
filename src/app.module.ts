import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './User/users.module';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://seelaz:seelaz1@seelaz.9ixjhvt.mongodb.net/',{
      dbName: 'Seelaz',
    })
    , UsersModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 
}
