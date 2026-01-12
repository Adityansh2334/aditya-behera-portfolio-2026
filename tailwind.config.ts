export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--fg)',
        card: 'var(--card)',
        borderc: 'var(--border)',
        muted: 'var(--muted)',
      },
    },
  },
  plugins: [],
};
