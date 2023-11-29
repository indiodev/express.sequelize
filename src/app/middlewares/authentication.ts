import type { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { Env } from '~/config';

import { AppError } from '../errors';

export async function authentication(
	request: Request,
	response: Response,
	next: NextFunction,
): Promise<void> {
	const { authorization } = request.headers;

	if (!authorization) throw new AppError('Token missing.', 401);

	const [, token] = authorization.split(' ');

	try {
		const { sub } = verify(token, Env.TOKEN_SECRET);

		request.user = { id: sub as string };

		next();
	} catch (error) {
		throw new AppError('Invalid token!', 401);
	}
}
