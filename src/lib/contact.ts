import site from '../data/site.config.json';
import links from '../data/links.json';

export const isPlaceholder = (value: string): boolean => value.includes('[PENDIENTE]');

export function whatsappUrl(message?: string, number: string = site.whatsapp.number): string {
  const text = message ?? site.whatsapp.message;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function whatsappSecondaryUrl(message?: string): string | null {
  const number = site.whatsapp.numberSecondary;
  return number ? whatsappUrl(message, number) : null;
}

export function emailUrl(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ''}`;
}

export function bookingUrl(eventType?: string): string {
  const message = eventType
    ? `${site.whatsapp.message} Tipo de evento: ${eventType}.`
    : undefined;
  return whatsappUrl(message);
}

export type SocialLink = {
  label: string;
  url: string;
  icon: string;
  pending?: boolean;
};

export function socialLinks(): SocialLink[] {
  return links.items.map((item) =>
    item.icon === 'whatsapp'
      ? { label: item.label, icon: item.icon, url: whatsappUrl(), pending: false }
      : { label: item.label, icon: item.icon, url: item.url, pending: item.pending ?? false },
  );
}

export function canonicalSocialLinks(): string[] {
  return socialLinks()
    .filter((link) => link.url.startsWith('https://') && !link.pending)
    .map((link) => link.url);
}
