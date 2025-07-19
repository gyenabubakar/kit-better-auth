import { auth } from '$lib/server/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const initBetterAuth: Handle = ({ event, resolve }) => {
	if (!event.url.href.endsWith('devtools.json')) {
		console.log();
		console.log();
		console.log('>>>', event.url.href);
		console.log();
		console.log();
	}
	return svelteKitHandler({ event, resolve, auth, building });
};

const setSession: Handle = ({ event, resolve }) => {
	return resolve(event);
};

export const handle = sequence(initBetterAuth, setSession);
