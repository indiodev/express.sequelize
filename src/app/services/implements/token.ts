import { sign } from 'jsonwebtoken';

import type { User } from '~/app/models/User';
import { Env } from '~/config/env';

import type { TokenService } from '../token';

export class JWTTokenService implements TokenService {
	private token({ id, name, email }: Partial<User>): { token: string } {
		const user = { name, email };

		const token = sign({ user }, Env.TOKEN_SECRET, {
			subject: id,
			expiresIn: Env.TOKEN_EXPIRE_IN,
		});

		return { token };
	}

	private refresh_token({ id, email, name }: Partial<User>): {
		refresh_token: string;
	} {
		const user = { name, email };

		const refresh_token = sign({ user }, Env.REFRESH_TOKEN_SECRET, {
			subject: id,
			expiresIn: Env.REFRESH_TOKEN_EXPIRE_IN,
		});

		return { refresh_token };
	}

	generate(user: Partial<User>): { token: string; refresh_token: string } {
		const { token } = this.token(user);
		const { refresh_token } = this.refresh_token(user);

		return { token, refresh_token };
	}
}
