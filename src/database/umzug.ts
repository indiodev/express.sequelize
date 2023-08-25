/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { SequelizeStorage, Umzug } from 'umzug';

import { SequelizeConnection } from './connection';

export const Migrator = new Umzug({
	migrations: {
		glob: ['migrations/*.ts', { cwd: __dirname }],
		// resolve: (params) => ({ ...params }),
	},
	context: SequelizeConnection.getQueryInterface(),
	storage: new SequelizeStorage({
		sequelize: SequelizeConnection,
		modelName: 'migrator_meta_data',
	}),
	logger: console,
	create: {
		folder: `${__dirname}/migrations`,
	},
});

export const Seeder = new Umzug({
	migrations: {
		glob: ['seeders/*.ts', { cwd: __dirname }],
	},
	context: SequelizeConnection.getQueryInterface(),
	storage: new SequelizeStorage({
		sequelize: SequelizeConnection,
		modelName: 'seeder_meta_data',
	}),
	logger: console,
});

export type Migrate = typeof Migrator._types.migration;
export type Seed = typeof Seeder._types.migration;
