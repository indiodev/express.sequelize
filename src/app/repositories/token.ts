/* eslint-disable no-unused-vars */
import type { ApiToken } from '../models/ApiToken';
import type { User } from '../models/User';

export interface TokenRepository {
	generate(user: Partial<User>): Promise<ApiToken>;
}
