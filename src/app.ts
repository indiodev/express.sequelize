import cors from 'cors';
import type { Application, Request, Response } from 'express';
import express from 'express';

import { user_route } from './controllers/user/routes';
import { Env } from './env';

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

app.use(`/${Env.PREFIX}/users`, user_route);

app.get('/', async (request: Request, response: Response) => {
	return response.status(200).redirect('/v1');
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

export { app };
