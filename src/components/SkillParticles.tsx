import { motion } from "framer-motion";

export default function SkillParticles() {
    return (
        <>
            <motion.span
                className="absolute top-10 left-20 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl"
                animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity }}
            />
            <motion.span
                className="absolute bottom-10 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
                animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity }}
            />
            <motion.span
                className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400/10 rounded-full blur-2xl"
                animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
                transition={{ duration: 18, repeat: Infinity }}
            />
        </>
    );
}
