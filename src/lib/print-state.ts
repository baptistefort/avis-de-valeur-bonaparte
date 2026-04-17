import type { DocumentState } from '@/store/useDocumentStore';

// Serializable subset of the Zustand store — no action functions.
export type PrintableState = Omit<
  DocumentState,
  | 'updateCover'
  | 'updateIntro'
  | 'updateDescription'
  | 'updateCaracteristiques'
  | 'updateValorisation'
  | 'updateMarche'
  | 'updateVendusProches'
  | 'updateEnVenteProches'
  | 'updatePrix'
  | 'updateContact'
  | 'updateMaisonBonaparte'
  | 'updateMandat'
  | 'updateDiffusion'
>;

// In-memory store shared between the /api/export-pdf route and the
// /print/[page] route via the Node.js module cache. Each export creates one
// token, Puppeteer visits the 9 print pages with that token, then the entry
// is deleted. Works across requests because Next.js runs a single Node
// process in dev and per-instance in production.
const store = new Map<string, { state: PrintableState; createdAt: number }>();

// Drop entries older than 5 minutes in case an export aborts mid-flight.
const TTL_MS = 5 * 60 * 1000;

function purge() {
  const now = Date.now();
  for (const [token, entry] of store) {
    if (now - entry.createdAt > TTL_MS) store.delete(token);
  }
}

export function saveState(state: PrintableState): string {
  purge();
  const token = crypto.randomUUID();
  store.set(token, { state, createdAt: Date.now() });
  return token;
}

export function readState(token: string): PrintableState | null {
  purge();
  return store.get(token)?.state ?? null;
}

export function deleteState(token: string): void {
  store.delete(token);
}
