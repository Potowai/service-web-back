import { Controller, Get } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';

@Controller()
export class AppController {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  @Get('send')
  async sendMessage() {
    await this.rabbitmqService.sendMessage({ text: 'Hello, RabbitMQ!' });
    return 'Message sent';
  }

  @Get('receive')
  async receiveMessage() {
    await this.rabbitmqService.receiveMessage();
    return 'Listening for messages';
  }
}
