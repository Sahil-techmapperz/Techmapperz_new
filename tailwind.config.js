/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-[#10141d]',
    'from-[#7b61ff]',
    'to-[#e23e57]',
    'bg-[#05d7de]/10',
    'bg-[#2d5689]/10',
    'shadow-[#e23e57]/20'
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens mapped to CSS variables
        'brand-navy': 'var(--color-brand-navy)',
        'brand-navy-dark': 'var(--color-brand-navy-dark)',
        'brand-navy-light': 'var(--color-brand-navy-light)',
        'brand-navy-hover': 'var(--color-brand-navy-hover)',
        'brand-navy-alt': 'var(--color-brand-navy-alt)',
        'brand-green': 'var(--color-brand-green)',
        'brand-green-hover': 'var(--color-brand-green-hover)',
        'brand-green-light': 'var(--color-brand-green-light)',
        'brand-blue': 'var(--color-brand-blue)',
        'brand-blue-hover': 'var(--color-brand-blue-hover)',
        'brand-blue-alt': 'var(--color-brand-blue-alt)',
        'brand-blue-light': 'var(--color-brand-blue-light)',
        'brand-blue-sky': 'var(--color-brand-blue-sky)',
        'brand-teal': 'var(--color-brand-teal)',
        'brand-teal-light': 'var(--color-brand-teal-light)',
        'brand-teal-bg': 'var(--color-brand-teal-bg)',
        'brand-teal-tint': 'var(--color-brand-teal-bg)',
        'brand-red': 'var(--color-brand-red)',
        'brand-red-hover': 'var(--color-brand-red-hover)',
        'brand-red-vibrant': 'var(--color-brand-red-vibrant)',
        'brand-red-light': 'var(--color-brand-red-light)',
        'accent-cyan': 'var(--color-accent-cyan)',
        'accent-teal': 'var(--color-accent-teal)',
        'accent-amber': 'var(--color-accent-amber)',
        'accent-slate': 'var(--color-accent-slate)',

        // Backwards compatibility for existing components
        'theme-bg': 'var(--color-bg-primary)',
        'theme-alt': 'var(--color-bg-alt)',
        'theme-dark': 'var(--color-brand-navy-alt)',
        'theme-blue': 'var(--color-brand-blue-alt)',
        'theme-teal': 'var(--color-accent-teal)',
        'theme-text': 'var(--color-text-dark)',
        'theme-text-sec': 'var(--color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'IBM Plex Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['var(--font-primary)', 'IBM Plex Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero-h1': ['clamp(32px, 3.8vw, 56px)', { lineHeight: '1.2', fontWeight: '700' }],
        'section-h2': ['clamp(26px, 2.8vw, 40px)', { lineHeight: '1.2', fontWeight: '700' }],
        'card-h3': ['clamp(18px, 1.8vw, 20px)', { lineHeight: '1.25', fontWeight: '700' }],
        'intro-p': ['clamp(16px, 1.6vw, 18px)', { lineHeight: '1.65', fontWeight: '400' }],
        'body-p': ['clamp(15px, 1.5vw, 16px)', { lineHeight: '1.65', fontWeight: '400' }],
        'section-label': ['clamp(12px, 1.2vw, 13px)', { lineHeight: '1.2', fontWeight: '700' }],
        'nav-item': ['clamp(15px, 1.5vw, 16px)', { lineHeight: '1.2', fontWeight: '600' }],
        'btn-text': ['clamp(15px, 1.5vw, 16px)', { lineHeight: '1.2', fontWeight: '700' }],
        'footer-text': ['clamp(14px, 1.4vw, 15px)', { lineHeight: '1.6', fontWeight: '400' }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'primary-gradient': 'var(--gradient-brand)',
        'brand-gradient': 'var(--gradient-brand)',
        'footer-gradient': 'var(--gradient-footer)',
        'contact-gradient': 'var(--gradient-contact)',
        'tech-gradient': 'var(--gradient-tech)',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(120px, 1fr))',
      },
      animation: {
        gradient: 'gradient 8s linear ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-image': 'var(--gradient-brand)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block'
        },
        '.btn-gradient': {
          'background-image': 'var(--gradient-brand)',
          'color': 'white',
          'position': 'relative',
          'overflow': 'hidden',
          'z-index': '1'
        },
        '.btn-gradient-hover': {
          'background-image': 'var(--gradient-brand)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'color': 'transparent'
        }
      }
      addUtilities(newUtilities, ['hover', 'responsive']);
    }
  ],
};
