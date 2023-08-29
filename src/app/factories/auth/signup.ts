import { SequelizeTokenRepository } from '~/app/repositories/sequelize/token';
import { SequelizeUserRepository } from '~/app/repositories/sequelize/user';
import { BcryptService } from '~/app/services/implements/crypto';
import { SignupUseCase } from '~/app/use-cases/auth/signup';

export function MakeSignupUseCase(): SignupUseCase {
	const userRepository = new SequelizeUserRepository();
	const bcryptService = new BcryptService();
	const tokenRepository = new SequelizeTokenRepository();

	const useCase = new SignupUseCase(
		userRepository,
		bcryptService,
		tokenRepository,
	);

	return useCase;
}
