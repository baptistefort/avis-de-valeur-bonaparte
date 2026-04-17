import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avis de Valeur - Bonaparte Art de Vivre",
  description: "Outil de creation d'avis de valeur immobilier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Local self-hosted fonts (so html2canvas can read @font-face cssRules
            without CORS issues from Google Fonts) */}
        <link rel="stylesheet" href="/fonts/fonts.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
