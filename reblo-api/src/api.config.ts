import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const APP_BANNER = `
                    _     _
           _ __ ___| |__ | | ___  
          | '__/ _ \\ '_ \\| |/ _ \\ 
          | | |  __/ |_) | | (_) |
          |_|  \\___|_.__/|_|\\___/ 
 
[REBLO-API] 程序启动完成 -> http://127.0.0.1:5000
`;

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3311,
  username: 'root',
  password: 'root',
  database: 'reblo',
  entities: [`${__dirname}/entities/**.entity{.ts,.js}`],
  logger: 'advanced-console',
  logging: true,
  synchronize: true
};

export const JWT_CONFIG = {
  secretKey: 'REBLO-secretKey',
  options: {
    expiresIn: 5 * 60 * 60 * 24
  }
};
