import type { Request, Response } from 'express';
import { ZodError } from 'zod';

import { UserAlreadyExistsError } from '~/app/errors/user/already-exists';
import { MakeSignupUseCase } from '~/app/factories/auth/signup';
import { Validator } from '~/app/validators';

export async function signup(
	request: Request,
	response: Response,
): Promise<Response> {
	try {
		const data = Validator.Signup.parse(request.body);

		const signupUseCase = MakeSignupUseCase();

		const signup = await signupUseCase.execute(data);

		return response.status(200).json(signup);
	} catch (error) {
		if (error instanceof UserAlreadyExistsError)
			return response.status(409).json({ message: error.message });

		if (error instanceof ZodError) return response.status(409).json(error);

		return response.status(409).json(error);
	}
}
