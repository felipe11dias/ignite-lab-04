import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['talented-rhino-10283-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dGFsZW50ZWQtcmhpbm8tMTAyODMkgLEvAPqhXmF9_D1ia12Y0uX-RbYhdZr_3FE',
          password:
            'v-pOKaDrLM45NWK_6ql1zzoqqOmJA-wOKzhnfQSF4TRwpNnyWNCylCynvyARShbW3oh4Vw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
