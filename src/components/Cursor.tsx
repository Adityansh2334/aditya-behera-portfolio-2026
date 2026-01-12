
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const move = (e:any) => {
      if(cursor){
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div id="cursor" className="fixed w-4 h-4 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference" />;
}
