/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8dfff',
          300: '#7cc2ff',
          400: '#3b9eff',
          500: '#0a7aff',
          600: '#0066e6',
          700: '#0052cc',
          800: '#003d99',
          900: '#002966',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        ink: '#171717',
        slate: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      boxShadow: {
        soft: '0 20px 50px -25px rgba(17, 24, 39, 0.35)',
        card: '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
        subtle: '0 1px 3px rgba(0, 0, 0, 0.05)',
        pricing:
          '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
        'pricing-hover':
          '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 8px 16px -8px rgba(0, 0, 0, 0.08)',
        'pricing-popular':
          '0 12px 28px -8px rgba(10, 122, 255, 0.2), 0 4px 12px -4px rgba(0, 0, 0, 0.06)',
        'pricing-popular-hover':
          '0 24px 48px -12px rgba(10, 122, 255, 0.25), 0 12px 24px -8px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(191,219,254,0.2), transparent 40%)',
        'organic-shapes':
          'radial-gradient(ellipse at top left, rgba(191,219,254,0.3) 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(191,219,254,0.25) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
