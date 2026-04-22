'use client';

import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import LoginOverlay from './LoginOverlay';
import { useAuthStore } from '@/store/useAuthStore';

export default function EditorGated() {
  const authenticated = useAuthStore((s) => s.authenticated);
  const [hydrated, setHydrated] = useState(false);

  // Use zustand/persist's hydration lifecycle so we don't flash the
  // login overlay on already-logged-in sessions. A plain useEffect races
  // with the localStorage read — onFinishHydration fires only when the
  // store has fully rehydrated.
  useEffect(() => {
    if (useAuthStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }
    const unsub = useAuthStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
    return unsub;
  }, []);

  if (!hydrated) return null;

  return (
    <>
      <div
        style={{
          filter: authenticated ? 'none' : 'blur(8px)',
          pointerEvents: authenticated ? 'auto' : 'none',
          userSelect: authenticated ? 'auto' : 'none',
          transition: 'filter 0.3s ease',
        }}
        aria-hidden={!authenticated}
      >
        <Editor />
      </div>
      {!authenticated && <LoginOverlay />}
    </>
  );
}
