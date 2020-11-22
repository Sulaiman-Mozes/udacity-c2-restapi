import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.postgress;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.USERNAME,
  "password": c.PASSWORD,
  "database": c.DATABASE,
  "host":     c.HOST,

  dialect: 'postgres',
  storage: ':memory:',
});

