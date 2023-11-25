export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.faa1c400.js","app":"_app/immutable/entry/app.e43cb8ba.js","imports":["_app/immutable/entry/start.faa1c400.js","_app/immutable/chunks/scheduler.df919faf.js","_app/immutable/chunks/singletons.3f4a8c3b.js","_app/immutable/entry/app.e43cb8ba.js","_app/immutable/chunks/scheduler.df919faf.js","_app/immutable/chunks/index.fb517cce.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
