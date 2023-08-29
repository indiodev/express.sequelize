import type { SignupRequest } from '~/app/dtos/auth/signup';
import type { User as UserDto } from '~/app/dtos/user';
import { User } from '~/app/models/User';

import type { UserRepository } from '../user';

export class SequelizeUserRepository implements UserRepository {
	async findBy<T extends keyof UserDto>(
		key: T,
		value: UserDto[T],
	): Promise<UserDto | null> {
		return await User.findOne({ where: { [key]: value } });
	}

	async create(data: SignupRequest): Promise<UserDto> {
		return await User.create({ ...data });
	}
}
