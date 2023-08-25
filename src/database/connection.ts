import { Sequelize } from 'sequelize-typescript';

import { Env } from '../env';
import { User } from '../models/User';

export const SequelizeConnection = new Sequelize({
	host: Env.PG_HOST,
	username: Env.PG_USERNAME,
	password: Env.PG_PASSWORD,
	database: Env.PG_DATABASE,
	port: Env.PG_PORT,
	schema: Env.PG_SCHEMA,
	dialect: 'postgres',
	models: [User],
});
