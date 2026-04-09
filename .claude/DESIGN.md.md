# DESIGN.md — agendadr.com (Web Pública)

> Este archivo es la fuente de verdad de diseño para la web pública de AgendaDr.
> Claude Code: LEER ESTE ARCHIVO COMPLETO antes de crear o modificar cualquier componente visual.

---

## Stack de librerías (SOLO estas — no agregar más)

| Librería | Propósito | Instalación |
|---|---|---|
| **Astro** | Framework (HTML estático) | `npm create astro@latest` |
| **Tailwind CSS** | Estilos utility-first | `npx astro add tailwind` |
| **Aceternity UI** (free) | Componentes animados (hero, cards, parallax) | Copy-paste desde ui.aceternity.com |
| **Magic UI** (free) | Componentes animados complementarios (números, marquee, shimmer) | Copy-paste desde magicui.design |
| **Framer Motion** | Motor de animaciones (requerido por Aceternity) | `npm install framer-motion` |
| **Lucide Icons** | Íconos línea | `npm install lucide-astro` |
| **Lenis** | Smooth scroll | `npm install lenis` |

### PROHIBIDO agregar:
- Mantine, Hero UI, Shadcn/ui, Origin UI, GSAP, AOS, o cualquier otra librería de UI/animación
- Si necesitas algo que no está en la lista, consulta antes de instalar

---

## Paleta de colores

