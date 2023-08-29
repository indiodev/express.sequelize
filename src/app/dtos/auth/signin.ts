import type { Token } from '../token';
import type { User } from '../user';

export interface SigninRequest {
	email: string;
	name: string;
}

export interface SigninResponse extends Token {
	user: Partial<User>;
}
