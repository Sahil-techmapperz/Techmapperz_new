# Techmapperz Brand & UI Style Guide

> **Official Design System & Front-End Guidelines**  
> Reference document for developers and designers building and maintaining pages across the Techmapperz website.

---

## 1. Brand Philosophy & Design System Overview

Techmapperz is a leading technical GIS, drone surveying, LiDAR data processing, and digital solutions company. The visual language must communicate:
- **Technical Rigour & Precision**: Clean grids, crisp geometric typography, subtle structured borders.
- **Enterprise Trust**: Dominant clean white and off-white space, anchored by authoritative Deep Navy.
- **Modern Geospatial Energy**: Vibrant Geospatial Teal and Action Blue accents, avoiding muddy or generic tones.

---

## 2. Colour Palette System

### Official Brand Colour Reference Table

| Role | Colour Name | Hex Code | Tailwind / CSS Class | Description & Primary Use |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Navy** | Deep Navy | `#0C2E60` | `bg-[#0C2E60]`, `text-[#0C2E60]` | Section headings (H2/H3), authoritative dark sections (15–20%), footer, button hover states. |
| **Primary Action** | Action Blue | `#1656B8` | `bg-[#1656B8]`, `text-[#1656B8]` | Primary buttons, active interactive links, key action icons. |
| **Supporting Accent** | Geospatial Teal | `#0F766E` | `text-[#0F766E]`, `bg-[#0F766E]` | Section eyebrows/labels on light backgrounds, technical icon badges, subtle borders. |
| **High-Contrast Teal** | Bright Teal | `#5EEAD4` | `text-[#5EEAD4]` | Eyebrows/labels on dark navy backgrounds, accordion expanders on navy. |
| **Light Teal Tint** | Teal Tint | `#E8F5F3` | `bg-[#E8F5F3]` | Checkmark icon badge backgrounds, highlight pill badges, pale section cards. |
| **Brand Accent** | Techmapperz Red | `#D2292B` | `bg-[#D2292B]`, `text-[#D2292B]` | **Strictly 3–5% maximum**. Used for logo accent, active nav indicator dot, or urgent conversion focus. |
| **Main Background** | Pure White | `#FFFFFF` | `bg-white` | Primary canvas for 65–70% of page content, feature cards, clean white space. |
| **Alternate Background** | Cool Off-white | `#F6F8FB` | `bg-[#F6F8FB]` | Alternating section background to create subtle visual separation between white sections. |
| **Main Text** | Charcoal | `#17202A` | `text-[#17202A]` | Root page text, high-contrast headings on white. |
| **Paragraph Text** | Slate Grey | `#4B5563` | `text-[#4B5563]` | Body copy, card descriptions, bullet lists on light backgrounds. |
| **Borders & Dividers** | Light Grey | `#DDE3EA` | `border-[#DDE3EA]` | Card outlines, section top borders, list dividers. |
| **Dark Section Text** | White / Ice Tint | `#FFFFFF` / `#E8F5F3` | `text-white`, `text-[#E8F5F3]` | Body text and descriptions inside dark Navy sections. |

---

## 3. Recommended Visual Proportions (The 60–30–10 Rule)

Every page must maintain harmonious colour distribution:

```
┌─────────────────────────────────────────────────────────────┐
│ White / Cool Off-white (65–70%)                             │
│ Primary content canvas, readable, spacious, modern          │
├───────────────────────────────┬─────────────────────────────┤
│ Deep Navy (15–20%)            │ Geospatial Teal (8–10%)     │
│ 1 major section or CTA banner │ Eyebrows, badges, accents   │
├───────────────────────────────┴─────────────────────────────┤
│ Action Blue: Primary Buttons & CTAs                         │
│ Techmapperz Red: 3–5% Max (Brand Logo & Micro-Accents)      │
└─────────────────────────────────────────────────────────────┘
```

- **White / Off-White (65–70%)**: Most content sections must sit on `#FFFFFF` or `#F6F8FB`. Avoid stacking multiple dark navy sections consecutively.
- **Deep Navy (15–20%)**: Limit full-width navy backgrounds to 1 or 2 high-impact sections per page (e.g., FAQ or Industry Expertise or CTA Card).
- **Geospatial Teal (8–10%)**: Used intentionally for section eyebrow tags, checkmark badges, and subtle gradient stops.
- **Action Blue**: The dedicated primary button and link colour across all pages.
- **Red (3–5% Max)**: Never use red as a full section background or large button unless specifically designated for critical conversion.

