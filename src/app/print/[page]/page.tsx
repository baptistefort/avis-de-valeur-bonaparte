import { notFound } from 'next/navigation';
import PrintPageClient from '@/components/PrintPageClient';

const VALID_PAGES = new Set([
  'cover',
  'intro',
  'caracteristiques',
  'marche',
  'envente',
  'maison',
  'mandat',
  'diffusion',
  'contact',
]);

export default async function PrintPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  if (!VALID_PAGES.has(page)) notFound();
  return <PrintPageClient pageId={page} />;
}
