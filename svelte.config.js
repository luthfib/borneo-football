import adapter from '@sveltejs/adapter-vercel';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$assets: 'src/lib/assets'
		}
	}
};

export default config;
