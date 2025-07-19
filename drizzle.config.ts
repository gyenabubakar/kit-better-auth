import { defineConfig } from 'drizzle-kit';
import { EnvSchema } from './env.schema';

const env = EnvSchema.parse(process.env);

export default defineConfig({
	schema: './src/lib/server/db/schema/index.ts',
	out: './drizzle',
	dialect: 'postgresql',
	dbCredentials: {
		url: env.PRIVATE_DATABASE_URL
	},
	verbose: true,
	strict: true
});
