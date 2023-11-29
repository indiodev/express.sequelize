import type { SignupRequest, User } from '../dtos';

/* eslint-disable no-unused-vars */
export interface UserRepository {
	create(data: SignupRequest): Promise<User>;
	findBy: <T extends keyof User>(
		key: T,
		value: User[T],
	) => Promise<User | null>;
}
