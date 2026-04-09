# COPYS.md — Mapa de contenido para Claude Code

> Este archivo mapea cada página de Notion (con su ID) al archivo .md donde debe guardarse el copy.
> Claude Code: Lee cada página de Notion con su ID y genera el archivo .md correspondiente en src/content/.

## Instrucciones para Claude Code

1. Lee DESIGN.md primero (reglas de diseño, colores, tipografía, dark mode)
2. Para cada entrada abajo, usa Notion MCP `notion-fetch` con el page_id para leer el contenido
3. Convierte el contenido Notion → markdown estándar limpio
4. Guarda como archivo .md en la ruta indicada
5. NO modifiques el copy — está aprobado. Solo convierte formato.
6. Cada archivo .md debe tener frontmatter con: title, description, keywords, slug

### Formato de cada archivo .md:

```markdown
---
title: "Título de la página"
description: "Meta description para SEO (150-160 chars)"
keywords: ["keyword1", "keyword2"]
slug: "/ruta/de/la/pagina"
---

# Contenido del copy aquí...
```

---

## PÁGINAS PRINCIPALES (7)

| Ruta del archivo | Notion Page ID | Slug |
|---|---|---|
| `src/content/pages/landing.md` | `33c94bb3101081fab947ce7d7a31d9c1` | `/` |
| `src/content/pages/planes.md` | `33c94bb3101081fab947ce7d7a31d9c1` | `/planes` |
| `src/content/pages/contacto.md` | `33d94bb3101081ea9a6cf11d1498fe08` | `/contacto` |
| `src/content/pages/nosotros.md` | `33d94bb3101081d4a9fdd5d6478583ce` | `/nosotros` |
| `src/content/pages/demo.md` | `33d94bb310108189a0f1df096fb95eab` | `/demo` |
| `src/content/pages/casos-de-exito.md` | `33d94bb31010810e81c5c714d800cb34` | `/casos-de-exito` |
| `src/content/pages/centro-de-ayuda.md` | `33d94bb3101081a4a1e2c3626b055b03` | `/centro-de-ayuda` |

## PÁGINAS /PARA/ (5)

| Ruta del archivo | Notion Page ID | Slug |
|---|---|---|
| `src/content/para/doctores.md` | `33d94bb3101081d2ade5e8ab786933dc` | `/para/doctores` |
| `src/content/para/consultorios.md` | `33d94bb3101081799863de26ed2eae0d` | `/para/consultorios` |
| `src/content/para/clinicas.md` | `33d94bb310108195a54ef4794e8bf878` | `/para/clinicas` |
| `src/content/para/centros-medicos.md` | `33d94bb3101081e987f8e9f15e528b7e` | `/para/centros-medicos` |
| `src/content/para/policlinicos.md` | `33d94bb31010810db576f335de3fdc91` | `/para/policlinicos` |

## PÁGINAS /FUNCIONALIDADES/ (10)

| Ruta del archivo | Notion Page ID | Slug |
|---|---|---|
| `src/content/funcionalidades/citas-online.md` | `33d94bb31010811cbdaec3b050095be8` | `/funcionalidades/citas-online` |
| `src/content/funcionalidades/pagos-medicos.md` | `33d94bb3101081c29446c2416d453942` | `/funcionalidades/pagos-medicos` |
| `src/content/funcionalidades/whatsapp-clinicas.md` | `33d94bb310108138b72bea03a6d0d66b` | `/funcionalidades/whatsapp-clinicas` |
| `src/content/funcionalidades/historial-medico.md` | `33d94bb3101081f2a51cca18966ccdff` | `/funcionalidades/historial-medico` |
| `src/content/funcionalidades/recetas-digitales.md` | `33d94bb31010814e883ec70c91d8f488` | `/funcionalidades/recetas-digitales` |
| `src/content/funcionalidades/gestion-clinicas.md` | `33d94bb31010815b8207d1a167193c13` | `/funcionalidades/gestion-clinicas` |
| `src/content/funcionalidades/reportes.md` | `33d94bb3101081cc8935dbe2fd76978b` | `/funcionalidades/reportes` |
| `src/content/funcionalidades/multi-sede.md` | `33d94bb310108133b1a9dcd6cca533db` | `/funcionalidades/multi-sede` |
| `src/content/funcionalidades/comisiones.md` | `33d94bb31010815cb0caf7b4ad07add4` | `/funcionalidades/comisiones` |
| `src/content/funcionalidades/planes-tratamiento.md` | `33d94bb31010817badddd4d8f0983af0` | `/funcionalidades/planes-tratamiento` |

