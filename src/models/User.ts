import { hash } from 'bcryptjs';
import {
	BeforeCreate,
	BeforeUpdate,
	Column,
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

	@BeforeUpdate
	@BeforeCreate
	static async generatePasswordHash(user: User): Promise<void> {
		const password_hash = await hash(user.password, 6);
		user.password = password_hash;
	}
}

// @HasOne(() => InitialValues, 'playerId')
// initialValues: InitialValues;
