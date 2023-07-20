import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const developmentOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: true,
};

const productionOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
};

const typeOrmOptions = {
  development: developmentOptions,
  production: productionOptions,
};

export function getTypeOrmModuleOptions(): TypeOrmModuleOptions {
  return typeOrmOptions[process.env.NODE_ENV];
}
