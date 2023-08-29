import { z } from 'zod';

export const Signin = z.object({
	email: z.string().email(),
	password: z.string().min(4),
});
