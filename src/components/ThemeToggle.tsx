import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button onClick={toggle}
      className="w-9 h-9 rounded-full border border-white/20 hover:border-cyan-400 transition">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}