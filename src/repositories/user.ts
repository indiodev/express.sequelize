/* eslint-disable no-unused-vars */

import type { User } from '../models/User';
import type { RegisterType } from '../schemas/user/register';

export interface UserRepository {
	create(data: RegisterType): Promise<User>;
	findBy: <T extends keyof User>(
		key: T,
		value: User[T],
	) => Promise<User | null>;
}
