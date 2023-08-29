import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'test', 'production'])
		.default('development'),

	PREFIX: z.enum(['development', 'staging', 'v1']).default('development'),

	TOKEN_SECRET: z.string(),
	TOKEN_EXPIRE_IN: z.coerce.number().default(1),
	REFRESH_TOKEN_SECRET: z.string(),
	REFRESH_TOKEN_EXPIRE_IN: z.coerce.number().default(7),

	PORT: z.coerce.number().default(3333),

	PG_HOST: z.string().default('localhost'),
	PG_SCHEMA: z.string().default('public'),
	PG_USERNAME: z.string(),
	PG_PASSWORD: z.string(),
	PG_DATABASE: z.string(),
	PG_PORT: z.coerce.number().default(5432),

	DATABASE_URL: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error('❌️ Invalid environment variables', _env.error.format());

	throw new Error('Invalid environment variables.');
}

export const Env = _env.data;
