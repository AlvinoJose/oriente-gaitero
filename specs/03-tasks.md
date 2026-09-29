# Spec 03 — Tareas: Página de enlaces de agrupación musical (v1)

**Estado:** Superada por `specs/06-tasks.md` · **Versión:** 1.0 · **Relacionado:** `specs/01-requirements.md`, `specs/02-design.md`

| # | Tarea | Criterio de verificación | Estado |
|---|-------|--------------------------|--------|
| T1 | Scaffold Astro + Tailwind v4 + TS strict | `package.json`, `astro.config.mjs`, `tsconfig.json` presentes | ✅ |
| T2 | Datos de ejemplo (`profile.json`, `links.json`) | 7 enlaces de ejemplo; RF-05 | ✅ |
| T3 | Componente `Icon.astro` + `LinkCard.astro` + `index.astro` | Renderiza lista completa; RF-01/02/03 | ✅ |
| T4 | `BaseLayout.astro` con SEO/OG + favicon/avatar/og SVG | title, description, canonical, OG, Twitter Card | ✅ |
| T5 | Specs SDD + README con instrucciones de deploy | `specs/01-03` + `README.md` | ✅ |
| T6 | Verificación de build y tipos | `npm run build` exitoso · `npx astro check` → 0 errores | ✅ |

## Verificación final

```
npm run build   → ✓ 1 page(s) built
npx astro check → 0 errors, 0 warnings, 0 hints
```

## Pendientes fuera de alcance v1

- Formulario de cotización (booking) — ver "Extensibilidad futura" en `specs/02-design.md`
- Agenda de fechas
- Dominio real y ajuste de `site` en `astro.config.mjs`
