import {NestFactory} from '@nestjs/core';
import {ApiModule} from './api.module';
import {APP_BANNER} from './api.config';

async function bootstrap() {
  console.log(APP_BANNER);
  const api = await NestFactory.create(ApiModule.forRoot());
  await api.listen(5000);
}


// noinspection JSIgnoredPromiseFromCall
bootstrap();
