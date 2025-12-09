import { Module } from '@nestjs/common';
import { ContactService } from './services/contact.service';
import { ContactController } from '../infrastructure/controllers/contact.controller';


@Module({
  providers: [ContactService],
  controllers: [ContactController]
})
export class ContactModule {}
