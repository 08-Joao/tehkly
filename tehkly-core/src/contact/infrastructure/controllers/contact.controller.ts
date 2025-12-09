import { Body, Controller, Post, UseGuards, HttpCode } from '@nestjs/common';
import { ContactService } from 'src/contact/application/services/contact.service';
import { NewContactDto } from 'src/contact/dtos/new-contact.dto';
import { DiscordWebhookGuard } from '../guards/discord-webhook.guard';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @UseGuards(DiscordWebhookGuard)
    @Post()
    @HttpCode(201)
    async newContact(@Body() createContactDto: NewContactDto) {
        return this.contactService.newContact(createContactDto);
    }
}
