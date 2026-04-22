import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Traefik (Coolify) strips the path prefix before forwarding to Next.js.
// So we only need assetPrefix to prepend the path on client-side asset URLs.
const nextConfig: NextConfig = {
  assetPrefix: basePath || undefined,
};

export default nextConfig;
