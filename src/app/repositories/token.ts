/* eslint-disable no-unused-vars */
import type { Token, User } from '../dtos';

export interface TokenRepository {
	generate(user: Partial<User>): Promise<Token>;
}
