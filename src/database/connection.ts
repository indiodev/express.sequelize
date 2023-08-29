import { resolve } from 'path';
import { Sequelize } from 'sequelize-typescript';

import { Env } from '../config/env';

const model_path_files = `${resolve(
	process.cwd(),
	'src/app/models/[^Base]*.ts',
)}`;

export const SequelizeConnection = new Sequelize({
	host: Env.PG_HOST,
	username: Env.PG_USERNAME,
	password: Env.PG_PASSWORD,
	database: Env.PG_DATABASE,
	port: Env.PG_PORT,
	schema: Env.PG_SCHEMA,
	dialect: 'postgres',
	models: [model_path_files],
});
