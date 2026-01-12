import { motion } from "framer-motion";
import CodeClickerGame from "./CodeClickerGame";

export default function GameModal({ onClose }: { onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/50 backdrop-blur"
        >
            <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-card/80 backdrop-blur
                   border border-borderc rounded-2xl p-6
                   w-[320px] relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-muted cursor-hover"
                >
                    ✕
                </button>

                <CodeClickerGame />
            </motion.div>
        </motion.div>
    );
}
