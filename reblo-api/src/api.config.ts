import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const APP_BANNER = `

           _ __ ___| |__ | | ___  
          | '__/ _ \\ '_ \\| |/ _ \\ 
          | | |  __/ |_) | | (_) |
          |_|  \\___|_.__/|_|\\___/ 
 
[REBLO-API] 程序启动完成 -> http://127.0.0.1:5000
`;

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3311,
  username: 'root',
  password: '123456',
  database: 'reblo',
  entities: [`${__dirname}/entities/**.entity.ts`],
  logger: 'advanced-console',
  logging: false,
  synchronize: true,
  dropSchema: false
};

export const JWT_CONFIG = {
  secretKey: 'REBLO-secretKey',
  options: {
    expiresIn: 5 * 60 * 60 * 24
  }
};
