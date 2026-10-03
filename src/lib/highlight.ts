const DEFAULT_KEYWORDS = ['gaita', 'identidad', 'espectáculo', 'cultura', 'fe'];

const escapeHtml = (text: string): string =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const escapeRegExp = (text: string): string => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Envuelve palabras clave en <strong> naranja para lectura scaneable (spec UI/UX v2 §2.5). */
export function highlightHtml(text: string, words: string[] = DEFAULT_KEYWORDS): string {
  const sorted = [...words].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`\\b(${sorted.map(escapeRegExp).join('|')})\\b`, 'gi');
  return escapeHtml(text).replace(
    pattern,
    '<strong class="font-semibold text-naranja">$1</strong>'
  );
}
