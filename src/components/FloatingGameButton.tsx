import { useState } from "react";
import { motion } from "framer-motion";
import GameModal from "./GameModal";

export default function FloatingGameButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="cursor-hover fixed bottom-6 right-6 z-50
                   w-14 h-14 rounded-full
                   bg-gradient-to-r from-cyan-400 to-purple-500
                   text-black font-bold
                   shadow-lg shadow-cyan-500/40"
            >
                🎮
            </motion.button>

            {open && <GameModal onClose={() => setOpen(false)} />}
        </>
    );
}
