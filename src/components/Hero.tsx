import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                 bg-card/70 backdrop-blur border border-borderc
                 text-sm font-mono text-muted"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        {time.toLocaleTimeString()}
      </div>
  );
}

export default function Hero() {
  return (
      <section  id="hero" className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
          >
            {/* Live Clock */}
            <LiveClock />

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

            {/* Experience at a glance */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap gap-3 pt-2"
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
                           text-xs font-medium text-muted
                           hover:text-cyan-400 transition-colors"
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
              className="relative flex justify-center group"
          >
            {/* Animated edge ring (always running) */}
            <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-[2rem]
               bg-gradient-to-r from-cyan-400 via-purple-500 to-sky-400
               opacity-40 blur-3xl"
            />

            {/* Cursor-reactive container */}
            <motion.div
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;

                  e.currentTarget.style.transform = `
        perspective(800px)
        rotateX(${(-y / 20).toFixed(2)}deg)
        rotateY(${(x / 20).toFixed(2)}deg)
        scale(1.04)
      `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
            >
              {/* Glow background */}
              <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-2 rounded-3xl
                 bg-[length:200%_200%]
                 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-sky-400/30
                 blur-2xl -z-10
                 group-hover:blur-3xl transition-all duration-500"
              />

              {/* Avatar */}
              <img
                  src="/aditya.jpg"
                  alt="Aditya Kumar Behera"
                  className="w-72 md:w-80 rounded-2xl
                 border border-borderc shadow-xl
                 relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
