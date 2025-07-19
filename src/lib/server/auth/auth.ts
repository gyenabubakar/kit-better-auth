import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '$lib/server/db';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { PUBLIC_GITHUB_CALLBACK_URL } from '$env/static/public';
import { env } from '$env/dynamic/private'; // your drizzle instance
import * as schema from '$lib/server/db';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		schema,
		usePlural: true,
		provider: 'pg'
	}),
	socialProviders: {
		github: {
			clientId: env.PRIVATE_GITHUB_CLIENT_ID,
			clientSecret: env.PRIVATE_GITHUB_CLIENT_SECRET,
			callbackUrl: PUBLIC_GITHUB_CALLBACK_URL
		}
	},
	plugins: [sveltekitCookies(async () => getRequestEvent())]
});

export type Auth = typeof auth;
export type User = typeof auth.$Infer.Session.user;
export type Session = typeof auth.$Infer.Session.session;
