import { Injectable } from '@nestjs/common';
import { NewContactDto } from 'src/contact/dtos/new-contact.dto';

@Injectable()
export class ContactService {
    async newContact(contact: NewContactDto) {
        await fetch('https://discord.com/api/webhooks/1447712791275376841/HVx8gtTATESj_b1y-PfE46fNNMlcm9kjKM-45EJ_MwNhkC859WmsfWmT7_pvRP3zxJuS', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [
                    {
                        title: '📬 Novo Contato Recebido',
                        color: 3447003,
                        fields: [
                            {
                                name: '👤 Nome',
                                value: contact.name,
                                inline: true,
                            },
                            {
                                name: '📧 Email',
                                value: contact.email,
                                inline: true,
                            },
                            {
                                name: '📱 Telefone',
                                value: contact.phone,
                                inline: true,
                            },
                            {
                                name: '💬 Mensagem',
                                value: contact.message,
                                inline: false,
                            },
                        ],
                        footer: {
                            text: 'Tehkly - Formulário de Contato',
                        },
                        timestamp: new Date().toISOString(),
                    },
                ],
            }),
        });
        return contact;
    }
}
