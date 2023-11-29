import {
	BelongsTo,
	Column,
	DataType,
	ForeignKey,
	Table,
} from 'sequelize-typescript';

import { Base } from './Base';
import { User } from './User';

@Table({
	timestamps: true,
	tableName: 'api_tokens',
})
export class ApiToken extends Base {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare token: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	declare refresh_token: string;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	declare expire_date: Date;

	@ForeignKey(() => User)
	@Column({
		type: DataType.STRING,
		allowNull: false,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE',
	})
	declare user_id: string;

	@BelongsTo(() => User)
	declare user: User;
}
