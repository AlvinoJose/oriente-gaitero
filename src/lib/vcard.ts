import site from '../data/site.config.json';
import { isPlaceholder } from './contact';

const escapeValue = (value: string): string => value.replace(/([\\,;])/g, '\\$1');

/** vCard 3.0 con los datos de contacto de la agrupación (fuente única: site.config.json). */
export function buildVCard(siteUrl: string): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeValue(site.brand)}`,
    `N:;${escapeValue(site.brand)};;;`,
    `ORG:${escapeValue(site.brand)}`,
    'TITLE:Agrupación de gaita zuliana para eventos',
    `TEL;TYPE=CELL,VOICE:+${site.whatsapp.number}`,
  ];

  if (site.whatsapp.numberSecondary) {
    lines.push(`TEL;TYPE=CELL:+${site.whatsapp.numberSecondary}`);
  }

  if (!isPlaceholder(site.email)) {
    lines.push(`EMAIL;TYPE=INTERNET:${site.email}`);
  }

  if (!isPlaceholder(site.city)) {
    lines.push(`ADR;TYPE=WORK:;;${escapeValue(site.city)};;;;`);
  }

  if (siteUrl && !siteUrl.includes('example.com')) {
    lines.push(`URL:${siteUrl}`);
  }
  lines.push('END:VCARD');

  return `${lines.join('\r\n')}\r\n`;
}

/**
 * URL `intent://` de Android que abre la app de Contactos con los datos precargados.
 * Si ninguna app maneja el intent, Chrome navega al fallback (el .vcf).
 */
export function contactIntentUrl(siteUrl: string): string {
  const extras = [
    `S.name=${encodeURIComponent(site.brand)}`,
    `S.phone=${encodeURIComponent(`+${site.whatsapp.number}`)}`,
    `S.company=${encodeURIComponent(site.brand)}`,
  ];

  if (!isPlaceholder(site.email)) {
    extras.push(`S.email=${encodeURIComponent(site.email)}`);
  }

  const fallback = (() => {
    try {
      return `S.browser_fallback_url=${encodeURIComponent(new URL('contacto.vcf', siteUrl).href)};`;
    } catch {
      return '';
    }
  })();

  return (
    'intent:#Intent;action=android.intent.action.INSERT;' +
    'type=vnd.android.cursor.dir/contact;' +
    `${extras.join(';')};` +
    fallback +
    'end'
  );
}
