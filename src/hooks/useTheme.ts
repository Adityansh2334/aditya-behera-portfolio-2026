import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'dark'|'light'>('dark');

  useEffect(() => {
    const t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') setTheme(t);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') };
}