/* eslint-disable no-unused-vars */
import type { Token } from '../dtos/token';
import type { User } from '../dtos/user';

export interface TokenRepository {
	generate(user: Partial<User>): Promise<Token>;
}
