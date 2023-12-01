import { Module } from '@nestjs/common';
import { UserController } from 'controller';
import { UserService } from 'service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
