<script lang="ts">
	import { AUTH_CLIENT } from '$lib/auth.client';
	import { fromStore } from 'svelte/store';
	import { PUBLIC_GITHUB_CALLBACK_URL } from '$env/static/public';

	const __session = fromStore(AUTH_CLIENT.useSession());
	const session = $derived(__session.current);

	async function signIn() {
		console.log('PUBLIC_GITHUB_CALLBACK_URL:', PUBLIC_GITHUB_CALLBACK_URL);
		try {
			await AUTH_CLIENT.signIn.social({
				provider: 'github',
				callbackURL: PUBLIC_GITHUB_CALLBACK_URL
			});
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div>
	{#if session.data}
		<div>
			<p>
				{session?.data?.user.name}
			</p>
			<button onclick={() => AUTH_CLIENT.signOut()}> Sign Out </button>
		</div>
	{:else}
		<button type="button" onclick={signIn}> Continue with GitHub </button>
	{/if}
</div>
