'use client';

import React, { useEffect, useState } from 'react';
import Editor from './Editor';
import LoginOverlay from './LoginOverlay';
import { useAuthStore } from '@/store/useAuthStore';

export default function EditorGated() {
  const authenticated = useAuthStore((s) => s.authenticated);
  const [hydrated, setHydrated] = useState(false);

  // Wait for zustand/persist to rehydrate from localStorage before rendering,
  // so we don't flash the login overlay on already-logged-in sessions.
  useEffect(() => {
    setHydrated(true);
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
