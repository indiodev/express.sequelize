import { SequelizeTokenRepository } from '~/app/repositories/sequelize/token';
import { SequelizeUserRepository } from '~/app/repositories/sequelize/user';
import { BcryptService } from '~/app/services/implements/crypto';
import { RegisterUseCase } from '~/app/use-cases/user/register';

export function MakeRegisterUseCase(): RegisterUseCase {
	const userRepository = new SequelizeUserRepository();
	const bcryptService = new BcryptService();
	const tokenRepository = new SequelizeTokenRepository();

	const useCase = new RegisterUseCase(
		userRepository,
		bcryptService,
		tokenRepository,
	);

	return useCase;
}
