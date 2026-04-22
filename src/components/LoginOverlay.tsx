'use client';

import React, { useState } from 'react';
import { useAuthStore } from '@/store/useAuthStore';
import { asset } from '@/lib/paths';

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
    // On success, the overlay unmounts automatically.
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
        background: 'rgba(241, 238, 232, 0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '48px 40px',
          background: '#ffffff',
          border: '1px solid #ad9d7d',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          textAlign: 'center',
        }}
      >
        <img
          src={asset('/images/logo_bonaparte.png')}
          alt="Bonaparte"
          style={{ width: '180px', height: 'auto', margin: '0 auto 24px', display: 'block' }}
          draggable={false}
        />

        <h1
          style={{
            fontFamily: "'Caudex', serif",
            fontWeight: 700,
            fontSize: '14pt',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#000000',
            margin: 0,
            marginBottom: '6px',
          }}
        >
          Avis de Valeur
        </h1>
        <p
          style={{
            fontSize: '10pt',
            color: '#8a7d65',
            margin: 0,
            marginBottom: '32px',
            letterSpacing: '0.02em',
          }}
        >
          Accès réservé
        </p>

        <label
          style={{
            display: 'block',
            textAlign: 'left',
            marginBottom: '14px',
          }}
        >
          <span style={{ fontSize: '9pt', color: '#000000', fontWeight: 600, letterSpacing: '0.04em' }}>
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
              marginTop: '6px',
              padding: '10px 12px',
              border: '1px solid #d6cdb8',
              background: '#ffffff',
              fontSize: '10pt',
              fontFamily: "'Montserrat', sans-serif",
              color: '#000000',
              outline: 'none',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#ad9d7d')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#d6cdb8')}
          />
        </label>

        <label
          style={{
            display: 'block',
            textAlign: 'left',
            marginBottom: error ? '10px' : '24px',
          }}
        >
          <span style={{ fontSize: '9pt', color: '#000000', fontWeight: 600, letterSpacing: '0.04em' }}>
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
              marginTop: '6px',
              padding: '10px 12px',
              border: `1px solid ${error ? '#c0392b' : '#d6cdb8'}`,
              background: '#ffffff',
              fontSize: '10pt',
              fontFamily: "'Montserrat', sans-serif",
              color: '#000000',
              outline: 'none',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : '#ad9d7d')}
            onBlur={(e) => (e.currentTarget.style.borderColor = error ? '#c0392b' : '#d6cdb8')}
          />
        </label>

        {error && (
          <p
            style={{
              fontSize: '9pt',
              color: '#c0392b',
              margin: 0,
              marginBottom: '18px',
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
            padding: '12px',
            background: '#ae9e7d',
            color: '#ffffff',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '10pt',
            fontWeight: 500,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            border: 'none',
            cursor: submitting ? 'not-allowed' : 'pointer',
            opacity: submitting ? 0.6 : 1,
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!submitting) e.currentTarget.style.background = '#8a7d65';
          }}
          onMouseLeave={(e) => {
            if (!submitting) e.currentTarget.style.background = '#ae9e7d';
          }}
        >
          {submitting ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </div>
  );
}
