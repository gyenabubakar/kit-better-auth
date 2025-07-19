import { createAuthClient } from 'better-auth/svelte';
import { PUBLIC_BETTER_AUTH_URL } from '$env/static/public'; // make sure to import from better-auth/svelte

export const AUTH_CLIENT = createAuthClient({
	baseURL: PUBLIC_BETTER_AUTH_URL
});
