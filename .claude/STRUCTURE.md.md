# STRUCTURE.md — Estructura del proyecto agendadr.com

> Este archivo define TODAS las páginas, rutas y arquitectura del proyecto Astro.
> Claude Code: Leer este archivo + DESIGN.md + COPYS.md antes de crear cualquier página.

---

## Stack

- **Framework:** Astro
- **CSS:** Tailwind CSS
- **Animaciones:** Aceternity UI (free) + Magic UI (free) + Framer Motion
- **Íconos:** Lucide Icons
- **Smooth scroll:** Lenis
- **Hosting:** Vercel Pro
- **Email formularios:** Resend (via Vercel Serverless Functions o API de Railway)

---

## Estructura completa del proyecto

```
agendadr-web/
├── .claude/
│   ├── DESIGN.md              → Reglas de diseño (colores, tipografía, dark mode)
│   ├── COPYS.md               → Mapa de 41 IDs de Notion → archivos .md
│   └── STRUCTURE.md           → Este archivo (estructura del proyecto)
│
├── public/
│   ├── fonts/
│   │   └── CalSans-SemiBold.woff2
│   ├── images/
│   │   ├── logo/              → Logo AgendaDr (SVG, PNG)
│   │   ├── mockups/           → Screenshots del SaaS
│   │   ├── icons/             → Íconos de Yape, Plin, Culqi, etc.
│   │   └── illustrations/     → Ilustraciones 3D (si se compran)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml            → Generado por @astrojs/sitemap
│
├── src/
│   ├── components/
│   │   ├── ui/                → Componentes base reutilizables
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   ├── Container.astro
│   │   │   ├── Section.astro
│   │   │   └── DarkModeToggle.astro
│   │   │
│   │   ├── layout/            → Header y Footer globales
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileMenu.astro
│   │   │   └── CookieBanner.astro
│   │   │
│   │   ├── sections/          → Secciones reutilizables de página
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── HowItWorks.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── PricingTable.astro
│   │   │   ├── Testimonials.astro
│   │   │   ├── FAQ.astro
│   │   │   ├── CTA.astro
│   │   │   ├── ComparisonTable.astro
│   │   │   ├── TrustBar.astro
│   │   │   └── ContactForm.astro
│   │   │
│   │   └── animations/        → Componentes React (islas) de Aceternity/Magic UI
│   │       ├── SpotlightHero.tsx
│   │       ├── Card3D.tsx
│   │       ├── InfiniteCards.tsx
│   │       ├── NumberTicker.tsx
│   │       ├── ShimmerButton.tsx
│   │       ├── TextReveal.tsx
│   │       ├── BentoGrid.tsx
│   │       └── AnimatedBeam.tsx
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro       → HTML head, meta tags, schema, fonts, dark mode script
│   │   ├── PageLayout.astro       → BaseLayout + Header + Footer + container
│   │   ├── LandingLayout.astro    → Para landing y /para/ (hero full-width)
│   │   ├── FeatureLayout.astro    → Para funcionalidades y especialidades
│   │   └── LegalLayout.astro      → Para páginas legales (simple, sin efectos)
│   │
│   ├── content/                   → Copys en markdown (generados desde Notion)
│   │   ├── pages/                 → 7 archivos .md
│   │   ├── para/                  → 5 archivos .md
│   │   ├── funcionalidades/       → 10 archivos .md
│   │   ├── especialidades/        → 10 archivos .md
│   │   ├── comparar/              → 5 archivos .md
│   │   ├── legal/                 → 4 archivos .md
│   │   └── blog/                  → Posts futuros en markdown
│   │
│   ├── pages/                     → TODAS las rutas/URLs del sitio
│   │   ├── index.astro                        → / (Landing page)
│   │   ├── planes.astro                       → /planes
│   │   ├── contacto.astro                     → /contacto
│   │   ├── nosotros.astro                     → /nosotros
│   │   ├── demo.astro                         → /demo
│   │   ├── casos-de-exito.astro               → /casos-de-exito
│   │   ├── centro-de-ayuda.astro              → /centro-de-ayuda
│   │   │
│   │   ├── para/
│   │   │   ├── index.astro                    → /para (overview)
│   │   │   ├── doctores.astro                 → /para/doctores
│   │   │   ├── consultorios.astro             → /para/consultorios
│   │   │   ├── clinicas.astro                 → /para/clinicas
│   │   │   ├── centros-medicos.astro          → /para/centros-medicos
│   │   │   └── policlinicos.astro             → /para/policlinicos
│   │   │
│   │   ├── funcionalidades/
│   │   │   ├── index.astro                    → /funcionalidades (overview)
│   │   │   ├── citas-online.astro             → /funcionalidades/citas-online
│   │   │   ├── pagos-medicos.astro            → /funcionalidades/pagos-medicos
│   │   │   ├── whatsapp-clinicas.astro        → /funcionalidades/whatsapp-clinicas
│   │   │   ├── historial-medico.astro         → /funcionalidades/historial-medico
│   │   │   ├── recetas-digitales.astro        → /funcionalidades/recetas-digitales
│   │   │   ├── gestion-clinicas.astro         → /funcionalidades/gestion-clinicas
│   │   │   ├── reportes.astro                 → /funcionalidades/reportes
│   │   │   ├── multi-sede.astro               → /funcionalidades/multi-sede
│   │   │   ├── comisiones.astro               → /funcionalidades/comisiones
│   │   │   └── planes-tratamiento.astro       → /funcionalidades/planes-tratamiento
│   │   │
│   │   ├── especialidades/
│   │   │   ├── index.astro                    → /especialidades (overview)
│   │   │   └── [...slug].astro                → Generación dinámica desde content/especialidades/
│   │   │       → /especialidades/odontologia
│   │   │       → /especialidades/psicologia
│   │   │       → /especialidades/dermatologia
│   │   │       → /especialidades/ginecologia
│   │   │       → /especialidades/pediatria
│   │   │       → /especialidades/oftalmologia
│   │   │       → /especialidades/nutricion
│   │   │       → /especialidades/medicina-general
│   │   │       → /especialidades/medicina-estetica
│   │   │       → /especialidades/fisioterapia
│   │   │
│   │   ├── comparar/
│   │   │   ├── index.astro                    → /comparar (overview)
│   │   │   └── [...slug].astro                → Generación dinámica desde content/comparar/
│   │   │       → /comparar/doctocliq
│   │   │       → /comparar/agendapro
│   │   │       → /comparar/medinet
│   │   │       → /comparar/doctoralia
│   │   │       → /comparar/excel
│   │   │
│   │   ├── blog/
│   │   │   ├── index.astro                    → /blog (listado)
│   │   │   └── [...slug].astro                → /blog/[slug] (posts individuales)
│   │   │
│   │   ├── terminos.astro                     → /terminos
│   │   ├── privacidad.astro                   → /privacidad
│   │   ├── cookies.astro                      → /cookies
│   │   ├── libro-de-reclamaciones.astro       → /libro-de-reclamaciones
│   │   │
│   │   └── 404.astro                          → Página de error 404
│   │
│   ├── styles/
│   │   └── global.css             → @tailwind base/components/utilities + custom fonts + CSS variables
│   │
│   └── lib/
│       ├── seo.ts                 → Helpers para meta tags, Open Graph, schema markup
│       └── resend.ts              → Helper para envío de emails (formularios)
│
├── astro.config.mjs               → Configuración Astro + sitemap + Tailwind + React
├── tailwind.config.mjs            → Colores de marca, fonts, dark mode
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Mapa de URLs (55+ páginas)

### Principales (7 + 1 error)
| URL | Archivo | Layout |
|---|---|---|
| `/` | `index.astro` | LandingLayout |
| `/planes` | `planes.astro` | PageLayout |
| `/contacto` | `contacto.astro` | PageLayout |
| `/nosotros` | `nosotros.astro` | PageLayout |
| `/demo` | `demo.astro` | PageLayout |
| `/casos-de-exito` | `casos-de-exito.astro` | PageLayout |
| `/centro-de-ayuda` | `centro-de-ayuda.astro` | PageLayout |
| `/404` | `404.astro` | PageLayout |

### Por tipo de negocio /para/ (5 + 1 overview)
| URL | Archivo | Layout |
|---|---|---|
| `/para` | `para/index.astro` | PageLayout |
| `/para/doctores` | `para/doctores.astro` | LandingLayout |
| `/para/consultorios` | `para/consultorios.astro` | LandingLayout |
| `/para/clinicas` | `para/clinicas.astro` | LandingLayout |
| `/para/centros-medicos` | `para/centros-medicos.astro` | LandingLayout |
| `/para/policlinicos` | `para/policlinicos.astro` | LandingLayout |

### Funcionalidades (10 + 1 overview)
| URL | Archivo | Layout |
|---|---|---|
| `/funcionalidades` | `funcionalidades/index.astro` | PageLayout |
| `/funcionalidades/citas-online` | `funcionalidades/citas-online.astro` | FeatureLayout |
| `/funcionalidades/pagos-medicos` | `funcionalidades/pagos-medicos.astro` | FeatureLayout |
| `/funcionalidades/whatsapp-clinicas` | `funcionalidades/whatsapp-clinicas.astro` | FeatureLayout |
| `/funcionalidades/historial-medico` | `funcionalidades/historial-medico.astro` | FeatureLayout |
| `/funcionalidades/recetas-digitales` | `funcionalidades/recetas-digitales.astro` | FeatureLayout |
| `/funcionalidades/gestion-clinicas` | `funcionalidades/gestion-clinicas.astro` | FeatureLayout |
| `/funcionalidades/reportes` | `funcionalidades/reportes.astro` | FeatureLayout |
| `/funcionalidades/multi-sede` | `funcionalidades/multi-sede.astro` | FeatureLayout |
| `/funcionalidades/comisiones` | `funcionalidades/comisiones.astro` | FeatureLayout |
| `/funcionalidades/planes-tratamiento` | `funcionalidades/planes-tratamiento.astro` | FeatureLayout |

### Especialidades (10 + 1 overview) — Generación dinámica
| URL | Content file | Layout |
|---|---|---|
| `/especialidades` | `especialidades/index.astro` | PageLayout |
| `/especialidades/[slug]` | `content/especialidades/[slug].md` | FeatureLayout |

### Comparativas (5 + 1 overview) — Generación dinámica
| URL | Content file | Layout |
|---|---|---|
| `/comparar` | `comparar/index.astro` | PageLayout |
| `/comparar/[slug]` | `content/comparar/[slug].md` | PageLayout |

### Blog — Generación dinámica
| URL | Content file | Layout |
|---|---|---|
| `/blog` | `blog/index.astro` | PageLayout |
| `/blog/[slug]` | `content/blog/[slug].md` | PageLayout |

### Legales (4)
| URL | Archivo | Layout |
|---|---|---|
| `/terminos` | `terminos.astro` | LegalLayout |
| `/privacidad` | `privacidad.astro` | LegalLayout |
| `/cookies` | `cookies.astro` | LegalLayout |
| `/libro-de-reclamaciones` | `libro-de-reclamaciones.astro` | LegalLayout |

### Herramientas SEO (auto-generadas)
| URL | Generado por |
|---|---|
| `/sitemap.xml` | @astrojs/sitemap |
| `/robots.txt` | Archivo estático en public/ |

---

## Layouts

### BaseLayout.astro
Incluye: `<html>`, `<head>` con meta tags, Open Graph, schema markup, fonts (Cal Sans + Inter), dark mode script, Google Analytics, Lenis smooth scroll.

### PageLayout.astro
Extiende BaseLayout. Agrega: Header, Footer, container `max-w-7xl mx-auto px-6`.

### LandingLayout.astro
Extiende BaseLayout. Agrega: Header, Footer. Sin container (secciones full-width con container interno).

### FeatureLayout.astro
Extiende BaseLayout. Agrega: Header, Footer, breadcrumbs, sidebar de navegación de funcionalidades.

### LegalLayout.astro
Extiende BaseLayout. Agrega: Header, Footer, container estrecho `max-w-3xl`. Sin animaciones, sin efectos.

---

## Navegación

### Header (desktop)
```
Logo AgendaDr | Funcionalidades ▾ | Para quién ▾ | Planes | Blog | [Toggle dark mode] | Iniciar sesión | Empieza ahora →
```

**Dropdown "Funcionalidades":**
- Citas online
- Historial médico
- Pagos con Yape/Plin
- CRM WhatsApp
- Comisiones
- Planes de tratamiento
- Reportes
- Ver todas →

**Dropdown "Para quién":**
- Doctores independientes
- Consultorios
- Clínicas
- Centros médicos
- Policlínicos

### Header (móvil)
```
Logo AgendaDr | [Toggle dark mode] | [Hamburger ☰]
```
Drawer con todas las secciones expandibles.

### Footer
```
5 columnas:
1. Logo + descripción corta + redes sociales
2. Producto: Funcionalidades, Planes, Demo, Casos de éxito
3. Para quién: Doctores, Consultorios, Clínicas, Centros médicos
4. Recursos: Blog, Centro de ayuda, Comparativas, Especialidades
5. Legal: Términos, Privacidad, Cookies, Libro de reclamaciones

