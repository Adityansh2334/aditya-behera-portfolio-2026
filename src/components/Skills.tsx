import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaDatabase, FaGithub } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

import {
    FaJava,
    FaJs,
    FaReact,
    FaVuejs,
    FaGitAlt,
    FaAws,
    FaHtml5,
    FaCss3Alt,
    FaAngular,
} from "react-icons/fa";
import {
    SiTypescript,
    SiSpringboot,
    SiPostgresql,
    SiMongodb,
    SiHibernate,
    SiGraphql,
    SiExpress,
    SiRedux,
    SiIntellijidea,
} from "react-icons/si";

const skillGroups: {
    title: string;
    gradient: string;
    skills: { name: string; icon: IconType; color: string }[];
}[] = [
    {
        title: "Programming Languages",
        gradient: "from-cyan-400 to-purple-500",
        skills: [
            { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
            { name: "Java", icon: FaJava, color: "text-red-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
            { name: "SQL", icon: FaDatabase, color: "text-cyan-400" },
        ],
    },
    {
        title: "Backend Technologies",
        gradient: "from-green-400 to-emerald-500",
        skills: [
            { name: "Spring", icon: SiSpringboot, color: "text-green-400" },
            { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "Hibernate", icon: SiHibernate, color: "text-yellow-300" },
            // { name: "GraphQL", icon: SiGraphql, color: "text-pink-400" },
            // { name: "Express", icon: SiExpress, color: "text-gray-400" },
        ],
    },
    {
        title: "Frontend Technologies",
        gradient: "from-blue-400 to-cyan-400",
        skills: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Angular", icon: FaAngular, color: "text-green-400" },
            { name: "HTML5", icon: FaHtml5, color: "text-orange-400" },
            { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
            // { name: "Redux", icon: SiRedux, color: "text-purple-400" },
        ],
    },
    {
        title: "Developer Tools",
        gradient: "from-purple-400 to-pink-500",
        skills: [
            { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
            { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
            { name: "VS Code", icon: VscCode, color: "text-blue-400" },
            { name: "AWS", icon: FaAws, color: "text-yellow-500" },
            { name: "IntelliJ", icon: SiIntellijidea, color: "text-pink-400" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold mb-14">Technical Skills</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {skillGroups.map((group, idx) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="relative bg-card/70 backdrop-blur border border-borderc rounded-2xl p-6
                       hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                    >
                        {/* Floating dots */}
                        <span className="absolute top-3 right-3 w-3 h-3 rounded-full bg-cyan-400/60" />
                        <span className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-purple-500/60" />

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-2">
                            {group.title}
                        </h3>

                        {/* Gradient line */}
                        <div
                            className={`h-[2px] w-full bg-gradient-to-r ${group.gradient} mb-6`}
                        />

                        {/* Skills */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                            {group.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.15 }}
                                    className="flex flex-col items-center gap-2 text-center cursor-default"
                                >
                                    <div className={`text-3xl ${skill.color}`}>
                                        <skill.icon />
                                    </div>
                                    <span className="text-xs text-muted">
                    {skill.name}
                  </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
