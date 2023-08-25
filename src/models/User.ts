import { hash } from 'bcryptjs';
import {
	BeforeCreate,
	BeforeUpdate,
	Column,
	IsEmail,
	Table,
	Unique,
} from 'sequelize-typescript';

import { Base } from './Base';

@Table({
	timestamps: true,
	tableName: 'users',
})
export class User extends Base {
	@Unique
	@Column({
		allowNull: false,
	})
	declare name: string;

	@Column({
		allowNull: false,
	})
	declare password: string;

	@IsEmail
	@Column({
		allowNull: false,
	})
	declare email: string;

	@BeforeUpdate
	@BeforeCreate
	static async generatePasswordHash(user: User): Promise<void> {
		const password_hash = await hash(user.password, 6);
		user.password = password_hash;
	}
}
