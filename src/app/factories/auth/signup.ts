import {
	SequelizeTokenRepository,
	SequelizeUserRepository,
} from '~/app/repositories';
import { BcryptService } from '~/app/services';
import { SignupUseCase } from '~/app/use-cases';

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
