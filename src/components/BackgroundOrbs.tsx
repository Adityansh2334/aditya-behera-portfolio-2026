import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
  return (
    <>
      <motion.div
        className="fixed top-[-120px] right-[-120px] w-[320px] h-[320px]
        bg-cyan-500/20 rounded-full blur-3xl -z-10"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="fixed bottom-[-140px] left-[-140px] w-[360px] h-[360px]
        bg-purple-500/20 rounded-full blur-3xl -z-10"
        animate={{ y: [0, -40, 0], x: [0, 25, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
    </>
  );
}