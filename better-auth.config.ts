// noinspection JSUnusedGlobalSymbols

import { createClient } from '@libsql/client';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { EnvSchema } from './env.schema';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './src/lib/server/db/schema';

const env = EnvSchema.parse(process.env);

const pool = new Pool({
	connectionString: env.PRIVATE_DATABASE_URL
});

export const db = drizzle({ client: pool, schema });

export const auth = betterAuth({
	database: drizzleAdapter(db, { provider: 'pg', usePlural: true }),
	baseURL: env.PUBLIC_BETTER_AUTH_URL,
	secret: env.PRIVATE_BETTER_AUTH_SECRET,
	socialProviders: {
		github: {
			clientId: env.PRIVATE_GITHUB_CLIENT_ID,
			clientSecret: env.PRIVATE_GITHUB_CLIENT_SECRET
		}
	}
});
