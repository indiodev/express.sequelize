import type { Token } from '../token';
import type { User } from '../user';

export interface SignupRequest {
	name: string;
	email: string;
	password: string;
}

export interface SignupResponse extends Token {
	user: Partial<User>;
}
