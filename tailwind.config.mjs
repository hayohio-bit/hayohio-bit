/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ds-bg-0': 'var(--bg-0)',
        'ds-bg-1': 'var(--bg-1)',
        'ds-bg-2': 'var(--bg-2)',
        'ds-bg-3': 'var(--bg-3)',
        'ds-fg-1': 'var(--fg-1)',
        'ds-fg-2': 'var(--fg-2)',
        'ds-fg-3': 'var(--fg-3)',
        'ds-fg-4': 'var(--fg-4)',
        'ds-fg-5': 'var(--fg-5)',
        'ds-accent': 'var(--accent)',
        'ds-accent-soft': 'var(--accent-soft)',
        'ds-accent-line': 'var(--accent-line)',
        'ds-accent-text': 'var(--accent-text)',
        'ds-accent-on': 'var(--accent-on)',
        'ds-border-1': 'var(--border-1)',
        'ds-border-2': 'var(--border-2)',
        'ds-border-3': 'var(--border-3)',
        'ds-tint-1': 'var(--tint-1)',
        'ds-tint-2': 'var(--tint-2)',
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'sm': 'var(--r-sm)',
        'md': 'var(--r-md)',
        'lg': 'var(--r-lg)',
        'xl': 'var(--r-xl)',
      },
    },
  },
  plugins: [],
}
