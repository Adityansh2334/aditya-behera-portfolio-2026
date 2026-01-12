import { motion } from "framer-motion";

const experiences = [
  {
    role: "Solutions Engineer",
    company: "FICO, Bengaluru",
    period: "June 2022 – Present",
    points: [
      "Spearheaded development of scalable REST APIs, improving performance by 40%",
      "Designed reusable React components, improving developer productivity by 25%",
      "Collaborated with global teams to deliver secure, production-ready solutions",
      "Supported high-volume financial workflows processing millions of transactions reliably",
      "Increased system reliability by improving error handling, logging, and monitoring",
    ],
  },
  {
    role: "Software Engineer",
    company: "Allianz Technology SE, Pune",
    period: "May 2021 – June 2022",
    points: [
      "Built and maintained scalable Spring Boot microservices for enterprise insurance platforms",
      "Designed and optimized REST APIs with focus on performance and reliability",
      "Improved backend efficiency through code refactoring and query optimization",
      "Collaborated in Agile/Scrum teams to deliver production-ready features",
      "Followed clean code practices and participated in code reviews.",
    ],
  },
];

export default function Experience() {
  return (
      <section
          id="experience"
          className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-3xl font-bold mb-16">
          Work Experience
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-0 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30" />

                  {/* Card */}
                  <div className="bg-card/80 backdrop-blur border border-borderc rounded-2xl p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400 font-medium">
                          {exp.company}
                        </p>
                      </div>

                      {/* Date pill */}
                      <span className="text-sm px-4 py-1 rounded-full border border-borderc text-muted">
                    {exp.period}
                  </span>
                    </div>

                    {/* Points */}
                    <ul className="mt-4 space-y-2 text-muted list-disc list-inside">
                      {exp.points.map((point, i) => (
                          <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}
