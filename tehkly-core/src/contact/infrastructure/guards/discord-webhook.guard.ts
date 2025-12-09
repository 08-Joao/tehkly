import { ExecutionContext, Injectable, UnauthorizedException, CanActivate } from "@nestjs/common";

@Injectable()
export class DiscordWebhookGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['contact-token'];
        
        if (!token || token !== process.env.CONTACT_TOKEN) {
            throw new UnauthorizedException('Invalid or missing token');
        }
        return true;
    }
}