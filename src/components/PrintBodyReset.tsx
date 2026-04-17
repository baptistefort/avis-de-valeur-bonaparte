'use client';

import { useLayoutEffect } from 'react';

// The root layout sets body to the beige editor background. For print routes
// we want a white body (zero margin/padding) so Puppeteer captures the page
// element flush against its own borders. Runs sync before paint.
export default function PrintBodyReset() {
  useLayoutEffect(() => {
    const { body, documentElement: html } = document;
    const prev = {
      bodyBg: body.style.background,
      bodyMargin: body.style.margin,
      bodyPadding: body.style.padding,
      htmlBg: html.style.background,
    };
    body.style.background = '#ffffff';
    body.style.margin = '0';
    body.style.padding = '0';
    html.style.background = '#ffffff';
    return () => {
      body.style.background = prev.bodyBg;
      body.style.margin = prev.bodyMargin;
      body.style.padding = prev.bodyPadding;
      html.style.background = prev.htmlBg;
    };
  }, []);
  return null;
}
