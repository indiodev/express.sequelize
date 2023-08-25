/* eslint-disable no-unused-vars */
import { UserAlreadyExistsError } from '../../errors/user/already-exists';
import type { User } from '../../models/User';
import type { UserRepository } from '../../repositories/user';
import type { RegisterType } from '../../schemas/user/register';

export class RegisterUseCase {
	constructor(private usersRepository: UserRepository) {}

	async execute(data: RegisterType): Promise<User> {
		const userWithSameEmail = await this.usersRepository.findBy(
			'email',
			data.email,
		);

		if (userWithSameEmail) throw new UserAlreadyExistsError();

		return await this.usersRepository.create(data);
	}
}
