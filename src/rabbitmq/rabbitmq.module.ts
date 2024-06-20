import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@nestjs-plus/rabbitmq';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RabbitMQModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        exchanges: [
          {
            name: 'exchange_name',
            type: 'topic',
          },
        ],
        uri: configService.get<string>('RABBITMQ_URI'),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [RabbitMQModule],
})
export class RabbitmqModule {}
