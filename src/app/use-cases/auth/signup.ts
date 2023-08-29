/* eslint-disable no-unused-vars */
import type { SignupRequest, SignupResponse } from '~/app/dtos/auth/signup';
import { UserAlreadyExistsError } from '~/app/errors/user/already-exists';
import type { TokenRepository } from '~/app/repositories/token';
import type { UserRepository } from '~/app/repositories/user';
import type { CryptoService } from '~/app/services/crypto';

export class SignupUseCase {
	constructor(
		private usersRepository: UserRepository,
		private cryptoService: CryptoService,
		private tokenRepository: TokenRepository,
	) {}

	async execute(data: SignupRequest): Promise<SignupResponse> {
		const userWithSameEmail = await this.usersRepository.findBy(
			'email',
			data.email,
		);

		if (userWithSameEmail) throw new UserAlreadyExistsError();

		const password_hash = await this.cryptoService.hash(data.password, 6);

		const { id, name, email } = await this.usersRepository.create({
			...data,
			password: password_hash,
		});

		const { token, refresh_token } = await this.tokenRepository.generate({
			id,
			name,
			email,
		});

		return { user: { id, name, email }, token, refresh_token };
	}
}