---

## 4. Typography Scale & Font Rules

### Font Family
- **Strictly IBM Plex Sans**:
  ```css
  font-family: var(--font-ibm-plex-sans), "IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  ```
- Do not use arbitrary system fonts, Inter, Roboto, or Poppins in place of IBM Plex Sans for core text.

### Standard Typography Hierarchy

| Element | Desktop Size | Mobile Size | Weight | Colour | Line Height | Tailwind Classes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero H1** | **54–56px** | **32–34px** | 700 (Bold) | White | 1.15–1.20 | `text-[32px] sm:text-[34px] md:text-[54px] lg:text-[56px] font-bold leading-[1.18] tracking-tight` |
| **Section H2** | **38–40px** | **26–28px** | 700 (Bold) | `#0C2E60` (or White) | 1.15–1.25 | `text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold leading-[1.2] tracking-tight text-[#0C2E60]` |
| **Card H3** | **19–20px** | **18px** | 700 (Bold) | `#0C2E60` (or White) | 1.20–1.25 | `text-[18px] md:text-[20px] font-bold leading-[1.25] text-[#0C2E60]` |
| **Intro Subtitle** | **18px** | **16px** | 400 (Regular) | `#4B5563` (or `#E8F5F3`) | 1.60–1.65 | `text-[16px] md:text-[18px] font-normal leading-[1.65] text-[#4B5563]` |
| **Standard Body** | **16px** | **15–16px** | 400 (Regular) | `#4B5563` (or `#E8F5F3`) | 1.60–1.65 | `text-[15px] sm:text-[16px] font-normal leading-[1.65] text-[#4B5563]` |
| **Section Label** | **13px** | **12px** | 700 (Bold) | Teal | 1.20 | `text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em]` |
| **Navigation** | **15–16px** | **15px** | 600 (Semibold) | `#0C2E60` | 1.20 | `text-[15px] sm:text-[16px] font-semibold text-[#0C2E60]` |
| **Button Text** | **15–16px** | **15px** | 700 (Bold) | White | 1.20 | `text-[15px] sm:text-[16px] font-bold text-white` |
| **Footer Text** | **14–15px** | **14px** | 400 (Regular) | `#A8C4E8` | 1.50 | `text-[14px] sm:text-[15px] font-normal text-[#A8C4E8]` |

---

## 5. UI Component Design Rules

### 5.1 Section Eyebrows / Labels
Always place an uppercase tracking label directly above the H2 heading:
- **On White / Light Backgrounds**:
  ```jsx
  <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
    CORE GEOSPATIAL SERVICES
  </span>
  ```
- **On Deep Navy Backgrounds**:
  ```jsx
  <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
    FREQUENTLY ASKED QUESTIONS
  </span>
  ```

### 5.2 Button System
Always maintain unified button styling across all pages:

1. **Primary Button (Action Blue)**:
   - Minimum height: **46–48px**
   - Background: `#1656B8`
   - Hover Background: `#0C2E60`
   - Font: `15–16px`, bold (700), text-white
   - Border radius: `rounded-full` or `rounded-xl`
   - Shadow: `shadow-md hover:shadow-lg`
   ```jsx
   <Link
     href="/contact"
     className="inline-flex items-center justify-center gap-2 bg-[#1656B8] hover:bg-[#0C2E60] text-white font-bold text-[15px] sm:text-[16px] px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg min-h-[46px] sm:min-h-[48px]"
   >
     Discuss Your Project &rarr;
   </Link>
   ```

2. **Secondary Button (Outlined / White)**:
   - Minimum height: **46–48px**
   - Background: `white`
   - Border: `border border-[#0C2E60]`
   - Text: `#0C2E60` font-bold
   - Hover: `bg-slate-50 hover:-translate-y-0.5`
   ```jsx
   <Link
     href="/contact"
     className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
   >
     Send Your Scope of Work
   </Link>
   ```

### 5.3 Circular Checkmark & Bullet Badges
Never use raw HTML entities like `&#10003;` or plain bullet dots. Always use the standardized rounded SVG checkmark:

- **On Light Backgrounds**:
  ```jsx
  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#E8F5F3] text-[#0F766E] border border-[#0F766E]/30">
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
  ```

