import { BelongsTo, Column, ForeignKey, Table } from 'sequelize-typescript';

import { Base } from './Base';
import { User } from './User';

@Table({
	timestamps: true,
	tableName: 'api_tokens',
})
export class ApiToken extends Base {
	@Column({
		allowNull: false,
	})
	declare name: string;

	@Column({
		allowNull: false,
		defaultValue: 'Baerer',
	})
	declare type: string;

	@Column({
		allowNull: false,
	})
	declare token: string;

	@ForeignKey(() => User)
	@Column({
		allowNull: false,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	declare user_id: string;

	@BelongsTo(() => User)
	declare user: User;
	// @BeforeUpdate
	// @BeforeCreate
	// static async generatePasswordHash(user: User): Promise<void> {
	// 	const password_hash = await hash(user.password, 6);
	// 	user.password = password_hash;
	// }
}
