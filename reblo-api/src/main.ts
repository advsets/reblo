import {NestFactory} from '@nestjs/core';

import {ApiModule} from './api.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ApiModule, {});
  await app.listenAsync();
}

bootstrap();
