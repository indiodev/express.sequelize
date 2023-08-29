import { User } from '~/app/models/User';
import type { RegisterType } from '~/app/schemas/user/register';

import type { UserRepository } from '../user';

export class SequelizeUserRepository implements UserRepository {
	async findBy<T extends keyof User>(
		key: T,
		value: User[T],
	): Promise<User | null> {
		return await User.findOne({ where: { [key]: value } });
	}

	async create(data: RegisterType): Promise<User> {
		return await User.create(data);
	}
}
