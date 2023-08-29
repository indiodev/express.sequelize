/* eslint-disable no-unused-vars */

import type { User } from '../models/User';

export interface TokenService {
	generate(user: Partial<User>): { token: string; refresh_token: string };
}
