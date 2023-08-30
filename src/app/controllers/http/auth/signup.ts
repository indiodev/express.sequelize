import type { NextFunction, Request, Response } from 'express';

import { MakeSignupUseCase } from '~/app/factories/auth/signup';
import { Validator } from '~/app/validators';

export async function signup(
	request: Request,
	response: Response,
	next: NextFunction,
): Promise<Response | undefined> {
	try {
		const data = Validator.Signup.parse(request.body);
		const signupUseCase = MakeSignupUseCase();

		const signup = await signupUseCase.execute(data);

		return response.status(200).json(signup);
	} catch (error) {
		next(error);
	}
}
