export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","fonts/Roboto.css","images/.DS_Store","images/AnnualReport.jpg","images/AustralianVolunteers.png","images/BeginForGood.jpg","images/BrochureCover.jpg","images/Contact.png","images/Cover.jpg","images/Covid19.jpg","images/DharmaCare.jpg","images/Donate.png","images/DonateBlue.png","images/Download.png","images/Education.png","images/Football.png","images/GirlsCoverPhoto.jpg","images/Health.png","images/KUB.png","images/LightPlayButton.png","images/Logo.png","images/Otsana.png","images/SDIA.jpg","images/UNESCO.jpg","images/VideoCover.png","images/YUM.png","images/apple-touch-icon.png","images/favicon-96x96.png","images/favicon.ico","images/favicon.svg","images/site.webmanifest","images/training-centers-map.png","images/web-app-manifest-192x192.png","images/web-app-manifest-512x512.png","pdfs/BFIBROCHUREWEB.pdf"]),
	mimeTypes: {".css":"text/css",".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.D8phYPur.js",app:"_app/immutable/entry/app.B_1O4SfY.js",imports:["_app/immutable/entry/start.D8phYPur.js","_app/immutable/chunks/C-Du2FMB.js","_app/immutable/chunks/BlcpqopO.js","_app/immutable/chunks/DWtBp7KK.js","_app/immutable/entry/app.B_1O4SfY.js","_app/immutable/chunks/BlcpqopO.js","_app/immutable/chunks/BCwW508z.js","_app/immutable/chunks/rbg9oZQN.js","_app/immutable/chunks/DWtBp7KK.js","_app/immutable/chunks/B4JN2JLI.js","_app/immutable/chunks/CZzGttk7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
