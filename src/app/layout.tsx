import type { Metadata } from "next";
import "./globals.css";
import { asset } from "@/lib/paths";

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
        <link rel="stylesheet" href={asset("/fonts/fonts.css")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
