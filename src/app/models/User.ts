import {
	Column,
	DataType,
	HasOne,
	IsEmail,
	Table,
	Unique,
} from 'sequelize-typescript';

import { ApiToken } from './ApiToken';
import { Base } from './Base';

@Table({
	timestamps: true,
	tableName: 'users',
})
export class User extends Base {
	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	declare name: string;

	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	declare password: string;

	@Unique
	@IsEmail
	@Column({
		allowNull: false,
		type: DataType.STRING,
	})
	declare email: string;

	@HasOne(() => ApiToken, 'user_id')
	declare token: ApiToken;
}