### Tailwind config (tailwind.config.mjs)

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#03BB85',
          hover: '#02a676',
          light: '#4CE5B5',
          'light-hover': '#80e3c7',
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#03BB85',
          600: '#02a676',
          700: '#028a62',
          800: '#026e4e',
          900: '#01523b',
        },
        // Azules del logo — SOLO para acentos de marketing
        logo: {
          blue: '#2196F3',
          'blue-light': '#5AC0F9',
        },
        // Semánticos
        success: { DEFAULT: '#16a34a', light: '#4ade80' },
        warning: { DEFAULT: '#d97706', light: '#fbbf24' },
        danger: { DEFAULT: '#dc2626', light: '#f87171' },
      },
      fontFamily: {
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

### Uso de colores

- **Primary (#03BB85):** Botones CTA, links, badges activos, focus rings, checkmarks
- **Primary hover (#02a676):** Hover de botones y links
- **Slate (Tailwind default):** Textos, fondos, bordes — usar slate-900/50/100 etc.
- **Azules del logo:** SOLO para badges "Hecho en Perú", detalles decorativos de marketing. NUNCA para botones ni links.
- **Semánticos:** Solo en contextos de feedback (éxito, alerta, error)

---

## Tipografía

### Fuentes

**Cal Sans** — Headlines (H1, H2)
- Fuente: https://github.com/calcom/font (open source, gratis)
- Uso: Títulos grandes, hero headlines, títulos de sección principales
- Peso: 600 (semibold) — único peso disponible
- Tracking: -0.02em en H1, -0.01em en H2

**Inter** — Todo lo demás
- Fuente: Google Fonts (gratis, variable)
- Uso: Body, párrafos, botones, navegación, labels, FAQ, tablas
- Pesos: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Escala

```css
/* H1 — Hero headlines */
.h1 { font-family: 'Cal Sans'; font-size: 3rem; font-weight: 600; letter-spacing: -0.02em; line-height: 1.1; }
/* Mobile: 2.25rem */

/* H2 — Títulos de sección */
.h2 { font-family: 'Cal Sans'; font-size: 2.25rem; font-weight: 600; letter-spacing: -0.01em; line-height: 1.2; }
/* Mobile: 1.875rem */

/* H3 — Subtítulos */
.h3 { font-family: 'Inter'; font-size: 1.5rem; font-weight: 600; line-height: 1.3; }

/* H4 — Cards, features */
.h4 { font-family: 'Inter'; font-size: 1.25rem; font-weight: 600; line-height: 1.4; }

/* Body */
.body { font-family: 'Inter'; font-size: 1.125rem; font-weight: 400; line-height: 1.7; color: slate-600; }
/* Mobile: 1rem */

/* Body small */
.body-sm { font-family: 'Inter'; font-size: 0.875rem; font-weight: 400; line-height: 1.6; }

/* CTA buttons */
.btn-text { font-family: 'Inter'; font-size: 1rem; font-weight: 600; }
```

---

## Espaciado

- **Base unit:** 4px
- **Sección padding vertical:** py-20 a py-32 (80-128px desktop), py-12 a py-16 (48-64px móvil)
- **Container:** max-w-7xl (1280px) mx-auto px-6
- **Gap entre cards:** gap-6 (24px desktop), gap-4 (16px móvil)
- **Entre secciones de texto:** space-y-4 (16px)

---

## Border radius

- **Cards:** rounded-xl (12px)
- **Botones:** rounded-lg (8px)
- **Inputs:** rounded-lg (8px)
- **Badges:** rounded-full (9999px)
- **Imágenes/mockups:** rounded-xl (12px) o rounded-2xl (16px)

---

## Sombras

```css
/* Card default — ambient, sutil */
.shadow-card { box-shadow: 0 1px 3px rgba(0,0,0,0.04); }

/* Card hover */
.shadow-card-hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

/* Floating elements (header sticky, modales) */
.shadow-float { box-shadow: 0 8px 32px rgba(0,0,0,0.12); backdrop-filter: blur(12px); }
```

NO usar drop shadows pesados. Mantener sutil y ambient.

---

## Principios de diseño

### Separación por superficie
- Secciones alternan entre fondo blanco (`bg-white`) y fondo gris (`bg-slate-50`)
- Dark mode: alternar entre `bg-slate-900` y `bg-slate-800`
- NO usar bordes (1px solid) para separar secciones — usar diferencia de fondo

### Glass morphism
- SOLO para: header sticky, modales, tooltips, dropdowns
- NUNCA para: cards de contenido, secciones, pricing tables
- Implementar con: `bg-white/80 backdrop-blur-xl border border-white/20`

### Animaciones
- SUTILES y con propósito. No animar todo.
- Animar: hero (entrada), CTAs (hover shimmer), números (count up), cards (hover lift), texto (reveal en scroll)
- NO animar: párrafos de texto, íconos decorativos, fondos completos
- Duración estándar: 300-500ms. Easing: ease-out.
- Usar Framer Motion `whileInView` para animaciones de scroll

### Responsive (Mobile-first)
- Diseñar móvil primero, escalar a desktop
- **sm:** 640px — ajustes menores
- **md:** 768px — cambio de layout (1 col → 2 col)
- **lg:** 1024px — layout completo (3-4 columnas)
- En móvil: una columna, padding reducido, fuentes -10%
- Menú: hamburger con drawer animado en móvil

---

## Componentes de Aceternity UI a usar

| Componente | Sección de la web | URL referencia |
|---|---|---|
| Spotlight / Aurora Background | Hero de landing | ui.aceternity.com/components/spotlight |
| 3D Card Effect | Cards de funcionalidades | ui.aceternity.com/components/3d-card-effect |
| Infinite Moving Cards | Testimonios | ui.aceternity.com/components/infinite-moving-cards |
| Text Generate Effect | Headlines con reveal | ui.aceternity.com/components/text-generate-effect |
| Tabs / Animated Tabs | Toggle de planes | ui.aceternity.com/components/tabs |
| Compare (slider) | Antes vs Después | ui.aceternity.com/components/compare |
| Bento Grid | Features overview | ui.aceternity.com/components/bento-grid |

## Componentes de Magic UI a usar

| Componente | Sección de la web | URL referencia |
|---|---|---|
| Number Ticker | Estadísticas, métricas | magicui.design/docs/components/number-ticker |
| Shimmer Button | CTAs principales | magicui.design/docs/components/shimmer-button |
| Marquee | Barra de logos/confianza | magicui.design/docs/components/marquee |
| Animated Beam | Flujo "cómo funciona" | magicui.design/docs/components/animated-beam |

---

## Estructura de componentes

```
src/components/
├── ui/                    → Componentes base
│   ├── Button.astro       → Botones (primary, secondary, ghost)
│   ├── Card.astro         → Card con shadow ambient
│   ├── Badge.astro        → Badge rounded-full
│   ├── Container.astro    → max-w-7xl mx-auto px-6
│   └── Section.astro      → Sección con padding + fondo alternado
├── sections/              → Secciones reutilizables de página
│   ├── Hero.astro
│   ├── Features.astro
│   ├── HowItWorks.astro
│   ├── Pricing.astro
│   ├── Testimonials.astro
│   ├── FAQ.astro
│   ├── CTA.astro
│   ├── ComparisonTable.astro
│   └── Footer.astro
├── layout/
│   ├── Header.astro       → Nav + hamburger móvil
│   └── Footer.astro
└── animations/            → Componentes React de Aceternity/Magic adaptados
    ├── SpotlightHero.tsx
    ├── Card3D.tsx
    ├── InfiniteCards.tsx
    ├── NumberTicker.tsx
    ├── ShimmerButton.tsx
    └── TextReveal.tsx
```

### Nota sobre Astro + React
Los componentes animados de Aceternity y Magic UI son React. En Astro se usan como "islas" con `client:visible` o `client:load`:

```astro
---
import SpotlightHero from '../components/animations/SpotlightHero.tsx';
---
<SpotlightHero client:visible />
```

Esto carga el JS solo cuando el componente es visible — mantiene el HTML estático ligero.

---

## Dark Mode

La web DEBE soportar dark mode completo. Implementar con Tailwind `dark:` variant.

### Detección
- Respetar preferencia del sistema (`prefers-color-scheme`)
- Toggle manual en el header (sol/luna) con `localStorage` para persistir
- Default: light mode

### Colores en dark mode

| Elemento | Light | Dark |
|---|---|---|
| Background principal | `bg-white` | `bg-slate-900` (#0f172a) |
| Background surface | `bg-slate-50` | `bg-slate-800` (#1e293b) |
| Texto principal | `text-slate-900` | `text-slate-100` (#f1f5f9) |
| Texto secundario | `text-slate-600` | `text-slate-400` |
| Bordes | `border-slate-200` | `border-slate-700` |
| Primary | `text-primary` (#03BB85) | `text-primary-light` (#4CE5B5) |
| Primary hover | `hover:bg-primary-hover` (#02a676) | `hover:bg-primary-light-hover` (#80e3c7) |
| Cards | `bg-white shadow-card` | `bg-slate-800 shadow-none border border-slate-700` |
| Header sticky | `bg-white/80 backdrop-blur-xl` | `bg-slate-900/80 backdrop-blur-xl` |
| Badges | `bg-primary-50 text-primary` | `bg-primary/10 text-primary-light` |
| Inputs | `bg-white border-slate-200` | `bg-slate-800 border-slate-700` |
| Code blocks | `bg-slate-100` | `bg-slate-800` |

### Reglas de implementación

```html
<!-- Ejemplo de componente con dark mode -->
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
  <h2 class="text-slate-900 dark:text-white">Título</h2>
  <p class="text-slate-600 dark:text-slate-400">Párrafo</p>
  <button class="bg-primary hover:bg-primary-hover dark:bg-primary-light dark:hover:bg-primary-light-hover text-white dark:text-slate-900">
    CTA
  </button>
</div>
```

### Secciones alternadas en dark mode
- Light: `bg-white` ↔ `bg-slate-50`
- Dark: `bg-slate-900` ↔ `bg-slate-800`

### Tailwind config para dark mode

```javascript
// tailwind.config.mjs
export default {
  darkMode: 'class', // Toggle manual con clase .dark en <html>
  // ...
}
```

### Toggle component

```astro
<!-- DarkModeToggle.astro -->
<button id="theme-toggle" aria-label="Toggle dark mode">
  <!-- Sol para dark, Luna para light -->
</button>
<script>
  // Check localStorage or system preference
  // Toggle .dark class on document.documentElement
  // Persist in localStorage
</script>
```

---

## Tono visual

- **Moderno y limpio** — inspirado en Linear, Vercel, Cal.com
- **Amigable y accesible** — no intimidante, no corporativo frío
- **Profesional pero con personalidad** — transmite confianza para el rubro médico sin perder la buena onda
- **Rubro médico:** verde teal transmite salud, calma, confianza. No usar rojos ni naranjas como colores principales.

---

## Checklist antes de cada página

- [ ] ¿Usa solo las librerías aprobadas?
- [ ] ¿Los colores son de la paleta definida?
- [ ] ¿Las fuentes son Cal Sans (headlines) + Inter (body)?
- [ ] ¿Es responsive (mobile-first)?
- [ ] ¿Tiene dark mode completo con `dark:` variants?
- [ ] ¿Las animaciones son sutiles y con propósito?
- [ ] ¿Las secciones alternan fondos (white/slate-50 en light, slate-900/slate-800 en dark)?
- [ ] ¿Los CTAs usan el color primary #03BB85 (light) / #4CE5B5 (dark)?
- [ ] ¿El spacing sigue la base de 4px?
- [ ] ¿Los border-radius son 12px (cards) / 8px (botones)?
- [ ] ¿El toggle de dark mode está en el header?
