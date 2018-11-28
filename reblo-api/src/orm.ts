import 'reflect-metadata';
import {ConnectionOptions, createConnection, Like, FindOperator} from 'typeorm';
import {Visitor} from './entities/visitor.entity';

const options: ConnectionOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3311,
  username: 'root',
  password: '123456',
  database: 'reblo',
  entities: [Visitor],
  logger: 'advanced-console',
  logging: false,
  synchronize: true,
  dropSchema: false
};

async function bootstrap() {
  const connection = await createConnection(options);
  const visitorRepo = connection.getRepository(Visitor);

  // for (let i = 0; i < 100; i++) {
  //
  //   let visitor = new Visitor();
  //   visitor.info = {hello: `world-${i}`};
  //   await visitorRepo.save(visitor);
  // }

  let currentPage = 1;
  let pageSize = 10;
  let contain = '';
  const qb = visitorRepo
    .createQueryBuilder('v')
    // .where({info: Like('%99%')})
    .where({info: Like(`%${contain}%`)})
    .skip((currentPage - 1) * pageSize)
    .take(pageSize);
  console.log(qb.getSql());
  // .offset((currentPage - 1) * pageSize)
  // .limit(pageSize);

  const c = {
    current: 1,
    pageSize: 10,
    totalCount: 0,
    totalPage: 0,
    rows: []
  };

  const rows = await qb.getMany();
  const totalCount = await qb.getCount();

  console.log({rows, totalCount, pageCount: Math.ceil(totalCount / pageSize), currentPage, pageSize});

  await connection.close();
}

// noinspection JSIgnoredPromiseFromCall
bootstrap();
