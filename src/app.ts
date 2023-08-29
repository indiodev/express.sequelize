/* eslint-disable no-unused-vars */
import cors from 'cors';
import type { Application, NextFunction, Request, Response } from 'express';
import express from 'express';

import { auth_route } from './app/controllers/http/auth/routes';
import { AppError } from './app/errors/app';
import { Env } from './config/env';

const app: Application = express();

app.use(
	cors({
		origin: '*',
	}),
);

app.use(
	express.urlencoded({
		extended: true,
	}),
);

app.use(express.json());

app.use(`/${Env.PREFIX}/auth`, auth_route);

app.get('/', async (request: Request, response: Response) => {
	return response.status(200).redirect(`/${Env.PREFIX}`);
});

app.get(
	`/${Env.PREFIX}`,
	async (request: Request, response: Response): Promise<Response> => {
		return response.status(200).json({
			message: 'Welcome to Express Sequelize API.',
			version: '1.0.0',
		});
	},
);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				message: err.message,
			});
		}
		return response.status(500).json({
			status: 'error',
			message: `Internal server error - ${err.message}`,
		});
	},
);

export { app };
