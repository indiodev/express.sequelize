import type { Request, Response } from 'express';
import { ZodError } from 'zod';

import { UserAlreadyExistsError } from '~/errors/user/already-exists';

import { MakeRegisterUseCase } from '../../factories/user/register';
import { RegisterSchema } from '../../schemas/user/register';

export async function register(
	request: Request,
	response: Response,
): Promise<Response> {
	try {
		const data = RegisterSchema.parse(request.body);

		const registerUseCase = MakeRegisterUseCase();

		const user = await registerUseCase.execute(data);

		return response.status(200).json(user);
	} catch (error) {
		if (error instanceof UserAlreadyExistsError)
			return response.status(409).json({ message: error.message });

		if (error instanceof ZodError) return response.status(409).json(error);

		return response.status(409).json(error);
	}
}
