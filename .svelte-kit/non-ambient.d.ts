
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/images/.DS_Store" | "/images/AustralianVolunteers.png" | "/images/BeginForGood.jpg" | "/images/BrochureCover.jpg" | "/images/Cover.jpg" | "/images/DharmaCare.jpg" | "/images/Education.svg" | "/images/Football.svg" | "/images/GirlsCoverPhoto.jpg" | "/images/Health.svg" | "/images/KUB.png" | "/images/Logo.png" | "/images/SDIA.jpg" | "/images/UNESCO.jpg" | "/images/VideoCover.png" | "/images/YUM.png" | "/images/apple-touch-icon.png" | "/images/favicon-96x96.png" | "/images/favicon.ico" | "/images/favicon.svg" | "/images/site.webmanifest" | "/images/training-centers-map.png" | "/images/web-app-manifest-192x192.png" | "/images/web-app-manifest-512x512.png" | "/pdfs/BFIBROCHUREWEB.pdf" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}