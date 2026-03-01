/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const response = await resolve(event);

	// Ensure search engines can index the production site
	response.headers.set('X-Robots-Tag', 'index, follow');

	return response;
}
