# Spec 05 — Diseño: Mobile Booking Hub / Landing Comercial (v1)

**Estado:** Aprobada · **Versión:** 1.0 · **Relacionado:** `specs/04-requirements.md`, `specs/06-tasks.md`

> Supera a `specs/02-design.md` (columna centrada `max-w-md`, paleta violeta).

## Arquitectura

```
src/
├── data/                  # contenido editable (fuente única)
│   ├── site.config.json   # whatsapp.number, numberSecondary, listen, email, ciudad, horario
│   ├── profile.json · links.json · nav.json
│   ├── show.json · formats.json · events.json · values.json
│   ├── gallery.json · testimonials.json · team.json · about.json
│   ├── faq.json · video.json
├── lib/contact.ts         # whatsappUrl/whatsappSecondaryUrl/emailUrl/bookingUrl/socialLinks
├── components/            # 19 componentes (ver §Componentes)
├── layouts/BaseLayout.astro · PageStub.astro
├── pages/                 # / · /show · /nosotros · /contacto · /privacidad · /terminos
└── styles/global.css      # @theme de Tailwind v4 (tokens)
public/
├── logo.svg · favicon.svg · avatar.svg · og.svg · robots.txt
└── media/ hero.svg · brush.svg · photo.svg · placeholder.svg
```

- **Rendering:** 100% estático (`output: 'static'` + `@astrojs/sitemap`).
- **JS en cliente:** menú (`<dialog>`), header compacto, lightbox, formulario → WhatsApp.
- **Tipos:** TypeScript strict + `npx astro check`.

## Tokens (`src/styles/global.css` → `@theme`)

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-carbon` | `#111111` | fondos, navegación |
| `--color-carbon-soft` | `#1a1a1a` | secciones alternas |
| `--color-naranja` | `#f47b16` | CTA, energía, detalles |
| `--color-naranja-soft` | `#ffa14d` | hover |
| `--color-turquesa` | `#08a9cc` | acentos, eyebrows |
| `--color-turquesa-soft` | `#4ec9e3` | hover/contraste |
| `--color-marron` / `-soft` | `#4a2113` / `#6b3520` | identidad, tradición |
| `--font-display` | Archivo Black | titulares |
| `--font-sans` | Inter Variable | cuerpo |
| breakpoints | `xs 360 · sm 390 · md 430 · lg 768 · xl 1024 · 2xl 1280` | mobile-first |

Además: `:focus-visible` con outline turquesa, `prefers-reduced-motion`, `.header-compact`.

## Rutas públicas (desplegadas)

```
/            home comercial (hero + video + eventos + propuesta + redes + CTA + FAQ)
/show        video, formatos, repertorio, duración, requerimientos, fotos
/nosotros    historia, propósito, visión, integrantes
/contacto    formulario → WhatsApp (+ WhatsApp secundario, email, redes)
/privacidad  stub legal
/terminos    stub legal
```

> `/eventos` y `/galeria` existen como copias en `backup/` y no están desplegadas (DEV-01).

## Modelo de datos clave

```jsonc
// site.config.json (§14 de specs.md — sin duplicar números)
{ "whatsapp": { "number": "58412...", "numberSecondary": "58424...",
                "numberPending": false, "message": "..." } }

// events.json   [{ id, label, description, image }]   → /contacto?tipo=<id>
// team.json     [{ name, role, authorized }]          → solo authorized se publican
// testimonials.json { items: [{ quote, author, role }] }
```

Los textos por confirmar se dejan con `[PENDIENTE]` y `isPlaceholder()` los detecta.

## Componentes

```
Logo · Header · MobileMenu · StickyBookingCTA · SectionHeading · PageHero
PrimaryButton · SecondaryButton        (size: sm | md)
EventCard · FormatCard · ValueCard · TestimonialCard
GalleryGrid (filterable) · Lightbox · SocialLinks
VideoHero · Footer · Icon (SVG de trazo) · LinkCard (legado v1)
```

## Decisiones técnicas

| Decisión | Motivo |
|----------|--------|
| WhatsApp como canal principal vía `wa.me` | Sin backend; conversión inmediata en móvil |
| Números solo en `site.config.json` + `lib/contact.ts` | Evita duplicación (§14) |
| Formulario solo-front (arma texto → `wa.me`) | Fuera de alcance el envío propio en v1 |
| Tailwind v4 `@theme` | Tokens de marca centralizados |
| Fuentes self-hosted (`@fontsource`) | LCP y privacidad |
| Contenido en JSON | RF-11; editar sin tocar componentes |

## Accesibilidad y performance

- Skip-link, landmarks, `aria-current` en nav, `<dialog>` nativo para menú.
- `fetchpriority="high"` en el hero; `loading="lazy"` en galería y fotos.
- Targets táctiles `min-h-12`; contraste AA sobre fondo carbón.
