import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaXTwitter,
} from "react-icons/fa6";

const socials = [
    {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/adityakumar01",
        color: "text-sky-500",
    },
    {
        icon: FaGithub,
        link: "https://github.com/adityansh2334",
        color: "text-gray-400",
    },
    {
        icon: FaEnvelope,
        link: "mailto:adityabehera23@outlook.com",
        color: "text-red-400",
    },
    {
        icon: FaXTwitter,
        link: "https://x.com/",
        color: "text-neutral-400",
    },
];

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-32 border-t border-borderc"
        >
            {/* TOP SECTION */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

                {/* LEFT */}
                <div>
                    <motion.h3
                        whileHover={{ scale: 1.02 }}
                        className="text-lg font-semibold mb-3
                       bg-gradient-to-r from-cyan-400 to-purple-500
                       bg-clip-text text-transparent"
                    >
                        Aditya Kumar Behera
                    </motion.h3>

                    <p className="text-muted text-sm leading-relaxed transition-colors">
                        Solutions Engineer with 4.6+ years of experience building scalable
                        fintech systems, full-stack applications, and cloud-native platforms.
                    </p>
                </div>

                {/* CENTER LINKS */}
                <div className="flex flex-col gap-4 md:items-center">
                    {["experience", "projects", "skills", "education", "contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="group relative text-sm text-muted
                         transition-colors duration-300
                         hover:text-cyan-400"
                        >
                            <span className="capitalize">{item}</span>

                            {/* underline animation */}
                            <span
                                className="absolute left-0 -bottom-1 w-0 h-[2px]
                           bg-gradient-to-r from-cyan-400 to-purple-500
                           transition-all duration-300
                           group-hover:w-full"
                            />
                        </a>
                    ))}
                </div>

                {/* RIGHT SOCIAL ICONS */}
                <div className="flex gap-5 md:justify-end">
                    {socials.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.2, rotate: 6, y: -4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-11 h-11 rounded-full
                         bg-card/70 backdrop-blur
                         border border-borderc
                         flex items-center justify-center
                         hover:shadow-xl hover:shadow-cyan-500/30
                         transition-all duration-300"
                        >
                            <div className={`text-lg ${item.color}`}>
                                <item.icon />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* GRADIENT DIVIDER */}
            <div className="h-px w-full bg-gradient-to-r
                      from-transparent via-cyan-400/40 to-transparent" />

            {/* BOTTOM */}
            <div className="max-w-7xl mx-auto px-6 py-6 text-center">
                <p className="text-xs text-muted transition-colors">
                    © {new Date().getFullYear()} Aditya Kumar Behera. All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
}
