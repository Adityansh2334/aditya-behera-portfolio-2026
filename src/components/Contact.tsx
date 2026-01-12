import { motion } from "framer-motion";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaXTwitter,
} from "react-icons/fa6";
import ContactParticles from "./ContactParticles";

const socials = [
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/adityakumar01",
        color: "text-sky-500",
    },
    {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/adityansh2334",
        color: "text-gray-400",
    },
    {
        name: "Email",
        icon: FaEnvelope,
        link: "mailto:adityabehera23@outlook.com",
        color: "text-red-400",
    },
    {
        name: "X (Twitter)",
        icon: FaXTwitter,
        link: "https://x.com/",
        color: "text-neutral-400",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative max-w-7xl mx-auto px-6 py-24 overflow-hidden"
        >
            <h2 className="text-3xl font-bold text-center mb-16">
                Contact Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 relative">
                {/* LEFT — CONTACT FORM */}
                <motion.form
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-card/70 backdrop-blur border border-borderc
                     rounded-2xl p-8 space-y-6"
                >
                    <div>
                        <label className="block text-sm mb-2 text-muted">
                            Your Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-transparent
                         border border-borderc focus:outline-none
                         focus:border-cyan-400 transition"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 text-muted">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-transparent
                         border border-borderc focus:outline-none
                         focus:border-cyan-400 transition"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 text-muted">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-transparent
                         border border-borderc focus:outline-none
                         focus:border-cyan-400 transition"
                            placeholder="Write your message..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-full
                       bg-gradient-to-r from-cyan-400 to-purple-500
                       text-black font-medium
                       hover:shadow-lg hover:shadow-cyan-500/30
                       transition-all duration-300"
                    >
                        Send Message
                    </button>
                </motion.form>

                {/* RIGHT — MESSAGE + SOCIAL CARDS */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-card/60 backdrop-blur
                     border border-borderc rounded-2xl p-8 overflow-hidden"
                >
                    {/* Background particles */}
                    <ContactParticles />

                    {/* Message */}
                    <div className="relative z-10 mb-8">
                        <h3 className="text-xl font-semibold mb-2">
                            Let’s build something great 🚀
                        </h3>
                        <p className="text-muted">
                            I’m always open to discussing new projects, fintech challenges,
                            backend systems, or full-stack opportunities.
                        </p>
                    </div>

                    {/* Social cards */}
                    <div className="relative z-10 grid grid-cols-2 gap-6">
                        {socials.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.08 }}
                                className="flex flex-col items-center justify-center gap-3
                           bg-card/70 backdrop-blur border border-borderc
                           rounded-xl p-5 transition-all duration-300
                           hover:shadow-xl hover:shadow-cyan-500/20"
                            >
                                <div className={`text-3xl ${item.color}`}>
                                    <item.icon />
                                </div>
                                <span className="text-sm text-muted">
                  {item.name}
                </span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
