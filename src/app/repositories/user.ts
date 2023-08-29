/* eslint-disable no-unused-vars */
import type { SignupRequest } from '../dtos/auth/signup';
import type { User } from '../dtos/user';

export interface UserRepository {
	create(data: SignupRequest): Promise<User>;
	findBy: <T extends keyof User>(
		key: T,
		value: User[T],
	) => Promise<User | null>;
}
