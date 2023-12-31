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
		},

		email: {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},

		password: {
			type: DataType.STRING,
			allowNull: false,
			validate: {
				min: 6,
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
