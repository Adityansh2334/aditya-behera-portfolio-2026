import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = [
  'Solution Engineer',
  'Full Stack Developer',
  'Java Enthusiast',
  'AI Engineer'
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block min-w-[260px] h-[1.5em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 top-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}