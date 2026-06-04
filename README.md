# CIDTES Energía y Sustentabilidad — Sitio Web Oficial

Sitio web institucional de **CIDTES Energía y Sustentabilidad**, construido con **Next.js 14**, **React 18**, **TypeScript** y **Tailwind CSS**.

Producción: [https://www.cidtes.org/](https://www.cidtes.org/)

## Tabla de contenido

- [Resumen rápido](#resumen-rápido)
- [Qué hace este sitio](#qué-hace-este-sitio)
- [Tecnologías](#tecnologías)
- [Cómo iniciar en local](#cómo-iniciar-en-local)
- [Scripts disponibles](#scripts-disponibles)
- [Arquitectura general](#arquitectura-general)
- [Rutas del sitio](#rutas-del-sitio)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Explicación carpeta por carpeta](#explicación-carpeta-por-carpeta)
- [Explicación archivo por archivo](#explicación-archivo-por-archivo)
- [Flujo de datos y renderizado](#flujo-de-datos-y-renderizado)
- [Estilos, imágenes y UI](#estilos-imágenes-y-ui)
- [Decisiones técnicas actuales](#decisiones-técnicas-actuales)
- [Mantenimiento y siguientes mejoras sugeridas](#mantenimiento-y-siguientes-mejoras-sugeridas)

## Resumen rápido

### Explicado de forma sencilla

Este proyecto es la página web de CIDTES. Su objetivo es mostrar quiénes son, qué servicios ofrecen y cómo navegar entre las secciones de capacitación, certificación, consultoría, investigación y proyectos.

La web está hecha como una aplicación de Next.js, pero en la práctica funciona como un sitio institucional con varias páginas visuales, carruseles, modales, diagramas interactivos y bastante contenido gráfico.

### Explicado de forma técnica

Es una aplicación **Next.js App Router** ubicada en `app/`, con componentes reutilizables en `components/`, datos estáticos en `lib/`, estilos globales con Tailwind en `app/globals.css`, y assets estáticos en `public/`.

La mayor parte del contenido está hardcodeado en componentes y páginas. No hay backend, base de datos ni API propia dentro del repositorio. El sitio depende principalmente de:

- renderizado del lado del cliente en varias pantallas (`"use client"`)
- imágenes locales servidas desde `public/`
- componentes visuales personalizados
- Tailwind CSS para layout y estilos

## Qué hace este sitio

### Explicado de forma sencilla

La web muestra:

- información institucional de CIDTES
- líneas de servicio
- catálogo de cursos por categoría
- procesos y estándares de certificación
- áreas de consultoría
- iniciativas de investigación, sustentabilidad y ODS
- portafolio de proyectos
- datos de contacto y ubicación

### Explicado de forma técnica

El sitio contiene páginas independientes para cada unidad de negocio:

- `/` inicio institucional
- `/capacitacion` catálogo de formación con modales por categoría
- `/certificacion` experiencia interactiva con círculo de navegación y contenido por secciones
- `/consultoria` carrusel de áreas de consultoría
- `/investigacion-consultoria` contenido de ODS y desarrollo social
- `/proyectos` catálogo visual de servicios/proyectos por categoría

## Tecnologías

- `next@14.2.35`
- `react@18`
- `typescript`
- `tailwindcss@3`
- `lucide-react`
- `three`
- `geist`
- componentes y utilidades compatibles con `shadcn/ui`

## Cómo iniciar en local

### Importante

Este proyecto usa **pnpm**, no `npm`. El repositorio incluye `pnpm-lock.yaml`, así que el gestor correcto es `pnpm`.

Además, este proyecto debe correrse con **Node 22**. Se detectó que con `Node 24` puede quedarse colgado al compilar en desarrollo.

### Requisitos recomendados

- `nvm`
- `Node.js 22`
- `pnpm`

### Primer arranque recomendado

Si usas `nvm`, corre esto desde la raíz del proyecto:

```bash
nvm use
corepack enable
pnpm install
pnpm dev
```

Luego abre:

```bash
http://localhost:3000
```

### Si no tienes `nvm`

Instala o cambia manualmente a `Node 22` antes de correr `pnpm dev`.

### Instalación manual por pasos

```bash
nvm use
corepack enable
pnpm install
pnpm dev
```

### Apagar el servidor

```bash
Ctrl + C
```

### Build de producción

```bash
pnpm build
pnpm start
```

## Scripts disponibles

Definidos en `package.json`:

- `pnpm dev`: levanta el servidor de desarrollo de Next.js
- `pnpm build`: genera la build de producción
- `pnpm start`: sirve la build ya compilada
- `pnpm lint`: ejecuta `next lint`

## Arquitectura general

### Explicado de forma sencilla

La app está separada en:

- páginas
- componentes reutilizables
- datos estáticos
- imágenes
- configuración del proyecto

Cada página arma su contenido combinando componentes e imágenes locales.

### Explicado de forma técnica

La arquitectura sigue esta idea:

1. `app/` define las rutas del sitio.
2. `components/` concentra piezas reutilizables y widgets interactivos.
3. `lib/` guarda utilidades y datasets estáticos.
4. `public/` almacena recursos estáticos servidos directamente.
5. archivos raíz configuran Next.js, Tailwind, PostCSS y TypeScript.

No existe una capa de fetch, CMS ni estado global. La información se embebe directamente en arrays, objetos y JSX.

## Rutas del sitio

| Ruta | Archivo | Propósito |
| --- | --- | --- |
| `/` | `app/page.tsx` | Página principal con hero, carrusel, servicios, clientes, aliados y contenido institucional |
| `/capacitacion` | `app/capacitacion/page.tsx` | Página de metodología y categorías de cursos |
| `/certificacion` | `app/certificacion/page.tsx` | Página interactiva sobre certificación y estándares |
| `/consultoria` | `app/consultoria/page.tsx` | Página con áreas de consultoría en formato carrusel |
| `/investigacion-consultoria` | `app/investigacion-consultoria/page.tsx` | Página sobre ODS, desarrollo social e investigación |
| `/proyectos` | `app/proyectos/page.tsx` | Página con catálogo visual de proyectos y servicios |

## Estructura del proyecto

```text
cidtes_webapp/
├── app/
│   ├── capacitacion/
│   ├── certificacion/
│   ├── consultoria/
│   ├── investigacion-consultoria/
│   ├── proyectos/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── public/
│   ├── icons/
│   └── images/
├── styles/
├── components.json
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Explicación carpeta por carpeta

### `app/`

#### Sencillo

Aquí viven las páginas del sitio.

#### Técnico

Usa el **App Router** de Next.js. Cada carpeta con `page.tsx` representa una ruta. `layout.tsx` define la estructura raíz compartida y `globals.css` carga Tailwind y estilos globales.

### `components/`

#### Sencillo

Aquí están los bloques reutilizables, como el menú, los modales y los elementos visuales interactivos.

#### Técnico

Contiene componentes presentacionales y componentes cliente con estado local, efectos y lógica de interacción. Aquí están los carruseles, modales, diagramas SVG y fondo WebGL.

### `lib/`

#### Sencillo

Guarda datos y funciones auxiliares.

#### Técnico

Incluye datasets estáticos del catálogo de cursos y utilidades genéricas como `cn()` para fusionar clases de Tailwind.

### `public/`

#### Sencillo

Contiene imágenes, logos, iconos y fondos.

#### Técnico

Todo lo que está aquí se sirve como archivo estático desde la raíz del sitio. Por ejemplo, `public/images/logo-simple.png` se usa como `/images/logo-simple.png`.

### `styles/`

#### Sencillo

Es una carpeta de estilos globales adicionales.

#### Técnico

Contiene un segundo archivo `globals.css`. Actualmente el proyecto está usando `app/globals.css` como hoja principal, por lo que `styles/globals.css` funciona más como archivo heredado o alterno.

## Explicación archivo por archivo

### Raíz del proyecto

#### `package.json`

- Sencillo: define el proyecto y sus comandos.
- Técnico: registra dependencias, devDependencies y scripts de Next.js.

#### `pnpm-lock.yaml`

- Sencillo: congela las versiones exactas de las librerías.
- Técnico: asegura instalaciones reproducibles con `pnpm`.

#### `next.config.mjs`

- Sencillo: ajusta el comportamiento general de Next.js.
- Técnico:
  - ignora errores de ESLint durante build
  - ignora errores de TypeScript durante build
  - usa imágenes sin optimización (`images.unoptimized = true`)

#### `tailwind.config.ts`

- Sencillo: configura Tailwind.
- Técnico: define paths de escaneo, variables de color, radios, animaciones y plugin `tailwindcss-animate`.

#### `postcss.config.mjs`

- Sencillo: habilita Tailwind en el pipeline de estilos.
- Técnico: registra `tailwindcss` como plugin de PostCSS.

#### `tsconfig.json`

- Sencillo: configura TypeScript.
- Técnico:
  - `strict: true`
  - alias `@/*`
  - resolución `bundler`
  - integración con Next.js

#### `components.json`

- Sencillo: configuración de componentes estilo `shadcn/ui`.
- Técnico: define aliases, archivo CSS base, configuración Tailwind y librería de iconos `lucide`.

#### `temp_git_log.bat`

- Sencillo: archivo temporal de apoyo.
- Técnico: no participa en el runtime de la app.

### Carpeta `app/`

#### `app/layout.tsx`

- Sencillo: es la plantilla principal del sitio.
- Técnico:
  - define `metadata`
  - carga las fuentes Geist
  - inyecta variables de fuente en `<head>`
  - renderiza `children`

#### `app/globals.css`

- Sencillo: aquí están los estilos globales del sitio.
- Técnico:
  - importa capas de Tailwind
  - define variables CSS para colores y radios
  - incluye reglas globales
  - agrega estilos para el diagrama circular
  - oculta branding de `v0`

#### `app/page.tsx`

- Sencillo: es la home del sitio.
- Técnico:
  - componente cliente
  - usa varios `useState` y `useEffect`
  - controla carrusel principal, modal de imágenes y secciones interactivas
  - integra `NavHeader` y `DiagramaCircular`
  - contiene gran parte del contenido institucional estático

#### `app/capacitacion/page.tsx`

- Sencillo: presenta la metodología de capacitación y las categorías de cursos.
- Técnico:
  - reutiliza `CourseSection`
  - cada sección abre un modal con cursos desde `lib/course-data.ts`
  - usa separadores visuales e imágenes de fondo

#### `app/certificacion/page.tsx`

- Sencillo: explica el área de certificación con una experiencia visual interactiva.
- Técnico:
  - mantiene color y sección activa en estado local
  - usa `MetaballBackground`, `CertificationWheel`, `CertificationContent`, `CertificationExtendedContent` y `StandardsList`
  - cambia contenido según el cuadrante seleccionado

#### `app/consultoria/page.tsx`

- Sencillo: muestra las áreas de consultoría en tarjetas deslizables.
- Técnico:
  - carrusel responsive con `useState` + `useEffect`
  - calcula `itemsPerView` según viewport
  - hace autoavance temporal

#### `app/investigacion-consultoria/page.tsx`

- Sencillo: presenta ODS, desarrollo social y contenido institucional relacionado.
- Técnico:
  - maneja un carrusel responsive para los 17 ODS
  - ajusta el número de tarjetas visibles por breakpoint
  - combina contenido estático con imágenes locales

#### `app/proyectos/page.tsx`

- Sencillo: muestra proyectos/servicios por categoría.
- Técnico:
  - define categorías y dataset local `servicesData`
  - pinta tarjetas visuales por servicio
  - depende de estado local para selección de categoría

### Carpeta `components/`

#### `components/nav-header.tsx`

- Sencillo: menú principal superior del sitio.
- Técnico:
  - navegación desktop y móvil
  - estado local para abrir/cerrar menú hamburguesa
  - links hardcodeados a las rutas del sitio

#### `components/diagrama-circular.tsx`

- Sencillo: diagrama circular interactivo de la home.
- Técnico:
  - SVG custom con geometría polar
  - tabs externas calculadas por ángulo
  - estado para tab seleccionada y rotación
  - notifica selección vía `onTabSelect`

#### `components/course-section.tsx`

- Sencillo: bloque reutilizable para una categoría de cursos.
- Técnico:
  - recibe imagen, título y `courseKey`
  - resuelve datos desde `courseData`
  - abre `CourseModal`

#### `components/course-modal.tsx`

- Sencillo: ventana emergente con el listado de cursos.
- Técnico:
  - cierra con Escape, clic externo y botón
  - bloquea scroll del `body`
  - divide cursos en una o dos columnas según viewport

#### `components/certification-wheel.tsx`

- Sencillo: círculo interactivo de la página de certificación.
- Técnico:
  - SVG con 4 sectores clicables
  - cambia color y sección activa
  - informa selección al componente padre

#### `components/certification-content.tsx`

- Sencillo: muestra el texto principal de certificación.
- Técnico:
  - cambia colores, títulos y bloques según `activeSection`
  - funciona como panel dinámico de contenido

#### `components/certification-extended-content.tsx`

- Sencillo: agrega explicación adicional sobre CE/EI y requisitos.
- Técnico:
  - JSX estático estructurado en tarjetas
  - se renderiza condicionalmente en ciertas secciones

#### `components/standards-carousel.tsx`

- Sencillo: carrusel de estándares ofertados.
- Técnico:
  - dataset interno agrupado por categoría
  - autoavance temporal
  - pausa temporal tras interacción manual

#### `components/standards-list.tsx`

- Sencillo: lista de categorías y códigos de estándares.
- Técnico:
  - usa un arreglo estático de categorías
  - renderiza pills por código

#### `components/metaball-background.tsx`

- Sencillo: fondo animado llamativo detrás de la sección de certificación.
- Técnico:
  - usa `three`
  - crea escena, cámara ortográfica, shader material y animación
  - ajusta calidad según tipo de dispositivo
  - simula metaballs mediante shader GLSL

#### `components/theme-provider.tsx`

- Sencillo: wrapper para temas.
- Técnico:
  - envuelve `next-themes`
  - hoy no parece ser parte central del flujo visible actual

### Carpeta `lib/`

#### `lib/course-data.ts`

- Sencillo: catálogo base de cursos.
- Técnico:
  - exporta la interfaz `Course`
  - define un `Record<string, ...>` por categoría
  - centraliza títulos, colores y cursos usados por `CourseSection`

#### `lib/utils.ts`

- Sencillo: función auxiliar para juntar clases CSS.
- Técnico:
  - usa `clsx` + `tailwind-merge`
  - exporta `cn()`

### Carpeta `public/`

#### `public/images/`

- Sencillo: imágenes principales del sitio.
- Técnico:
  - backgrounds
  - fotos de secciones
  - ilustraciones
  - logos
  - assets para ODS
  - material visual de clientes, aliados y colaboraciones

#### `public/icons/`

- Sencillo: iconos usados en algunas categorías.
- Técnico: recursos rasterizados usados sobre todo en la página de proyectos.

#### Otros archivos de `public/`

- Sencillo: placeholders, iconos de app y logos de apoyo.
- Técnico: recursos de fallback o branding general.

### Carpeta `styles/`

#### `styles/globals.css`

- Sencillo: hoja de estilos global heredada.
- Técnico:
  - contiene variables y reglas similares a `app/globals.css`
  - actualmente no es la hoja principal importada por `layout.tsx`

## Flujo de datos y renderizado

### Explicado de forma sencilla

La web no consulta datos externos. Casi todo ya viene escrito dentro del código.

### Explicado de forma técnica

El flujo es mayormente estático:

1. La ruta de Next.js renderiza su `page.tsx`.
2. La página importa componentes locales.
3. Los componentes leen arrays y objetos definidos en el mismo archivo o en `lib/`.
4. Las imágenes se sirven desde `public/`.
5. La interacción se maneja con estado local de React.

No hay:

- API routes
- fetch a CMS
- autenticación
- persistencia en base de datos

## Estilos, imágenes y UI

### Explicado de forma sencilla

El sitio depende mucho del diseño visual: fondos, imágenes, gradientes, tarjetas, modales y animaciones.

### Explicado de forma técnica

- Tailwind se usa para layout, spacing, tipografía y responsive design.
- Hay estilos inline para gradientes, sombras y colores específicos de branding.
- `next/image` se usa en la mayoría de imágenes.
- En `next.config.mjs`, las imágenes están con `unoptimized: true`.
- La página de certificación usa `three` y shaders para un fondo animado avanzado.

## Decisiones técnicas actuales

Estas decisiones ayudan a entender el estado real del proyecto:

- El contenido es principalmente estático y vive dentro de componentes.
- Hay varias páginas marcadas como `"use client"` aunque podrían tener secciones más estáticas.
- El build ignora errores de ESLint y TypeScript en `next.config.mjs`.
- Hay un archivo de estilos duplicado o heredado en `styles/globals.css`.
- Los footers están repetidos manualmente en varias páginas en lugar de centralizarse en un componente.
- El proyecto se instala correctamente con `pnpm`; no debe documentarse con `npm`.


## Comandos más usados

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Troubleshooting rápido

### `npm install` falla

Usa `pnpm install`. Este repositorio está preparado para `pnpm` y cuenta con `pnpm-lock.yaml`.

### `pnpm dev` se queda en `Compiling / ...`

Verifica que estés usando `Node 22`:

```bash
nvm use
node -v
```

Si sigue raro, limpia el entorno local y reinstala:

```bash
rm -rf .next node_modules
pnpm install
pnpm dev
```

### La web no abre

Verifica que estés corriendo:

```bash
nvm use
pnpm dev
```

y entra a:

```bash
http://localhost:3000
```

### Hay cambios visuales pero no se reflejan

- reinicia `pnpm dev`
- limpia caché de `.next/` si hace falta
- confirma que la imagen o asset sí existe en `public/`

## Licencia y uso

Código y contenido pertenecen al proyecto institucional de **CIDTES Energía y Sustentabilidad**, salvo que se indique lo contrario en recursos o dependencias externas.
