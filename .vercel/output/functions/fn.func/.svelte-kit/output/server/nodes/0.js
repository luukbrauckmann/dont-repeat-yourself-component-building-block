

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.50fb4686.js","_app/immutable/chunks/scheduler.df919faf.js","_app/immutable/chunks/index.fb517cce.js"];
export const stylesheets = [];
export const fonts = [];
