# ORIENTE GAITERO --- SPEC DEL PROYECTO

## Mobile Booking Hub / Landing Comercial

**Versión:** 1.0\
**Fecha:** 28/09/2026\
**Prioridad:** Mobile-first

## 1. Objetivo

Crear una experiencia web mobile-first para Oriente Gaitero que funcione
como:

-   Landing comercial.
-   Portafolio audiovisual.
-   Hub de enlaces para Instagram, TikTok, WhatsApp y QR.
-   Canal de solicitudes de contratación.
-   Base para administrar leads, eventos y contenido.

Flujo principal:

**Descubrir → Conocer → Ver/Escuchar → Confiar → Contratar.**

## 2. Objetivos de negocio

### Principal

Convertir visitas móviles en solicitudes de contratación calificadas.

### Secundarios

-   Fortalecer la identidad digital.
-   Mostrar rápidamente el nivel artístico y visual.
-   Facilitar contacto por WhatsApp.

## 3. Público objetivo

-   Personas que organizan eventos privados.
-   Empresas.
-   Organizadores de festivales.
-   Restaurantes y hoteles.
-   Instituciones.
-   Productores de eventos.
-   Organizadores de celebraciones navideñas.

## 4. Principios UX

### Mobile-first

Diseñar primero para 360--430 px y escalar a tablet/desktop.

### Primeros segundos

La primera pantalla debe responder: 1. ¿Quiénes son? 2. ¿Cómo suenan/se
ven? 3. ¿Cómo los contrato?

### Progressive disclosure

No saturar la primera visita. La información profunda se muestra solo
cuando el usuario la solicita.

## 5. Identidad visual

### Marca

**ORIENTE GAITERO**

### Personalidad

Musical, venezolana, moderna, cercana, profesional, energética, festiva
y premium sin parecer corporativa.

### Paleta base

-   **Naranja:** `#F47B16` --- CTA, energía y detalles.
-   **Azul turquesa:** `#08A9CC` --- acentos y territorio.
-   **Marrón profundo:** `#4A2113` --- identidad y tradición.
-   **Carbón:** `#111111` --- fondos y navegación.
-   **Blanco:** `#FFFFFF` --- contraste.

Los valores son referencias iniciales y deben validarse con los archivos
oficiales de marca.

## 6. Dirección visual

Concepto:

**Gaita zuliana contemporánea + energía de escenario + estética musical
premium.**

Evitar: - Plantillas genéricas de Linktree. - Gradientes excesivos. -
Iconografía genérica. - Imágenes de stock. - Efectos 3D innecesarios. -
Exceso de naranja. - Estética de SaaS.

Priorizar: - Fotografía y video reales. - Tipografía robusta. - Alto
contraste. - Espaciado generoso. - Microinteracciones discretas. -
Gráfica inspirada en ritmo/música.

## 7. Arquitectura

### Rutas públicas

``` text
/
 /show
 /galeria
 /nosotros
 /eventos
 /contacto

```

## 8. Home mobile

### Header

-   Logo.
-   Menú hamburguesa.
-   CTA Contratar.
-   Header compacto al hacer scroll.

### Hero

Título: **ORIENTE GAITERO**

Mensaje: **Gaita zuliana con identidad, energía y espectáculo.**

CTA: - **CONTRATAR** - **VER SHOW**

Visual: Fotografía o video real de la agrupación.

### Video

Título: **ASÍ SUENA ORIENTE GAITERO**

Video de 20--40 segundos incrustado desde YouTube (iframe
`youtube-nocookie.com`, lazy loading, controles y pantalla completa del
reproductor). URL en `src/data/video.json` campo `youtube`; si está vacía
se muestra el póster con aviso PENDIENTE.

### Tipos de evento

Cards: - Privados. - Corporativos. - Festivales. - Navidad.

Al seleccionar una categoría, el formulario puede precargar el tipo de
evento.

### Propuesta de valor

Máximo cuatro bloques: - Gaita zuliana. - Show en vivo. - Formatos
flexibles. - Imagen profesional.

### Galería

Grid de 2 columnas en móvil, lightbox y lazy loading.

### Redes

Instagram, TikTok, YouTube y WhatsApp.

### Testimonios

2--4 testimonios reales y autorizados.

### CTA

**¿TIENES UN EVENTO?** **SOLICITAR COTIZACIÓN**

### Footer

Logo, redes, contacto, privacidad, términos y copyright.

## 9. Página Show

Ruta `/show`.

Debe contener: - Video principal. - Fotografías. - Descripción breve. -
Formatos artísticos. - Repertorio resumido. - Duración aproximada. -
Requerimientos técnicos resumidos. - CTA de contratación.

## 10. Formatos artísticos

