import {
	Column,
	CreatedAt,
	DataType,
	Model,
	PrimaryKey,
	Unique,
	UpdatedAt,
} from 'sequelize-typescript';

export class Base extends Model {
	@Unique
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		allowNull: false,
		// unique: true,
		defaultValue: DataType.UUIDV4,
	})
	declare id: string;

	@CreatedAt
	declare created_at: Date;

	@UpdatedAt
	declare updated_at: Date;
}
