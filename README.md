# Página de enlaces de agrupación musical

Sitio estático tipo Linktree construido con **Astro + Tailwind CSS v4 + TypeScript**, desarrollado bajo la metodología **SDD** (specs en [`specs/`](specs/)).

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # desarrollo en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualizar el build
npx astro check  # verificación de tipos
```

## Personalizar el contenido

Edita solo JSON (sin tocar código):

- `src/data/profile.json` — nombre, tagline, bio, avatar, color de acento
- `src/data/links.json` — enlaces (`label`, `url`, `icon`); el orden del array es el orden visual

Iconos disponibles en `src/components/Icon.astro`: `spotify`, `applemusic`, `youtube`, `instagram`, `tiktok`, `x`, `mail`.

Antes de publicar, cambia `site` en `astro.config.mjs` por tu dominio real (afecta canónicas y Open Graph).

## Deploy en Vercel

1. Sube el proyecto a un repositorio Git (GitHub/GitLab/Bitbucket).
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repo.
3. Vercel detecta Astro automáticamente (Framework: **Astro**, Build: `npm run build`) → **Deploy**.
4. Opcional: agrega tu dominio en *Project Settings → Domains*.

## Estructura

```
specs/          # SDD: requisitos, diseño, tareas
src/data/       # contenido editable (JSON)
src/components/ # Icon.astro, LinkCard.astro
src/layouts/    # BaseLayout.astro (SEO/OG)
src/pages/      # index.astro (única ruta)
public/         # favicon.svg, avatar.svg, og.svg
```
