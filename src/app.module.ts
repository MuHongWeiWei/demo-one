import { Module } from '@nestjs/common';
import { CoreModule } from './Core';
import { UserModule } from './User';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreService } from './Core/service';

@Module({
  imports: [CoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService, CoreService],
})
export class AppModule {}
