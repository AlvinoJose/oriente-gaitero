# Spec 01 — Requisitos: Página de enlaces de agrupación musical (v1)

**Metodología:** SDD (Spec-Driven Development) · **Estado:** Superada por `specs/04-requirements.md` · **Versión:** 1.0

## Historia de usuario

> Como visitante, quiero ver todos los enlaces oficiales de la agrupación en una sola página
> para seguirlos en mi plataforma favorita.

## Requisitos funcionales

| ID | Requisito | Criterio de aceptación |
|----|-----------|------------------------|
| RF-01 | Mostrar perfil (logo, nombre, tagline, bio) | Datos provenientes de `src/data/profile.json` |
| RF-02 | Lista de enlaces (Spotify, Apple Music, YouTube, Instagram, TikTok, X, email) | Datos en `src/data/links.json`; cada enlace abre en pestaña nueva con `rel="noopener noreferrer"` |
| RF-03 | Icono por enlace | SVG inline, sin librerías externas |
| RF-04 | Contacto vía email | Enlace `mailto:` incluido en la lista |
| RF-05 | Personalización sin tocar código | Cambiar label/url/orden solo editando JSON |

## Requisitos no funcionales

| ID | Requisito | Criterio |
|----|-----------|----------|
| RNF-01 | Rendimiento | Página estática, sin JS de cliente; Lighthouse ≥ 95 |
| RNF-02 | Responsive | Mobile-first, columna máx. `max-w-md` |
| RNF-03 | Accesibilidad | Contraste AA, `lang="es"`, landmarks (`main`/`nav`/`footer`), foco visible |
| RNF-04 | SEO | Title + description + canonical + Open Graph + Twitter Card |
| RNF-05 | Idioma | Interfaz en español |

## Fuera de alcance (v1)

- Agenda de fechas / agenda de conciertos
- Formulario de cotización (booking) — *punto de extensión futuro*
- CMS, tienda, multimedia embebida

## Stack (decidido)

Astro 5 (estático) + Tailwind CSS v4 + TypeScript strict · Deploy: Vercel · Contenido: JSON en repo.
