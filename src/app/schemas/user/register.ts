import z from 'zod';

export const RegisterSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	password: z.string().min(6),
});

export type RegisterType = z.infer<typeof RegisterSchema>;

export type RegisterUserToken = {
	user: Pick<RegisterType & { id: string }, 'id' | 'email' | 'name'>;
} & {
	token: string;
	refresh_token: string;
};
