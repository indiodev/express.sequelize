/* eslint-disable no-unused-vars */

import type { SigninRequest, SigninResponse } from '~/app/dtos';
import { AppError } from '~/app/errors';
import type { TokenRepository, UserRepository } from '~/app/repositories';
import type { CryptoService } from '~/app/services';

export class SigninUseCase {
	constructor(
		private usersRepository: UserRepository,
		private cryptoService: CryptoService,
		private tokenRepository: TokenRepository,
	) {}

	// TODO: Create a token
	// TODO: Create a refresh token
	// TODO: Create SigninResponse
	async execute(data: SigninRequest): Promise<SigninResponse | null> {
		const exist_user = await this.usersRepository.findBy('email', data.email);

		if (!exist_user) throw new AppError('User not found', 404);

		return null;
	}
}
