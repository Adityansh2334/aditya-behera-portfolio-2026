import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import ResumeViewer from "./ResumeViewer";

const sections = ["experience", "projects", "skills", "education", "contact"];

export default function Header() {
  const [active, setActive] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Scroll spy */
  useEffect(() => {
    const handler = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
      <>
        {/* HEADER */}
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

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-sm">
              {sections.map((s) => (
                  <a
                      key={s}
                      href={`#${s}`}
                      className={`cursor-hover transition
                  ${
                          active === s
                              ? "text-cyan-400"
                              : "hover:text-cyan-400"
                      }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex gap-3 items-center">
              {/* Resume (Desktop) */}
              <button
                  onClick={() => setShowResume(true)}
                  className="hidden md:inline-flex cursor-hover
                         px-4 py-1.5 rounded-full
                         border border-borderc
                         hover:border-cyan-400 transition"
              >
                Resume
              </button>

              {/* Theme Toggle */}
              <div className="cursor-hover">
                <ThemeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden p-2 rounded-lg
                         border border-borderc
                         hover:border-cyan-400 transition"
              >
                <FiMenu size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="fixed inset-0 z-40 md:hidden"
              >
                {/* Backdrop */}
                <div
                    onClick={() => setMobileOpen(false)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                {/* Menu Panel */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    exit={{ y: -20 }}
                    className="absolute top-16 left-4 right-4
                         rounded-2xl bg-card/90 backdrop-blur
                         border border-borderc shadow-xl p-5"
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Navigate</span>
                    <button
                        onClick={() => setMobileOpen(false)}
                        className="p-1 rounded-md hover:text-cyan-400"
                    >
                      <FiX size={18} />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="grid gap-3">
                    {sections.map((s) => (
                        <a
                            key={s}
                            href={`#${s}`}
                            onClick={() => setMobileOpen(false)}
                            className={`px-4 py-3 rounded-xl text-sm font-medium
                      border border-borderc transition-all
                      ${
                                active === s
                                    ? "bg-cyan-400/10 text-cyan-400 border-cyan-400/40"
                                    : "hover:border-cyan-400/40 hover:text-cyan-400"
                            }`}
                        >
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </a>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-4 h-px bg-borderc" />

                  {/* Resume Button */}
                  <button
                      onClick={() => {
                        setShowResume(true);
                        setMobileOpen(false);
                      }}
                      className="w-full py-3 rounded-xl
                           border border-borderc
                           hover:border-cyan-400 transition"
                  >
                    View Resume
                  </button>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* RESUME MODAL */}
        {showResume && (
            <ResumeViewer onClose={() => setShowResume(false)} />
        )}
      </>
  );
}
