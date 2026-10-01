# Spec 06 — Tareas: Mobile Booking Hub / Landing Comercial (v1)

**Estado:** Completada · **Versión:** 1.0 · **Relacionado:** `specs/04-requirements.md`, `specs/05-design.md`

> Supera a `specs/03-tasks.md` (tareas de la página de enlaces v1).

## Fases

| # | Fase | Entregable | Estado |
|---|------|------------|--------|
| 0 | Base técnica | `global.css` con tokens `@theme`/breakpoints/focus/reduced-motion/header-compacto; `astro.config.mjs` con `site` + `@astrojs/sitemap`; `public/robots.txt`; deps (`@fontsource/*`); SVGs recoloreados a la paleta de marca | ✅ |
| 1 | Datos | `src/data/*.json` (site.config, profile, links, nav, show, formats, events, values, gallery, testimonials, team, about, faq, video) + `public/media/placeholder.svg` | ✅ |
| 2 | Layout y componentes base | `BaseLayout` (SEO + JSON-LD Organization/MusicGroup + skip-link), `Header`, `MobileMenu`, `Footer`, `StickyBookingCTA`, `Primary/SecondaryButton`, `SocialLinks`, `Logo`, `Icon`, `src/lib/contact.ts`, stubs de rutas | ✅ |
| 3 | Home y secciones | `VideoHero`, `SectionHeading`, `EventCard`, `ValueCard`, `TestimonialCard`, `GalleryGrid`, `Lightbox`, `FormatCard`, `PageHero` + home con eventos, propuesta, galería, redes, testimonios, CTA y FAQ | ✅ |
| 4 | Rutas reales | `/show`, `/nosotros`, `/galeria`, `/eventos`, `/contacto` (formulario solo-front con precarga `?tipo=`) | ✅ |
| 5 | Home según prototipo | Header con `logo.svg`; hero a sangre (`media/hero.svg`) con titular 3 líneas, 4 categorías y 3 CTAs; secciones "¿Quiénes somos?" y "El Show"; pinceladas `media/brush.svg`; `Hero.astro` eliminado; iconos de trazo añadidos a `Icon.astro` | ✅ |
| 6 | Specs SDD | `specs/04-requirements.md`, `05-design.md`, `06-tasks.md`; `01-03` marcadas como superadas | ✅ |
| 7 | Ajuste post-decisión de usuario | Retiro de `/eventos` y `/galeria` (copias en `backup/`); eliminación de los enlaces vivos que apuntaban a ellas (`contacto.astro`, `show.astro`); WhatsApp secundario (`whatsapp.numberSecondary`) en `/contacto` y `Footer` | ✅ |

## Verificación final

```
npx astro check → 0 errors, 0 warnings (9 hints en index.astro por secciones
                  comentadas por el usuario)
npm run build   → ✓ 6 pages built (/ , /show, /nosotros, /contacto,
                  /privacidad, /terminos)
wa.me           → principal 584122601450 y secundario 584248526866 presentes
                  en todas las páginas (footer) y en /contacto
enlaces rotos   → ninguno vivo a /eventos ni /galeria
```

## Pendientes / abiertos

| ID | Tema | Siguiente paso |
|----|------|----------------|
| DEV-01 | `/eventos` y `/galeria` fuera del despliegue (en `backup/`) | Confirmar si se restauran o se retiran de `specs/specs.md` §7/§11/§13 |
| DEV-02 | Secciones del home comentadas: "¿Quiénes somos?", "El Show", "Galería", "Testimonios" | Decidir si se reactivan (dejan imports sin usar → hints) |
| DEV-03 | `site` = `https://example.com` en `astro.config.mjs` y `robots.txt` | Configurar dominio real (también en `astro.config.mjs → site`) |
| DEV-04 | Contenido `[PENDIENTE]`: email, ciudad, horario, duración, testimonios, equipo | Rellenar con datos reales de la agrupación |
| DEV-05 | Fotografía/video reales (hoy SVG placeholder en hero, galería y fotos) | Sustituir por material de la agrupación en formato WebP/AVIF + pegar la URL del video de YouTube en `src/data/video.json` (`youtube`) |
