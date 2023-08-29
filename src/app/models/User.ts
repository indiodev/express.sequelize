import { Column, HasOne, IsEmail, Table, Unique } from 'sequelize-typescript';

import { ApiToken } from './ApiToken';
import { Base } from './Base';

@Table({
	timestamps: true,
	tableName: 'users',
})
export class User extends Base {
	@Column({
		allowNull: false,
	})
	declare name: string;

	@Column({
		allowNull: false,
	})
	declare password: string;

	@Unique
	@IsEmail
	@Column({
		allowNull: false,
	})
	declare email: string;

	@HasOne(() => ApiToken, 'user_id')
	declare token: ApiToken;
}
