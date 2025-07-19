import { z } from 'zod';

export const EnvSchema = z.object({
	PRIVATE_DATABASE_URL: z.string().trim().min(1),

	PUBLIC_BETTER_AUTH_URL: z.url(),
	PRIVATE_BETTER_AUTH_SECRET: z.string().trim().min(1),

	PUBLIC_GITHUB_CALLBACK_URL: z.url(),
	PRIVATE_GITHUB_CLIENT_ID: z.string().trim().min(1),
	PRIVATE_GITHUB_CLIENT_SECRET: z.string().trim().min(1),
	PRIVATE_GITHUB_WEBHOOK_SECRET: z.string().trim().min(1)
});

export type Env = z.infer<typeof EnvSchema>;
