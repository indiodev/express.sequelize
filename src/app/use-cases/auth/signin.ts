/* eslint-disable no-unused-vars */
import type { SigninRequest, SigninResponse } from '~/app/dtos/auth/signin';
import { AppError } from '~/app/errors/app';
import type { TokenRepository } from '~/app/repositories/token';
import type { UserRepository } from '~/app/repositories/user';
import type { CryptoService } from '~/app/services/crypto';

export class SigninUseCase {
	constructor(
		private usersRepository: UserRepository,
		private cryptoService: CryptoService,
		private tokenRepository: TokenRepository,
	) {}

	async execute(data: SigninRequest): Promise<SigninResponse> {
		const exist_user = await this.usersRepository.findBy('email', data.email);

		if (!exist_user) throw new AppError('User not found', 404);
	}
}