Barra inferior: © 2026 ECOGIROS NEGOCIOS E.I.R.L. | RUC 20612344567
```

---

## Conexión con el SaaS

| Acción en la web | Redirige a |
|---|---|
| CTA "Empieza ahora" | `app.agendadr.com/adquirir-plan` |
| CTA "Seleccionar plan" | `app.agendadr.com/checkout?plan=X` |
| CTA "Solicitar demo" | `/demo` (formulario local) |
| CTA "Iniciar sesión" | `app.agendadr.com/login` |
| Botón WhatsApp | `wa.me/51XXXXXXXXX` |

---

## Configuración Astro (astro.config.mjs)

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://agendadr.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),     // Para islas React (Aceternity UI, Magic UI)
    sitemap(),
  ],
});
```

---

## Orden de desarrollo recomendado

### Fase 1 — Base (primero)
1. Configurar proyecto Astro + Tailwind + React
2. Configurar tailwind.config.mjs con colores de marca
3. Crear BaseLayout con fonts, dark mode, meta tags
4. Crear Header con navegación + dark mode toggle
5. Crear Footer con 5 columnas
6. Crear componentes base (Button, Card, Badge, Container, Section)

### Fase 2 — Landing page
7. Crear LandingLayout
8. Construir landing page (/) con todas las secciones
9. Integrar componentes animados de Aceternity/Magic UI

### Fase 3 — Páginas core
10. Planes (/planes)
11. /para/doctores, /para/clinicas, /para/consultorios
12. Funcionalidades principales (pagos, whatsapp, citas)

### Fase 4 — Páginas SEO
13. Resto de funcionalidades
14. Especialidades (plantilla dinámica)
15. Comparativas (plantilla dinámica)

### Fase 5 — Secundarias y legales
16. Contacto, Nosotros, Demo, Casos de éxito, Centro de ayuda
17. Términos, Privacidad, Cookies, Libro de reclamaciones
18. Página 404

### Fase 6 — Blog y SEO
19. Blog con Content Collections
20. Schema markup en todas las páginas
21. Open Graph images
22. Google Analytics + Search Console

---

*Generado el 9 de abril 2026*
