import { SequelizeUserRepository } from '../../repositories/sequelize/user';
import { RegisterUseCase } from '../../use-cases/user/register';

export function MakeRegisterUseCase(): RegisterUseCase {
	const userRepository = new SequelizeUserRepository();
	const useCase = new RegisterUseCase(userRepository);

	return useCase;
}
