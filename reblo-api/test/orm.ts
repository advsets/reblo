import 'reflect-metadata';
import {ConnectionOptions, createConnection, getRepository} from 'typeorm';

const options: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3311,
  username: 'root',
  password: '123456',
  database: 'reblo',
  entityPrefix: 'reblo_',
  synchronize: true,
  entities: [`${__dirname}/entity/**`]
};

async function bootstrap() {
  try {
    const connection = await createConnection(options);
    console.log('success');
  } catch (error) {
    console.log(error.stack ? error.stack : error);

  }
}

bootstrap().then();