Tarjetas sugeridas:

### FORMATO GAITERO

Para espacios pequeños y celebraciones.

### FORMATO SHOW

Para eventos privados y corporativos.

### FORMATO FESTIVAL

Para escenarios grandes.

### FORMATO DECEMBRINO

Para temporada navideña.

Las características finales deben ser confirmadas por la agrupación.

## 11. Eventos

Ruta `/eventos`.

Categorías: - Privados. - Corporativos. - Festivales. - Navidad. -
Restaurantes/hoteles. - Institucionales.

No publicar información privada de clientes sin autorización.

## 12. Nosotros

Ruta `/nosotros`.

Mensaje central: **Tres amigos, una pasión y una visión.**

Contenido breve: - Historia. - Propósito. - Visión. - Integrantes y
roles, si existe autorización.

## 13. Galería

Ruta `/galeria`.

Categorías: - En vivo. - Eventos. - Backstage. - Agrupación. - Público.

Requisitos: - Imágenes optimizadas. - Lazy loading. - Lightbox. - Alt
text.


## 14. WhatsApp

Debe ser uno de los canales principales.

Implementar CTA fijo en mobile: **WHATSAPP**

El número comercial debe gestionarse desde configuración, no estar
duplicado en múltiples componentes.

## 15. Contacto

Mostrar: - WhatsApp comercial. - Email. - Redes. - Ciudad base. -
Horario, si aplica.

CTA: **ESCRIBIR POR WHATSAPP**

No publicar datos personales de integrantes.

## 16. SEO

Home: **Title:** Oriente Gaitero \| Gaita Zuliana para Eventos

**Description:** Oriente Gaitero --- agrupación de gaita zuliana para
eventos privados, corporativos, festivales y celebraciones.

Implementar: - Metadata. - Sitemap. - Robots. - Canonical. - Open
Graph. - Schema.org. - Organization/MusicGroup. - Event cuando exista
información pública válida.

No inventar ubicaciones, eventos, premios o clientes.

## 17. Performance

Objetivos: - Carga rápida en móvil. - LCP optimizado. - WebP/AVIF. -
Lazy loading. - Embed de YouTube con póster de reserva. - No autoplay con
sonido. - JS
mínimo. - Fuentes optimizadas. - Galería progresiva.

## 18. Accesibilidad

Objetivo: WCAG 2.2 AA cuando sea razonablemente aplicable.

-   Contraste adecuado.
-   Focus visible.
-   Labels.
-   Alt text.
-   Botones táctiles adecuados.
-   Navegación por teclado.
-   No depender solo del color.
-   Subtítulos para video cuando sea posible.
-   Reduced motion.

## 19. Componentes UI

``` text
Logo
Header
MobileMenu
StickyBookingCTA
Hero
VideoHero
PrimaryButton
SecondaryButton
EventCard
FormatCard
ValueCard
GalleryGrid
Lightbox
SocialLinks
TestimonialCard
Footer
```

## 20. Tono de copy

Directo, cálido, venezolano, profesional, musical y emocional.

Evitar: - textos corporativos largos; - clichés; - exceso de emojis; -
afirmaciones no demostrables; - frases como "la mejor agrupación".

Ejemplo: **Gaita zuliana con identidad, energía y espectáculo.**

## 21. Wireframe mobile

``` text
┌───────────────────────────────┐
│ LOGO              ☰           │
├───────────────────────────────┤
│       ORIENTE GAITERO         │
│ Gaita zuliana con identidad,  │
│ energía y espectáculo.        │
│ [ CONTRATAR ] [ VER SHOW ]    │
│       FOTO / VIDEO            │
├───────────────────────────────┤
│ ASÍ SUENA ORIENTE             │
│       [ VIDEO ]               │
├───────────────────────────────┤
│ ¿QUÉ ESTÁS ORGANIZANDO?       │
│ [Privado] [Corporativo]       │
│ [Festival] [Navidad]          │
├───────────────────────────────┤
│ MÚSICA QUE CONECTA            │
├───────────────────────────────┤
│ GALERÍA                       │
│ [img] [img]                   │
│ [img] [img]                   │
├───────────────────────────────┤
│ LO QUE DICEN DE NOSOTROS      │
├───────────────────────────────┤
│ ¿TIENES UN EVENTO?            │
│ [ SOLICITAR COTIZACIÓN ]      │
├───────────────────────────────┤
│ FAQ                           │
│ REDES                         │
│ FOOTER                        │
└───────────────────────────────┘
        [ CONTRATAR ]
```

## 22. Responsive

Breakpoints iniciales:

``` text
360px
390px
430px
768px
1024px
1280px+
```

Diseñar primero para 360--430 px.
