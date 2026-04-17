// The /print routes reuse the root layout (src/app/layout.tsx) which sets
// html + body + font stylesheets. This wrapper just hands children through
// without any styling so the page component can fully control its own
// dimensions and background — Puppeteer captures the page element itself.
export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
