import type { APIRoute } from 'astro';
import { buildVCard } from '../lib/vcard';

export const GET: APIRoute = ({ site }) =>
  new Response(buildVCard(site?.href ?? ''), {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
