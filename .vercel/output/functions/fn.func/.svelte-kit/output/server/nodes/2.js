

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.cf351d15.js","_app/immutable/chunks/scheduler.df919faf.js","_app/immutable/chunks/index.fb517cce.js"];
export const stylesheets = ["_app/immutable/assets/2.c4ee6757.css"];
export const fonts = [];
