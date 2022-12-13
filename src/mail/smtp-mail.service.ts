import { Injectable } from "@nestjs/common";

@Injectable()
export class SMTPMailService implements MailService {
    sendEmail(): string {
        return "SMTP Mail!";
    }
}