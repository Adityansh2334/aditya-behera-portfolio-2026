import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa6";

const education = [
    {
        degree: "Bachelor of Technology (B.Tech)",
        field: "Mechanical Engineering",
        institution: "Government College of Engineering, Kalahandi",
        duration: "2015 – 2019",
        score: "CGPA: 7.5",
        location: "Odisha, India",
        icon: FaGraduationCap,
        highlights: [
            "Built a strong foundation in problem-solving, analytical thinking, and system design through Mechanical Engineering principles",
            "Developed a deep interest in Computer Science by applying logical reasoning, algorithms, and automation concepts",
            "Explored the intersection of Mechanical systems and software through simulations, data analysis, and engineering tools",
            "Self-driven learning in programming and backend development alongside core engineering curriculum",
        ],
    },
    {
        degree: "Higher Secondary Education (HSC)",
        field: "Science Stream",
        institution: "Sulagna Junior College",
        duration: "2012 – 2014",
        score: "75%",
        location: "Odisha, India",
        icon: FaSchool,
        highlights: [
            "Completed higher secondary education with a focus on Mathematics and Science",
            "Developed early interest in logical problem-solving and technology-driven learning",
        ],
    },
];

export default function Education() {
    return (
        <section
            id="education"
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <h2 className="text-3xl font-bold mb-14">
                Education
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.degree}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group bg-card/70 backdrop-blur
                       border border-borderc rounded-2xl p-6
                       hover:shadow-xl hover:shadow-cyan-500/10
                       transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <div
                                className="w-12 h-12 rounded-full
                           bg-gradient-to-r from-cyan-400 to-purple-500
                           flex items-center justify-center
                           text-black"
                            >
                                <edu.icon />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">
                                    {edu.degree}
                                </h3>
                                <p className="text-muted text-sm">
                                    {edu.field}
                                </p>
                            </div>
                        </div>

                        {/* Institution */}
                        <p className="text-cyan-400 font-medium text-sm mb-1">
                            {edu.institution}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-3 text-xs text-muted mb-4">
              <span className="px-3 py-1 rounded-full border border-borderc">
                {edu.duration}
              </span>
                            <span className="px-3 py-1 rounded-full border border-borderc">
                {edu.score}
              </span>
                            <span className="px-3 py-1 rounded-full border border-borderc">
                {edu.location}
              </span>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2 text-muted text-sm list-disc list-inside">
                            {edu.highlights.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
