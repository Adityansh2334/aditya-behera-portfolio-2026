import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LiveClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
        inline-flex items-center gap-3
        px-4 py-2
        rounded-full

        bg-card/85 backdrop-blur
        border border-borderc
        shadow-sm

        text-sm sm:text-base
        font-mono text-muted
      "
        >
            {/* Live indicator */}
            <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>

            <span className="tracking-wide">
        {time.toLocaleTimeString()}
      </span>
        </motion.div>
    );
}
