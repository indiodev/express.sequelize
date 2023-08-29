import { DataType } from 'sequelize-typescript';

import type { Migrate } from '../umzug';

const table_name = 'api_tokens';

export const up: Migrate = async ({ context: sequelize }) => {
	await sequelize.createTable(table_name, {
		id: {
			type: DataType.UUID,
			defaultValue: DataType.UUIDV4,
			allowNull: false,
			unique: true,
		},

		user_id: {
			type: DataType.UUID,
			allowNull: false,

			references: {
				model: {
					tableName: 'users',
					schema: 'public',
				},
				key: 'id',
			},
			onDelete: 'cascade',
			onUpdate: 'cascade',
		},

		token: {
			type: DataType.STRING,
			allowNull: false,
		},

		refresh_token: {
			type: DataType.STRING,
			allowNull: false,
		},

		expire_date: {
			type: DataType.DATE,
			allowNull: false,
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
