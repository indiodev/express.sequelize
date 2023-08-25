import { DataType } from 'sequelize-typescript';

import type { Migrate } from '../umzug';

const table_name = 'users';

export const up: Migrate = async ({ context: sequelize }) => {
	await sequelize.createTable(table_name, {
		id: {
			type: DataType.UUID,
			defaultValue: DataType.UUIDV4,
			allowNull: false,
			unique: true,
		},

		name: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'Name is required',
				},
			},
		},

		email: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: {
					msg: 'E-mail valid is required',
				},
				notNull: {
					msg: 'E-mail is required',
				},
			},
		},

		password: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'Password is required',
				},
				min: {
					msg: 'Password min 6 char',
					args: [6],
				},
			},
		},

		created_at: {
			type: DataType.DATE,
			allowNull: false,
			defaultValue: new Date(),
		},

		updated_at: {
			type: DataType.DATE,
			allowNull: false,
			defaultValue: new Date(),
		},
	});
};

export const down: Migrate = async ({ context: sequelize }) => {
	await sequelize.dropTable(table_name);
};
