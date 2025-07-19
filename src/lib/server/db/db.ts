import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
	connectionString: env.PRIVATE_DATABASE_URL
});

export const db = drizzle({ client: pool, schema });
