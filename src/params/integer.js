// https://kit.svelte.dev/docs/advanced-routing
// Match route params and check if passing integer
export function match(param) {
  return /^\d+$/.test(param);
}
