
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import ResumeViewer from "./ResumeViewer";


const sections = ['experience','projects','skills','education','contact'];

export default function Header() {
  const [showResume, setShowResume] = useState(false);

  const [active, setActive] = useState('');

  useEffect(() => {
    const handler = () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if(el){
          const rect = el.getBoundingClientRect();
          if(rect.top <= 120 && rect.bottom >= 120){
            setActive(id);
          }
        }
      });
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
      <>
        <header className="sticky top-0 z-50 backdrop-blur border-b bg-card/80 border-borderc">
          <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

            {/* Brand */}
            <a
                href="#hero"
                className="font-semibold cursor-hover inline-flex
                     hover:text-cyan-400 transition-colors"
            >
              Aditya Kumar Behera
            </a>

            {/* Navigation */}
            <nav className="hidden md:flex gap-6 text-sm">
              {sections.map(s => (
                  <a
                      key={s}
                      href={'#' + s}
                      className={`cursor-hover transition
                ${active === s ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex gap-4 items-center">
              <button
                  onClick={() => setShowResume(true)}
                  className="cursor-hover px-4 py-1.5 rounded-full
                       border border-borderc
                       hover:border-cyan-400 transition"
              >
                Resume
              </button>

              <div className="cursor-hover inline-flex">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* ✅ ADD THIS PART */}
        {showResume && (
            <ResumeViewer onClose={() => setShowResume(false)} />
        )}
      </>
  );
}
