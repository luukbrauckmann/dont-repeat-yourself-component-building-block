

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2c31a8e5.js","_app/immutable/chunks/scheduler.df919faf.js","_app/immutable/chunks/index.fb517cce.js","_app/immutable/chunks/singletons.3f4a8c3b.js"];
export const stylesheets = [];
export const fonts = [];
