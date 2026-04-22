'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { asset } from '@/lib/paths';

const FONT_MONT = "'Montserrat', sans-serif";
const FONT_CAUDEX = "'Caudex', serif";
const COLOR_BEIGE = '#f1eee8';
const COLOR_GOLD = '#ae9e7d';
const COLOR_GOLD_LINE = '#ad9d7d';
const COLOR_TAUPE = '#8a7d65';

export default function LoginOverlay() {
  const login = useAuthStore((s) => s.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const ok = login(email.trim(), password);
    if (!ok) {
      setError(true);
      setPassword('');
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `rgba(241, 238, 232, 0.82)`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        fontFamily: FONT_MONT,
        padding: '24px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '56px 48px',
          background: COLOR_BEIGE,
          border: `1px solid ${COLOR_GOLD_LINE}`,
          boxShadow: '0 24px 60px rgba(0,0,0,0.12)',
          textAlign: 'center',
        }}
      >
        {/* Logo — blends seamlessly now that card = logo's beige */}
        <img
          src={asset('/images/logo_bonaparte.png')}
          alt="Bonaparte"
          style={{
            width: '200px',
            height: 'auto',
            margin: '0 auto 32px',
            display: 'block',
          }}
          draggable={false}
        />

        {/* Caudex eyebrow title */}
        <h1
          style={{
            fontFamily: FONT_CAUDEX,
            fontWeight: 400,
            fontSize: '14pt',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#000000',
            margin: 0,
            marginBottom: '8px',
          }}
        >
          Avis de Valeur
        </h1>

        {/* Gold separator line, same style as PDF title separators */}
        <div
          style={{
            width: '0.8px',
            height: '28px',
            background: COLOR_GOLD_LINE,
            margin: '16px auto 20px',
          }}
        />

        <p
          style={{
            fontFamily: FONT_MONT,
            fontSize: '9pt',
            color: COLOR_TAUPE,
            margin: 0,
            marginBottom: '36px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Accès réservé
        </p>

        {/* Email */}
        <label style={{ display: 'block', textAlign: 'left', marginBottom: '18px' }}>
          <span
            style={{
              fontFamily: FONT_MONT,
              fontSize: '8.5pt',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#000000',
              textTransform: 'uppercase',
            }}
          >
            Email
          </span>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '11px 14px',
              border: `1px solid ${COLOR_GOLD_LINE}`,
              background: '#ffffff',
              fontFamily: FONT_MONT,
              fontSize: '10pt',
              color: '#000000',
              outline: 'none',
              borderRadius: 0,
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = COLOR_GOLD)}
            onBlur={(e) => (e.currentTarget.style.borderColor = COLOR_GOLD_LINE)}
          />
        </label>

        {/* Password */}
        <label style={{ display: 'block', textAlign: 'left', marginBottom: error ? '10px' : '28px' }}>
          <span
            style={{
              fontFamily: FONT_MONT,
              fontSize: '8.5pt',
              fontWeight: 600,
              letterSpacing: '0.05em',
              color: '#000000',
              textTransform: 'uppercase',
            }}
          >
            Mot de passe
          </span>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '11px 14px',
              border: `1px solid ${error ? '#c0392b' : COLOR_GOLD_LINE}`,
              background: '#ffffff',
              fontFamily: FONT_MONT,
              fontSize: '10pt',
              color: '#000000',
              outline: 'none',
              borderRadius: 0,
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : COLOR_GOLD)}
            onBlur={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : COLOR_GOLD_LINE)}
          />
        </label>

        {error && (
          <p
            style={{
              fontFamily: FONT_MONT,
              fontSize: '8.5pt',
              color: '#c0392b',
              margin: 0,
              marginBottom: '22px',
              textAlign: 'left',
            }}
          >
            Identifiants incorrects.
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          style={{
            width: '100%',
            padding: '13px',
            background: COLOR_GOLD,
            color: '#ffffff',
            fontFamily: FONT_MONT,
            fontSize: '9pt',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            border: 'none',
            cursor: submitting ? 'not-allowed' : 'pointer',
            opacity: submitting ? 0.6 : 1,
            transition: 'background 0.2s ease',
            borderRadius: 0,
          }}
          onMouseEnter={(e) => {
            if (!submitting) e.currentTarget.style.background = COLOR_TAUPE;
          }}
          onMouseLeave={(e) => {
            if (!submitting) e.currentTarget.style.background = COLOR_GOLD;
          }}
        >
          {submitting ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}