## PÁGINAS /ESPECIALIDADES/ (10)

| Ruta del archivo | Notion Page ID | Slug |
|---|---|---|
| `src/content/especialidades/odontologia.md` | `33d94bb3101081b4a8f7ce5c3c376b8d` | `/especialidades/odontologia` |
| `src/content/especialidades/psicologia.md` | `33d94bb310108107a2a4c9bc7d720e31` | `/especialidades/psicologia` |
| `src/content/especialidades/dermatologia.md` | `33d94bb3101081129bc6f57e5b06ef8e` | `/especialidades/dermatologia` |
| `src/content/especialidades/ginecologia.md` | `33d94bb31010817ca8afc14175a340c0` | `/especialidades/ginecologia` |
| `src/content/especialidades/pediatria.md` | `33d94bb310108183a704f86609ceaa54` | `/especialidades/pediatria` |
| `src/content/especialidades/oftalmologia.md` | `33d94bb3101081c3bfc8c349897be1c9` | `/especialidades/oftalmologia` |
| `src/content/especialidades/nutricion.md` | `33d94bb3101081f98cdbc9fe702b81ed` | `/especialidades/nutricion` |
| `src/content/especialidades/medicina-general.md` | `33d94bb310108199a1a5f0bb1daa2f5b` | `/especialidades/medicina-general` |
| `src/content/especialidades/medicina-estetica.md` | `33d94bb3101081c1a892d49ef49ea015` | `/especialidades/medicina-estetica` |
| `src/content/especialidades/fisioterapia.md` | `33d94bb31010816f82ecd301331baa7e` | `/especialidades/fisioterapia` |

## PÁGINAS /COMPARAR/ (5)

| Ruta del archivo | Notion Page ID | Slug |
|---|---|---|
| `src/content/comparar/doctocliq.md` | `33d94bb3101081b2aec3d3a1cbfb5588` | `/comparar/doctocliq` |
| `src/content/comparar/agendapro.md` | `33d94bb3101081288765e4a45894af6c` | `/comparar/agendapro` |
| `src/content/comparar/medinet.md` | `33d94bb3101081d48acdc75109128337` | `/comparar/medinet` |
| `src/content/comparar/doctoralia.md` | `33d94bb3101081ae95fded88a024fe1d` | `/comparar/doctoralia` |
| `src/content/comparar/excel.md` | `33d94bb310108135a9d2fdab3e2bbf19` | `/comparar/excel` |

## PÁGINAS LEGALES (4)

| Ruta del archivo | Notion Page ID | Slug |
|---|---|---|
| `src/content/legal/terminos.md` | `33d94bb3101081d288d2f084ffdba8d5` | `/terminos` |
| `src/content/legal/privacidad.md` | `33d94bb3101081e4aedefaf841565082` | `/privacidad` |
| `src/content/legal/cookies.md` | `33d94bb3101081d08ecbd728e9680a46` | `/cookies` |
| `src/content/legal/libro-de-reclamaciones.md` | `33d94bb31010816ebfd6c2dc484cbd6b` | `/libro-de-reclamaciones` |

---

## TOTAL: 41 archivos .md a generar

## Nota sobre la Landing Page
La landing page tiene su copy en una subpágina del workspace de la web pública.
El ID de la landing (/) puede necesitar buscarse con `notion-search` query "Landing Page" dentro del workspace 33c94bb31010811cbe3aff4afd85c739.

---

*Generado el 9 de abril 2026*
