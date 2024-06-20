import { Injectable } from '@nestjs/common';
import { AmqpConnection, Nack } from '@nestjs-plus/rabbitmq';

@Injectable()
export class RabbitmqService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async sendMessage(message: any) {
    await this.amqpConnection.publish('exchange_name', 'routing_key', message);
  }

  async receiveMessage() {
    this.amqpConnection.createSubscriber(
      async (msg: any): Promise<Nack> => {
        try {
          console.log('Received message:', msg);
          // Traitez votre message ici
          return null; // Renvoie null si le message est traité avec succès
        } catch (error) {
          console.error('Error processing message:', error);
          return new Nack(false); // Renvoie un Nack pour indiquer que le message n'a pas été traité avec succès
        }
      },
      {
        exchange: 'exchange_name',
        routingKey: 'routing_key',
        queue: 'queue_name',
      },
    );
  }
}
