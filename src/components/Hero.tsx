import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { useEffect, useState } from "react";
import LiveClock from "./LiveClock";

/* ✅ Desktop-safe detection hook */
function useDesktopEffects() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(hover: hover) and (pointer: fine)");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        setEnabled(media.matches && !reduceMotion.matches);
    }, []);

    return enabled;
}


export default function Hero() {
    const enableEffects = useDesktopEffects();

    return (
        <section
            id="hero"
            className="min-h-[calc(var(--vh)-4rem)] flex items-center"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="
    space-y-6
    flex flex-col
    items-center md:items-start
    text-center md:text-left
  "
                >
                    {/* Clock with mobile spacing */}
                    <div className="mt-6 md:mt-0">
                        <LiveClock />
                    </div>


                    {/* Heading */}
                    <h1 className="text-5xl font-bold leading-tight">
                        Hi, I am{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                          Aditya
                        </span>
                    </h1>

                    {/* Animated role */}
                    <p className="text-lg text-muted">
                        <AnimatedText />
                    </p>

                    {/* Skill context */}
                    <p className="text-sm md:text-base font-medium">
                        <span className="text-cyan-400">Fintech Systems</span>{" "}
                        <span className="text-muted">•</span>{" "}
                        <span className="text-purple-400">Java & Spring Boot</span>{" "}
                        <span className="text-muted">•</span>{" "}
                        <span className="text-emerald-400">Cloud & Microservices</span>{" "}
                        <span className="text-muted">•</span>{" "}
                        <span className="text-sky-400">Full Stack Engineering</span>
                    </p>

                    {/* Experience pills */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start"
                    >
                        {[
                            "4.6+ Years Experience",
                            "Fintech Domain",
                            "Backend & Full Stack",
                        ].map((item) => (
                            <span
                                key={item}
                                className="px-4 py-1.5 rounded-full
                   bg-card/60 backdrop-blur
                   border border-borderc
                   text-xs font-medium text-muted"
                            >
                            {item}
                          </span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT AVATAR */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* FIXED CONTAINER — layout safe */}
                    <div
                        className="relative w-[320px] h-[380px]
               rounded-3xl overflow-hidden
               flex items-center justify-center"
                    >
                        {/* DESKTOP-ONLY ROTATING COLOR RING */}
                        {enableEffects && (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="
          absolute inset-4
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          via-purple-500
          to-sky-400
          opacity-70
          blur-sm
          mask-ring
        "
                            />
                        )}

                        {/* AVATAR */}
                        <motion.img
                            whileHover={enableEffects ? { scale: 1.03 } : {}}
                            transition={{ type: "spring", stiffness: 180, damping: 18 }}
                            src="/aditya.jpg"
                            alt="Aditya Kumar Behera"
                            className="relative z-10
                 w-72 md:w-80
                 rounded-2xl
                 border border-borderc
                 shadow-xl"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
