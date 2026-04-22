// Base path for subpath deployments (e.g. mybonaparte.fr/avisdevaleur).
// Empty in dev, set via NEXT_PUBLIC_BASE_PATH env var in prod.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Prefix a public asset path. Leaves data URLs and absolute http(s) URLs alone.
export function asset(path: string): string {
  if (!path) return path;
  if (path.startsWith('data:')) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('/')) return `${BASE_PATH}${path}`;
  return path;
}