- **On Dark Navy Backgrounds**:
  ```jsx
  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#0F766E]/40 text-[#5EEAD4] border border-[#5EEAD4]/40">
    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
  ```

### 5.4 Standard Section Structure & Spacing
- **Vertical Section Spacing**: Standardized across the website to `py-4 md:py-10`.
- **Max Width Container**: `max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12`.
- **Top Border**: `border-t border-[#DDE3EA]` (on light) or `border-t border-white/10` (on navy).

```jsx
<section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
    <div className="text-center mb-8 md:mb-10">
      <span className="text-[#0F766E] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-2 block">
        SECTION EYEBROW
      </span>
      <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-[#0C2E60] leading-[1.2] tracking-tight max-w-3xl mx-auto">
        Main Section Heading Title
      </h2>
      <p className="text-[#4B5563] text-[16px] md:text-[18px] font-normal leading-[1.65] max-w-2xl mx-auto mt-2.5">
        Introductory description clarifying the section deliverables or value proposition.
      </p>
    </div>
    {/* Section Content */}
  </div>
</section>
```

### 5.5 Final CTA Banner Card Pattern
Every major page should conclude with the standard high-conversion CTA card before the footer:

```jsx
<section className="relative py-4 md:py-10 bg-white border-t border-[#DDE3EA] overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
    <div className="bg-gradient-to-br from-[#0C2E60] via-[#0d4277] to-[#0F766E] rounded-2xl sm:rounded-[24px] p-6 sm:p-8 md:p-10 text-white relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 shadow-xl border border-white/10">
      {/* Subtle background circle graphic */}
      <div className="absolute right-[-80px] top-[-120px] w-[360px] h-[360px] border border-white/10 rounded-full shadow-[0_0_0_48px_rgba(255,255,255,0.05),0_0_0_96px_rgba(255,255,255,0.03)] pointer-events-none" />
      
      <div className="space-y-2.5 max-w-2xl relative z-10 text-left">
        <span className="text-[#5EEAD4] text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] block">
          LET'S DISCUSS YOUR REQUIREMENT
        </span>
        <h2 className="text-[26px] sm:text-[28px] md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
          Planning a Project with Us?
        </h2>
        <p className="text-[#E8F5F3] text-[15px] sm:text-[16px] leading-[1.65] font-normal">
          Share your project details, specifications and timeline. Our team will review your requirements and suggest an optimal workflow.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 sm:gap-3 relative z-10 shrink-0 w-full lg:w-auto self-stretch sm:self-start lg:self-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#1656B8] hover:bg-[#0C2E60] border border-white/20 shadow-sm hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
        >
          Discuss Your Project &rarr;
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 min-h-[46px] sm:min-h-[48px] rounded-xl font-bold text-[15px] sm:text-[16px] text-[#0C2E60] bg-white border border-[#0C2E60] hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 text-center whitespace-nowrap w-full sm:w-auto"
        >
          Send Your Scope of Work
        </Link>
      </div>
    </div>
  </div>
</section>
```

---

## 6. Pre-Deployment Checklist for Every Page

Before committing or pushing any page, verify:
- [ ] **Font Family**: IBM Plex Sans applied throughout (`var(--font-ibm-plex-sans)`).
- [ ] **Hero H1**: Desktop 54–56px, Mobile 32–34px, Weight 700, Line height 1.15–1.25.
- [ ] **Section H2**: Desktop 38–40px, Mobile 26–28px, Weight 700, `#0C2E60` on light, White on dark.
- [ ] **Card H3**: Desktop 19–20px, Mobile 18px, Weight 700, `#0C2E60`.
- [ ] **Body / Description**: 15–16px, Slate Grey `#4B5563` on light, line height 1.6–1.7.
- [ ] **Eyebrows**: `#0F766E` on light, `#5EEAD4` on dark, uppercase tracking-[0.15em].
- [ ] **Checkmarks**: Uniform rounded SVG checkmark with `#0F766E` / `#E8F5F3` or `#5EEAD4`.
- [ ] **Buttons**: Action Blue `#1656B8` hover Deep Navy `#0C2E60`, minimum height 46–48px.
- [ ] **Section Padding**: `py-4 md:py-10`.
- [ ] **Page Balance**: 65–70% White/Off-white, 15–20% Deep Navy, 8–10% Teal & Teal Tint, max 3–5% Red.
- [ ] **Zero Build Errors**: `npm run build` exits with code 0.
