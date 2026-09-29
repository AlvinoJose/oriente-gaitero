# Spec 04 — Requisitos: Mobile Booking Hub / Landing Comercial (v1)

**Metodología:** SDD (Spec-Driven Development) · **Estado:** Aprobada · **Versión:** 1.0 · **Fuente:** `specs/specs.md` · **Relacionado:** `specs/05-design.md`, `specs/06-tasks.md`

> Supera a `specs/01-requirements.md` (página de enlaces v1).

## Historia de usuario

> Como visitante móvil, quiero descubrir a Oriente Gaitero, ver cómo suena y
> ver cómo se ven, confiar en ellos y escribirles por WhatsApp, para contratarlos
> para mi evento sin fricción.

Flujo principal: **Descubrir → Conocer → Ver/Escuchar → Confiar → Contratar.**

## Requisitos funcionales

| ID | Requisito | Criterio de aceptación |
|----|-----------|------------------------|
| RF-01 | Home mobile-first con hero, video, tipos de evento, propuesta de valor, redes, CTA y FAQ | Secciones en `src/pages/index.astro`; primera pantalla responde quiénes son, cómo suenan y cómo contratar |
| RF-02 | Header con logo, menú hamburguesa, CTA Contratar y modo compacto al scroll | `Header.astro` + `MobileMenu.astro` (`<dialog>`), clase `header-compact` al hacer scroll |
| RF-03 | Página `/show` con video, fotos, formatos, repertorio, duración y requerimientos técnicos | `src/pages/show.astro` + `FormatCard.astro` |
| RF-04 | Página `/nosotros` con historia, propósito, visión e integrantes | `src/pages/nosotros.astro`; solo integrantes con `authorized: true` en `team.json` |
| RF-05 | Página `/contacto` con formulario que arma el mensaje y abre WhatsApp | Sin backend; `wa.me` con texto precargado; precarga `?tipo=` |
| RF-06 | CTAs de WhatsApp desde configuración única | `site.config.json → whatsapp.number` (y `numberSecondary`); helper `src/lib/contact.ts` |
| RF-07 | CTA de WhatsApp fijo en mobile | `StickyBookingCTA.astro` |
| RF-08 | Galería con grid, lazy loading, lightbox y filtros opcionales | `GalleryGrid.astro` + `Lightbox.astro`; datos en `gallery.json` |
| RF-09 | Testimonios reales y autorizados | `testimonials.json`; placeholders `[PENDIENTE]` marcados |
| RF-10 | Navegación por JSON | `nav.json` en header, menú móvil y footer |
| RF-11 | Contenido editable sin tocar componentes | Todos los datos en `src/data/*.json` |
| RF-12 | Enlaces legales | `/privacidad` y `/terminos` (`PageStub.astro`) |

## Requisitos no funcionales

| ID | Requisito | Criterio |
|----|-----------|----------|
| RNF-01 | Mobile-first | Diseñar primero 360–430 px; breakpoints `xs 360 / sm 390 / md 430 / lg 768 / xl 1024 / 2xl 1280` |
| RNF-02 | Rendimiento | Página estática, JS mínimo (solo menú, lightbox y formulario), imágenes con `loading="lazy"`, fuentes self-hosted |
| RNF-03 | Accesibilidad | WCAG 2.2 AA razonable: contraste, focus visible, labels, alt, targets táctiles, `prefers-reduced-motion`, skip-link |
| RNF-04 | SEO | Title/description/canonical/OG/Twitter + sitemap + robots + JSON-LD `Organization`/`MusicGroup` |
| RNF-05 | Idioma | Interfaz en español (`lang="es"`) |
| RNF-06 | Sin datos inventados | No inventar ubicaciones, eventos, premios ni clientes; placeholders visibles como `[PENDIENTE]` |
| RNF-07 | Verificación de tipos | `npx astro check` → 0 errores, 0 warnings |

## Fuera de alcance (v1)

- Backend / CRM / gestión de leads.
- CMS, tienda, blog, multilenguaje.
- Agenda de fechas con eventos públicos (`schema.org Event`).
- Formulario con envío propio (email servidor) — se resuelve vía WhatsApp/mailto.

## Devoluciones conocidas (abiertas)

| ID | Tema | Estado |
|----|------|--------|
| DEV-01 | Rutas `/eventos` y `/galeria` retiradas (copias en `backup/`); los enlaces vivos que apuntaban a ellas fueron eliminados | Decisión del usuario, 29/09/2026 |
| DEV-02 | Secciones del home comentadas por el usuario: "¿Quiénes somos?", "El Show", "Galería", "Testimonios" | Pendiente de confirmación |
| DEV-03 | `site` en `astro.config.mjs` y `robots.txt` sigue con placeholder `https://example.com` | Pendiente de dominio real |
| DEV-04 | Spec de rutas de `specs/specs.md` §7 incluye `/eventos` y `/galeria`, hoy no desplegadas | Sincronizar cuando se decida DEV-01 |
