import { sign } from 'jsonwebtoken';

import type { Token } from '~/app/dtos/token';
import type { User } from '~/app/dtos/user';
import { ApiToken } from '~/app/models/ApiToken';
import { Env } from '~/config/env';

import type { TokenRepository } from '../token';

export class SequelizeTokenRepository implements TokenRepository {
	private token({ id }: Partial<User>): Pick<Token, 'token'> {
		const token = sign({}, Env.TOKEN_SECRET, {
			subject: id,
			expiresIn: `${Env.TOKEN_EXPIRE_IN}d`,
			algorithm: 'HS256',
		});

		return { token };
	}

	private refresh_token({
		id,
		email,
	}: Partial<User>): Pick<Token, 'refresh_token'> {
		const refresh_token = sign({ email }, Env.REFRESH_TOKEN_SECRET, {
			subject: id,
			expiresIn: `${Env.REFRESH_TOKEN_EXPIRE_IN}d`,
			algorithm: 'HS256',
		});

		return { refresh_token };
	}

	async generate(user: Partial<User>): Promise<Token> {
		const { token } = this.token(user);
		const { refresh_token } = this.refresh_token(user);

		const today = new Date();
		const expire_date = new Date(today).setDate(
			today.getDate() + Env.REFRESH_TOKEN_EXPIRE_IN,
		);

		return await ApiToken.create({
			token,
			refresh_token,
			user_id: user.id,
			expire_date,
		});
	}
}
