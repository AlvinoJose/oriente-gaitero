# Spec 02 — Diseño: Página de enlaces de agrupación musical (v1)

**Estado:** Superada por `specs/05-design.md` · **Versión:** 1.0 · **Relacionado:** `specs/01-requirements.md`

## Arquitectura

```
src/
├── data/
│   ├── profile.json        # nombre, tagline, bio, avatar, accentColor
│   └── links.json          # [{ label, url, icon }]  (orden = orden visual)
├── components/
│   ├── Icon.astro          # mapa de SVGs inline (spotify, youtube, ...)
│   └── LinkCard.astro      # botón de enlace
├── layouts/
│   └── BaseLayout.astro    # <head> SEO/OG + body base
├── pages/
│   └── index.astro         # única ruta: /
└── styles/
    └── global.css          # @import 'tailwindcss'
public/
├── favicon.svg · avatar.svg · og.svg
```

- **Rendering:** 100% estático (output `static`), cero JS en cliente.
- **Estilos:** Tailwind v4 vía plugin `@tailwindcss/vite`.
- **Tipos:** TypeScript strict + `astro check` en CI/verificación.

## Modelo de datos

```jsonc
// profile.json
{ "name": "str", "tagline": "str", "bio": "str", "avatar": "/avatar.svg", "accentColor": "#hex" }

// links.json
[{ "label": "Spotify", "url": "https://...", "icon": "spotify" }]
```

`icon` debe coincidir con una clave de `Icon.astro` (fallback: `mail`).

## Wireframe (columna centrada)

```
┌─────────────────────────┐
│        [ avatar ]       │  112px, borde + sombra violeta
│     Nombre artístico    │  text-2xl bold
│        tagline          │  violeta-300
│     bio (2-3 líneas)    │  white/60
│                         │
│  ── enlace (LinkCard) ──│  rounded-2xl, icono circular, flecha
│  ── enlace ─────────────│  hover: resalta, flecha se desplaza
│  ...                    │
│                         │
│   © 2026 Nombre         │  footer
└─────────────────────────┘
```

## Decisiones técnicas

| Decisión | Motivo |
|----------|--------|
| Astro static (no Next.js) | Página de enlaces no necesita servidor ni cliente JS |
| Tailwind v4 via Vite plugin | Integración nativa, sin config extra |
| SVG inline en `Icon.astro` | Cero dependencias externas, caché perfecta |
| Contenido en JSON | RF-05; editable sin tocar componentes |
| Paleta oscura `#0c0a1a` + violeta | Estética musical; `color-scheme: dark` |
| `site` en `astro.config.mjs` | URLs canónicas y OG absolutas |

## Extensibilidad futura (no en v1)

- **Formulario de cotización (booking):** isla React/Vue en `index.astro` + endpoint serverless
  (`/api/cotizacion`) en Vercel o servicio externo (Formspree/Resend); validar con Zod.
- **Agenda de fechas:** nuevo `src/data/shows.json` + componente `ShowList.astro`.
