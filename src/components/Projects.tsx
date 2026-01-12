import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "EMRS School Website & Admin Portal",
        description:
            "Full-stack education platform with dynamic content management, admin panel, and AWS deployment.",
        tech: ["Angular", "Spring Boot", "AWS", "Tailwind"],
        github: "https://github.com/your-github/emrs-project",
        live: "https://www.emrssaladahara.com",
    },
    {
        title: "AI-Based PDF Processor",
        description:
            "AI-powered document processing system using NLP for extracting structured data from PDFs.",
        tech: ["Java", "Spring Boot", "NLP", "Docker"],
        github: "https://github.com/your-github/ai-pdf-processor",
        live: "",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-14">Projects</h2>

            <div className="grid md:grid-cols-2 gap-10">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="cursor-hover group bg-card/70 backdrop-blur
                       border border-borderc rounded-2xl p-6
                       hover:shadow-xl hover:shadow-cyan-500/10
                       transition-all duration-300"
                    >
                        {/* Title */}
                        <h3 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted mb-4">
                            {project.description}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-3 py-1 rounded-full
                             border border-borderc text-muted"
                                >
                  {t}
                </span>
                            ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4">
                            {/* GitHub */}
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="cursor-hover flex items-center gap-2
                           px-5 py-2 rounded-full
                           bg-card/60 backdrop-blur
                           border border-borderc
                           hover:border-cyan-400 hover:text-cyan-400
                           hover:shadow-lg hover:shadow-cyan-500/20
                           transition-all duration-300"
                            >
                                <FaGithub />
                                <span>View Code</span>
                            </a>

                            {/* Live Demo */}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="cursor-hover flex items-center gap-2
                             px-5 py-2 rounded-full
                             bg-gradient-to-r from-cyan-400/20 to-purple-500/20
                             border border-borderc
                             hover:from-cyan-400/40 hover:to-purple-500/40
                             hover:shadow-lg hover:shadow-purple-500/30
                             transition-all duration-300"
                                >
                                    <FaExternalLinkAlt />
                                    <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
