import { z } from 'zod';

export const Signup = z.object({
	email: z.string().email(),
	name: z.string(),
	password: z.string().min(4),
});
