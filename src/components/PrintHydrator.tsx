'use client';

import { useLayoutEffect, useState } from 'react';
import { useDocumentStore } from '@/store/useDocumentStore';
import type { PrintableState } from '@/lib/print-state';

interface Props {
  state: PrintableState;
  children: React.ReactNode;
}

// Hydrates Zustand with the server-provided state before children render.
// useLayoutEffect runs synchronously before paint, so the first frame already
// shows the hydrated values — no flash of default content that Puppeteer
// could capture.
export default function PrintHydrator({ state, children }: Props) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    useDocumentStore.setState(state);
    setReady(true);
  }, [state]);

  if (!ready) return null;
  return <>{children}</>;
}
