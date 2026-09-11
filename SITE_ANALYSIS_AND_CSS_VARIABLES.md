# Techmapperz Website: Full Codebase Analysis, Design Audit & CSS Variables Design System

> **Project:** Techmapperz (`techmapperz-nextjs16`)  
> **Framework:** Next.js 16.1.6 (App Router) + React 19 + Tailwind CSS 4.3.0  
> **Analysis Date:** September 2026  
> **File Scope:** Complete analysis of all components, pages, CSS stylesheets, modules, configuration, fonts, colors, and design tokens.

---

## Table of Contents

1. [Executive Summary & Technology Stack](#1-executive-summary--technology-stack)
2. [Site Structure & Route Map](#2-site-structure--route-map)
3. [Deep Font Audit & Typography Analysis](#3-deep-font-audit--typography-analysis)
4. [Comprehensive Color Audit & Hex Analysis](#4-comprehensive-color-audit--hex-analysis)
5. [Key Styling Inconsistencies & Recommendations](#5-key-styling-inconsistencies--recommendations)
6. [Complete CSS Variables Design System (`:root`)](#6-complete-css-variables-design-system-root)
7. [Tailwind CSS Integration (Tailwind v4 `@theme` & v3 `extend`)](#7-tailwind-css-integration-tailwind-v4-theme--v3-extend)
8. [Component Usage & Migration Examples](#8-component-usage--migration-examples)

---

## 1. Executive Summary & Technology Stack

### Core Technologies

| Technology | Version | Role in Codebase |
| :--- | :--- | :--- |
| **Next.js** | `^16.0.0` (16.1.6) | Fullstack React framework using App Router (`app/` directory), Turbopack engine |
| **React** | `^19.0.0` | Frontend UI library with Server Components & Client Components (`'use client'`) |
| **Tailwind CSS** | `^4.3.0` | Utility-first CSS framework via `@tailwindcss/postcss` and `@import "tailwindcss"` |
| **Lucide React** | `^0.553.0` | Primary modern SVG icon set (Layers, Crosshair, Cloud, Laptop, Menu, ChevronDown, etc.) |
| **React Icons** | `^5.2.1` | Secondary icon set (FaCircleRight, Social icons, etc.) |
| **Framer Motion** | `^11.3.19` | Smooth layout transitions, tab switching, and micro-animations |
| **Swiper** | `^12.2.0` | Touch-enabled mobile carousels and testimonial sliders |
| **Lenis** | `^1.3.17` | Smooth scrolling library with custom integration in `globals.css` |
| **Mongoose** | `^6.8.0` | MongoDB ODM for blogs, banners, testimonials, contacts, and job applications |

### Styling Architecture Breakdown

The site currently utilizes a **hybrid styling architecture** comprising four distinct layers:

1. **Global CSS (`app/globals.css`)**: Defines Tailwind v4 directives (`@import "tailwindcss"; @config "../tailwind.config.js";`), Lenis smooth scrolling rules, accessibility skip-links, print styles, and dark case study layout classes (`.case-section`, `.case-card`, etc.).
2. **Tailwind Utility Classes**: Applied inline throughout React components (`text-[#0c2e60]`, `bg-[#6ac045]`, `rounded-2xl`, etc.).
3. **Scoped CSS Files (`.css`)**: Large monolithic CSS files loaded per route (`about.css`, `career.css`, `contact.css`, `it-service.css`, `projects.css`, `case-study-template.css`). Each wraps its page in a top-level container (`.about-page-wrapper`, `.career-page-wrapper`, `.contact-page-wrapper`, `.it-service-page`, `.projects-page-wrapper`, `.tm-case-study`) and declares scoped CSS variables (`--navy`, `--blue`, `--teal`, `--red`, `--ink`, etc.).
4. **CSS Modules (`*.module.css`)**: Used for isolated component styling (`HomeCarousel.module.css`, `Navbar.module.css`, `Services.module.css`, `TechStack.module.css`, `LatestTechStack.module.css`, `CompanyValues.module.css`, `choose.module.css`).

---

## 2. Site Structure & Route Map

The site contains **57 distinct routes** mapped in the App Router:

### Public Pages
- **Home:** `/`
- **Company:** `/about`, `/career`, `/contact`, `/help`, `/privacy`, `/sitemap`, `/thankyou`
- **Core Industries:** `/industry`
- **Portfolio & Case Studies:** `/portfolios`, `/portfolios/[slug]`
- **Insights & Media:** `/blog`, `/blog/[id]`, `/events`
- **Team / Profile:** `/profile`, `/profile/[slug]`
- **Technology Stacks:** `/technology/[stack]`

### Core Services
- **Service Hub:** `/service`
- **GIS Services:**
  - `/service/gisservice` (Main GIS Hub)
  - `/service/gisservice/datadigitization`
  - `/service/gisservice/gismapping`
  - `/service/gisservice/gissurveying`
  - `/service/gisservice/gisconsulting`
  - `/service/gisservice/webgisdevelopment`
- **Drone Services:**
  - `/service/drone-survey-mapping`
  - `/service/drone-data-processing`
  - `/service/droneservice`
  - `/service/droneservice/dronesurveyandmapping`
  - `/service/droneservice/dronedataprocessing`
  - `/service/droneservice/inspectionandanalysis`
- **LiDAR Services:**
  - `/service/lidar`
- **IT & Digital Development:**
  - `/service/webdevelopment`
  - `/service/it/webdevelopment`
  - `/service/it/mobile-app-development`

### Admin Portal (`/admin`)
- Full authenticated admin panel with Dashboard, Blog Posts, Banner Manager, Portfolio Manager, Careers/Job Applications, Inquiries/Contacts, Newsletter, Testimonials, Comments, and Culture.

---

## 3. Deep Font Audit & Typography Analysis

A comprehensive scan across all files revealed that **multiple font systems** are coexisting, leading to font-stack fragmentation:

### 1. Fonts Declared in Code

| Font Family | Declaration Location | Weights / Config | Usage & Role |
| :--- | :--- | :--- | :--- |
| **IBM Plex Sans** | `app/layout.js` (`next/font/google`) | `400`, `500`, `600`, `700`<br>Var: `--font-ibm-plex-sans` | **Primary Site Body Font**. Hardcoded inline on `<body>` in `app/layout.js`: `style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}`. |
| **Poppins** | `app/layout.js` (`next/font/google`) | `400`, `600`, `700`<br>Var: `--font-poppins` | Loaded globally as CSS variable `--font-poppins`. Intended for headings and modern accents. |
| **Inter** | `about.css`, `career.css`, `contact.css`, `it-service.css`, `projects.css` | System fallback stack:<br>`Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Used as the explicit root font for all major marketing sub-pages (`.about-page-wrapper`, `.career-page-wrapper`, `.contact-page-wrapper`, etc.). |
| **System UI Stack** | `CriticalCSS.jsx`, `Industry_Expertise.js`, `Homecontact.js`, `SomeOfOurWork.js` | `fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'` | Hardcoded as inline `sansSerifStyle` JS objects across homepage sections to force clean OS-native typography. |
| **Montserrat** | `app/globals.css` | `@font-face { font-family: 'Montserrat'; font-display: swap; }` | Declared in CSS `@font-face` for backwards compatibility with earlier template revisions. |
| **GT Sectra Fine** | `tailwind.config.js` | `fontFamily: { sans: ['"GT Sectra Fine"', 'Palatino', 'serif'] }` | **Configuration Conflict**: Tailwind defines `sans` as a serif font (*GT Sectra Fine / Palatino*), but it is almost everywhere overridden by body inline styles or CSS wrapper classes. |
| **Georgia** | Blog & Articles (`SinglePost.js`) | `'Georgia', serif` | Used for long-form blog article reading readability (18px, line-height 1.8). |
| **Monospace** | Admin Editor, Code blocks | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` | Used in the block editor, code snippets, and technical coordinate displays. |

### 2. Typographic Scale Breakdown

| Element | Typical Sizes | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `clamp(42px, 5vw, 72px)` / `text-3xl sm:text-5xl lg:text-[60px]` | Bold (`700` - `800`) | `1.12` - `1.18` | `-0.045em` to `-0.05em` |
| **Section H2** | `clamp(31px, 3.5vw, 48px)` / `text-2xl sm:text-3xl md:text-4xl` | Bold (`700`) | `1.20` - `1.25` | `-0.035em` |
| **Subhead H3** | `21px` - `24px` / `text-xl md:text-2xl` | Bold / Extrabold (`700` - `800`) | `1.30` | `-0.018em` |
| **Card H4** | `17px` - `19px` / `text-base sm:text-lg` | Bold (`700`) | `1.35` | Normal |
| **Eyebrows / Badges** | `11px` - `13px` | Bold (`700` - `900`) | `1.0` | `+0.15em` to `+0.20em` (Uppercase) |
| **Lead Paragraph** | `17px` - `20px` | Regular / Medium (`400` - `500`) | `1.65` - `1.75` | Normal |
| **Body Text** | `14px` - `16px` | Regular (`400`) | `1.60` - `1.70` | Normal |
| **Caption / Meta** | `11px` - `13px` | Medium / Semi-bold (`500` - `600`) | `1.40` | `+0.05em` |
| **Buttons / CTA** | `13px` - `15px` | Semi-bold / Bold (`600` - `850`) | `1.0` | Normal / `+0.05em` |

---

## 4. Comprehensive Color Audit & Hex Analysis

Based on our static analysis scanning over **2,000+ color occurrences** across the entire codebase, here are the exact color roles and frequencies:

### Top Recurring Brand Colors

```
Color Frequency Ranking:
 1. #0C2E60 (307 occurrences) ─── Primary Brand Navy
 2. #6AC045 (224 occurrences) ─── Primary GIS Green Accent
 3. #1656B8 (115 occurrences) ─── Primary Action Blue
 4. #D2292B (107 occurrences) ─── Primary Crimson Red
 5. #05D7DE ( 87 occurrences) ─── Tech Cyan / Neon Accent
 6. #1267B1 ( 84 occurrences) ─── Scoped CSS Primary Blue
 7. #376BAB ( 61 occurrences) ─── Gradient Slate Blue
 8. #078A86 ( 50 occurrences) ─── Deep Teal / Pine Accent
 9. #2D5689 ( 48 occurrences) ─── Slate Navy Secondary
10. #E33434 ( 37 occurrences) ─── Scoped CSS Red Accent
11. #0B2341 ( 32 occurrences) ─── Scoped CSS Midnight Navy
12. #3B82F6 ( 32 occurrences) ─── Tailwind Active Blue
```

---

### Detailed Color Palettes by Functional Role

#### 1. Primary Navy Palette (Brand Authority & Depth)

| Hex Code | Frequency | Primary Usage Across Site |
| :--- | :--- | :--- |
| **`#0c2e60`** | **307** | **The dominant Techmapperz Navy**. Used for all main section titles, navbar link text, button backgrounds, active states, and dark section containers (`Industry_Expertise.js`). |
| **`#0b2341`** | **32** | Dark Midnight Navy. Declared as `--navy` in `about.css`, `career.css`, `contact.css`, `it-service.css`, and `'theme-dark'` in Tailwind. Used for the Contact banner background. |
| **`#0a1f40`** | **9** | Deepest Navy. Used as the starting anchor for the Footer gradient and `--navy-dark` in case studies. |
| **`#04203a` / `#030f1e`** | **11** | Near-black Navy. Background for GIS service intro sections and dark portfolio hero blocks. |
| **`#082046`** | **13** | Hover state for `#0c2e60` buttons. |
| **`#10366f` / `#13375f`** | **15** | Medium dark navy active card/tab background. |

#### 2. Primary GIS Green Palette (The Geospatial Signature)

| Hex Code | Frequency | Primary Usage Across Site |
| :--- | :--- | :--- |
| **`#6ac045`** | **224** | **The signature Techmapperz GIS Green**. Used for uppercase category tags ("OUR SERVICES", "INDUSTRIES WE SUPPORT", "WHY TECHMAPPERZ"), active badges, border accents, and primary action buttons in dark sections. |
| **`#5aad38` / `#5bb038`** | **22** | Hover state for `#6ac045` buttons. |
| **`#e8f5e5` / `#f0f9ee`** | **6** | Subtle light green badge background tints. |

#### 3. Primary Blue Palette (Action, Links & Interactive Elements)

| Hex Code | Frequency | Primary Usage Across Site |
| :--- | :--- | :--- |
| **`#1656b8`** | **115** | **Primary Interactive Blue**. Used for Hero CTA buttons ("Explore Our Services"), feature card icons, read more arrows, focus rings, and active links. |
| **`#1267b1`** | **84** | Declared as `--blue` across `about.css`, `career.css`, `contact.css`, `it-service.css`, `projects.css`, and `'theme-blue'` in Tailwind config. |
| **`#124699` / `#10408f`** | **8** | Hover state for `#1656b8` buttons and links. |
| **`#2e82d2` / `#3388d1`** | **12** | `--blue2` lighter blue used in CSS charts and mini bars. |
| **`#376bab`** | **61** | Slate Blue used in gradient backgrounds (`linear-gradient(to right, #376bab 60%, #d2292b)`). |
| **`#3b82f6`** | **32** | Standard Tailwind Blue. Used for active tab underline indicator and ambient lighting blobs. |
| **`#00b0fe`** | **20** | Sky Blue. Registered as the official browser `theme-color` in HTML metadata (`app/layout.js`). |

#### 4. Brand Red Palette (Attention, Accents & Logo Match)

| Hex Code | Frequency | Primary Usage Across Site |
| :--- | :--- | :--- |
| **`#d2292b`** | **107** | **Brand Red**. Matches the red in the Techmapperz logo. Used for the active underline in the desktop navbar, "Discuss Your Project" quote button, and primary gradient stop. |
| **`#e33434`** | **37** | Vibrant Red. Declared as `--red` across all scoped CSS files (`about.css`, etc.), footer hover dots, and Contact page CTA. |
| **`#dc2626`** | **7** | Tailwind Red-600. Used in case study primary buttons. |
| **`#b01e20` / `#c92828` / `#c92b2b`** | **20** | Darker red hover states for red CTA buttons. |
| **`#a82123`** | **29** | Deep dark red used in gradient transitions. |

#### 5. Specialized Technology Accents

| Hex Code | Frequency | Primary Usage Across Site |
| :--- | :--- | :--- |
| **`#05d7de`** | **87** | **Vibrant Cyan / Neon Aqua**. Used in Tech Stack components (`TechStack.js`, `LatestTechStack.js`, `WebsiteIntroduction.js`) for modern tech highlights and glowing borders. |
| **`#078a86`** | **50** | **Deep Teal / Forest Teal**. Declared as `--teal` in scoped CSS files, Tailwind `'theme-teal'`, and used in `SomeOfOurWork.js` card borders and badges. |
| **`#2d5689`** | **48** | Mid-tone Slate Navy. The gradient partner for `#05d7de`. |
| **`#efb548`** | **7** | Amber Gold. Used for the middle dot in macOS-style window mockups. |

#### 6. Neutral, Background & Surface Palette

| Hex Code | Frequency | Primary Usage Across Site |
| :--- | :--- | :--- |
| **`#ffffff` / `#fff`** | **212** | Pure White. Card backgrounds, navbar, main page background. |
| **`#f4f7fa`** | **13** | Soft Mist / Off-White (`--mist`, `--surface`, `'theme-alt'`). Section alternating background. |
| **`#f8fafc` / `#f7fafc`** | **55** | Clean slate light surface. Used in card hover states, table rows, and hero gradient bases. |
| **`#edf5fb` / `#eef5fb`** | **10** | Soft Ice Blue (`--soft`, `--soft-blue`). Icon containers and pill badges. |
| **`#dbe5ee` / `#dce5ee`** | **9** | Line Border (`--line`). Card borders, dividers, subtle table borders. |
| **`#e2e8f0`** | **57** | Slate-200. General divider and input border color. |
| **`#17202a`** | **14** | Deep Ink (`--ink`, `'theme-text'`). Highest contrast body text and title color. |
| **`#506176` / `#5a6673` / `#5d6d7c`** | **35** | Slate Muted Text (`--muted`, `'theme-text-sec'`). Secondary descriptions and captions. |
| **`#a8c4e8`** | **8** | Soft Powder Blue. Footer muted links on dark navy background. |

---

### Key Gradients Identified

1. **Brand Primary Gradient:**  
   `linear-gradient(to right, #376bab 60%, #d2292b)`
2. **Footer Dark Gradient:**  
   `linear-gradient(160deg, #0a1f40 0%, #0c2e60 50%, #0d3875 100%)`
3. **Contact Banner Gradient:**  
   `linear-gradient(to bottom right, #0b2341, #10477b, #0b6b69)`
4. **Hero Dark Overlay:**  
   `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.60), rgba(0,0,0,0.35))`
5. **Tech Neon Gradient:**  
   `linear-gradient(to right, #05d7de, #2d5689)`
6. **Case Study Glow:**  
   `radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.16), transparent 32%), radial-gradient(circle at 92% 88%, rgba(37, 99, 235, 0.15), transparent 34%), #050505`
7. **Hero Ambient Glow:**  
   `radial-gradient(circle at 8% 18%, rgba(18,103,177,0.11), transparent 28%), radial-gradient(circle at 91% 20%, rgba(7,138,134,0.105), transparent 28%), linear-gradient(180deg, #fff 0%, #f7fafc 100%)`

---

## 5. Key Styling Inconsistencies & Recommendations

### 1. The "Three Navies" Divergence
- **Current State:** Components alternate between `#0c2e60` (307x) and `#0b2341` (32x) and `#0a1f40` (9x).
- **Recommendation:** Standardize `#0c2e60` as `--color-brand-navy` (primary), `#0a1f40` as `--color-brand-navy-dark` (footer/deep surfaces), and `#0b2341` as `--color-brand-navy-alt`.

### 2. The "Dual Red" Divergence
- **Current State:** The navbar and Tailwind banner use `#d2292b` (logo match), while `about.css`, `career.css`, and `contact.css` use `#e33434`.
- **Recommendation:** Standardize `#d2292b` as `--color-brand-red` (primary brand crimson), and keep `#e33434` as `--color-brand-red-vibrant` for small highlights and notification badges.

### 3. The "Dual Blue" Divergence
- **Current State:** Modern homepage components use `#1656b8` (115x), while scoped CSS files use `#1267b1` (84x).
- **Recommendation:** Standardize `#1656b8` as `--color-brand-blue` (primary action), with hover `#10408f`.

### 4. Font Configuration Discrepancy
- **Current State:** `tailwind.config.js` sets `fontFamily.sans` to `['"GT Sectra Fine"', 'Palatino', 'serif']`, but `layout.js` sets `IBM Plex Sans` on `<body>`, and sub-pages declare `Inter`.
- **Recommendation:** Update `tailwind.config.js` and `globals.css` to map `font-sans` directly to `var(--font-ibm-plex-sans), 'Inter', sans-serif`.

---

## 6. Complete CSS Variables Design System (`:root`)

Here is the consolidated, production-ready CSS variable token system designed for Techmapperz. Add this block to your main stylesheet (e.g. `app/globals.css`):

```css
/* ==========================================================================
   TECHMAPPERZ UNIFIED DESIGN TOKENS & CSS VARIABLES
   ========================================================================== */

:root {
  /* ── 1. BRAND COLORS (CORE IDENTITY) ── */
  --color-brand-navy: #0c2e60;            /* Primary Corporate Navy (307x) */
  --color-brand-navy-dark: #0a1f40;       /* Deep Midnight Navy (Footer Base) */
  --color-brand-navy-light: #10366f;      /* Active Navy (Tabs, Card Hover) */
  --color-brand-navy-hover: #082046;      /* Button Hover State */
  --color-brand-navy-alt: #0b2341;        /* Dark Surface Navy (Scoped CSS) */
  
  --color-brand-green: #6ac045;           /* Primary GIS Green Accent (224x) */
  --color-brand-green-hover: #5bb038;     /* Green Hover State */
  --color-brand-green-light: #f0f9ee;     /* Light Green Badge Background */
  --color-brand-green-border: rgba(106, 192, 69, 0.3);

  --color-brand-blue: #1656b8;            /* Primary Action & Interactive Blue (115x) */
  --color-brand-blue-hover: #10408f;      /* Blue Button Hover */
  --color-brand-blue-alt: #1267b1;        /* Scoped CSS Navy-Blue (84x) */
  --color-brand-blue-light: #edf5fb;      /* Ice Blue Surface / Icon Background */
  --color-brand-blue-sky: #00b0fe;        /* Theme Meta / Sky Accent */

  --color-brand-red: #d2292b;             /* Brand Logo Crimson Red (107x) */
  --color-brand-red-hover: #b01e20;       /* Crimson Hover State */
  --color-brand-red-vibrant: #e33434;     /* Vibrant Red Accent (37x) */
  --color-brand-red-light: #fff1f1;       /* Light Red Tint */

  /* ── 2. SPECIALIZED & TECH ACCENTS ── */
  --color-accent-cyan: #05d7de;           /* Neon Cyan (Tech Stack & Highlights) */
  --color-accent-teal: #078a86;           /* Deep Geospatial Teal (SomeOfOurWork) */
  --color-accent-amber: #efb548;          /* Notice & Window Dot Amber */
  --color-accent-slate: #2d5689;          /* Slate Navy Gradient Secondary */

  /* ── 3. NEUTRALS & SURFACES ── */
  --color-bg-primary: #ffffff;            /* Main Page Background */
  --color-bg-alt: #f4f7fa;                /* Subtle Alternate Section Background */
  --color-bg-card: #ffffff;               /* Standard Card Surface */
  --color-bg-card-hover: #f8fafc;         /* Card Hover Surface */
  --color-bg-soft: #edf5fb;               /* Soft Blue Surface */

  /* ── 4. BORDERS & DIVIDERS ── */
  --color-border-subtle: #dbe5ee;         /* Primary Card & Section Border */
  --color-border-light: #e2e8f0;          /* Subtle Divider Line */
  --color-border-white-10: rgba(255, 255, 255, 0.10); /* Border on Dark */
  --color-border-white-20: rgba(255, 255, 255, 0.20); /* Border on Dark Highlight */

  /* ── 5. TYPOGRAPHY & TEXT ── */
  --color-text-title: #0c2e60;            /* Primary Heading Color */
  --color-text-dark: #17202a;             /* Ink High-Contrast Body Text */
  --color-text-body: #374151;             /* Standard Body Gray */
  --color-text-muted: #5d6d7c;            /* Secondary / Muted Description Gray */
  --color-text-light: #6b7988;            /* Breadcrumbs & Captions */
  --color-text-white: #ffffff;            /* White Text on Dark */
  --color-text-white-muted: #a8c4e8;      /* Footer Links & Dark Descriptions */

  /* ── 6. FONT FAMILIES ── */
  --font-primary: var(--font-ibm-plex-sans), 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-heading: var(--font-poppins), 'Poppins', var(--font-primary);
  --font-editorial: 'Georgia', serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* ── 7. SHADOWS & ELEVATION ── */
  --shadow-sm: 0 2px 4px rgba(12, 46, 96, 0.04);
  --shadow-md: 0 8px 20px rgba(12, 46, 96, 0.08);
  --shadow-lg: 0 14px 32px rgba(12, 46, 96, 0.12);
  --shadow-xl: 0 22px 54px rgba(11, 35, 65, 0.12);
  --shadow-red: 0 14px 28px rgba(210, 41, 43, 0.22);
  --shadow-blue: 0 14px 28px rgba(22, 86, 184, 0.22);
  --shadow-green: 0 14px 28px rgba(106, 192, 69, 0.22);

  /* ── 8. BORDER RADII ── */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-xl: 22px;
  --radius-2xl: 28px;
  --radius-pill: 9999px;

  /* ── 9. GRADIENTS ── */
  --gradient-brand: linear-gradient(90deg, #376bab 60%, #d2292b 100%);
  --gradient-footer: linear-gradient(160deg, #0a1f40 0%, #0c2e60 50%, #0d3875 100%);
  --gradient-contact: linear-gradient(135deg, #0b2341 0%, #10477b 50%, #0b6b69 100%);
  --gradient-tech: linear-gradient(90deg, #05d7de 0%, #2d5689 100%);
  --gradient-red-btn: linear-gradient(135deg, #e33434 0%, #c22020 100%);
  --gradient-dark-overlay: linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.35) 100%);

  /* ── 10. LAYOUT & SIZING ── */
  --max-width-content: 1600px;
  --max-width-text: 1180px;
  --transition-smooth: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 7. Tailwind CSS Integration

### Option A: Modern Tailwind v4 (`app/globals.css`)

Since your project uses Tailwind CSS v4 (`@import "tailwindcss"`), you can declare design tokens directly using `@theme`:

```css
@import "tailwindcss";
@config "../tailwind.config.js";

@theme {
  /* Colors */
  --color-brand-navy: var(--color-brand-navy);
  --color-brand-navy-dark: var(--color-brand-navy-dark);
  --color-brand-green: var(--color-brand-green);
  --color-brand-blue: var(--color-brand-blue);
  --color-brand-red: var(--color-brand-red);
  --color-accent-cyan: var(--color-accent-cyan);
  --color-accent-teal: var(--color-accent-teal);
  
  --color-bg-alt: var(--color-bg-alt);
  --color-border-subtle: var(--color-border-subtle);
  
  /* Fonts */
  --font-sans: var(--font-primary);
  --font-heading: var(--font-heading);
}
```

### Option B: Tailwind JavaScript Config (`tailwind.config.js`)

You can extend `tailwind.config.js` to reference the CSS variables:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: 'var(--color-brand-navy)',
          'navy-dark': 'var(--color-brand-navy-dark)',
          'navy-light': 'var(--color-brand-navy-light)',
          green: 'var(--color-brand-green)',
          'green-hover': 'var(--color-brand-green-hover)',
          blue: 'var(--color-brand-blue)',
          'blue-hover': 'var(--color-brand-blue-hover)',
          red: 'var(--color-brand-red)',
          'red-hover': 'var(--color-brand-red-hover)',
          cyan: 'var(--color-accent-cyan)',
          teal: 'var(--color-accent-teal)',
        },
        surface: {
          alt: 'var(--color-bg-alt)',
          card: 'var(--color-bg-card)',
          soft: 'var(--color-bg-soft)',
        },
        stroke: {
          subtle: 'var(--color-border-subtle)',
          light: 'var(--color-border-light)',
        }
      },
      fontFamily: {
        sans: ['var(--font-primary)'],
        heading: ['var(--font-heading)'],
      },
      backgroundImage: {
        'brand-gradient': 'var(--gradient-brand)',
        'footer-gradient': 'var(--gradient-footer)',
        'contact-gradient': 'var(--gradient-contact)',
        'tech-gradient': 'var(--gradient-tech)',
      }
    },
  },
};
```

---

## 8. Component Usage & Migration Examples

### 1. Section Headers & Eyebrows
```jsx
// Before (Hardcoded):
<span className="text-[#6ac045] text-xs font-bold uppercase tracking-[0.15em] mb-2">
  OUR SERVICES
</span>
<h2 className="text-3xl font-bold text-[#0c2e60] mb-4">
  Geospatial and Digital Services
</h2>

// After (Using CSS Variables / Tailwind Tokens):
<span className="text-[var(--color-brand-green)] text-xs font-bold uppercase tracking-[0.15em] mb-2">
  OUR SERVICES
</span>
<h2 className="text-3xl font-bold text-[var(--color-brand-navy)] mb-4">
  Geospatial and Digital Services
</h2>
```

### 2. Primary Buttons
```jsx
// Primary Blue Button (Explore Services):
<Link 
  href="/service"
  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-hover)] text-white font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5"
>
  Explore Our Services
</Link>

// Primary Red Button (Discuss Project):
<button 
  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--color-brand-red)] hover:bg-[var(--color-brand-red-hover)] text-white font-bold text-sm shadow-[var(--shadow-red)] transition-all hover:-translate-y-0.5"
>
  Discuss Your Project
</button>

// Dark Section Green Button (Industries):
<Link 
  href="/industry"
  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-hover)] text-[#1a1a1a] font-bold text-sm transition-all shadow-md hover:-translate-y-0.5"
>
  Explore All Industries →
</Link>
```

### 3. Cards & Surfaces
```jsx
<div className="bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all">
  <div className="w-12 h-12 rounded-full bg-[var(--color-bg-soft)] text-[var(--color-brand-blue)] flex items-center justify-center mb-4">
    <Layers className="w-6 h-6" />
  </div>
  <h3 className="text-[var(--color-brand-navy)] text-lg font-bold mb-2">
    GIS Services
  </h3>
  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
    Structured GIS & CAD data for infrastructure, utilities, and mining.
  </p>
</div>
```

---

## 9. Next Steps & Summary Checklist

- [x] **Full codebase analyzed:** Scanned all pages, components, CSS files, configuration, and dependencies.
- [x] **Fonts cataloged:** Identified `IBM Plex Sans`, `Poppins`, `Inter`, system fallback stacks, and conflicting Tailwind serif definitions.
- [x] **Colors mapped:** Documented frequencies and semantic roles for 2,000+ occurrences across `#0c2e60` (Navy), `#6ac045` (Green), `#1656b8` (Blue), `#d2292b` (Red), `#05d7de` (Cyan), and neutral scales.
- [x] **Consolidated CSS variables created:** Prepared a unified, future-proof `:root` design token block with compatibility for Tailwind v4 and Tailwind v3.
- [x] **Documentation generated:** Saved as `SITE_ANALYSIS_AND_CSS_VARIABLES.md` in the project root.
