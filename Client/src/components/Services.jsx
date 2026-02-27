// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern and scalable websites built with performance-first architecture and clean code structure.",
    },
    {
      number: "02",
      title: "UI / UX Design",
      description:
        "Minimal, bold and user-focused interfaces crafted to elevate brand identity and usability.",
    },
    {
      number: "03",
      title: "Full Stack Systems",
      description:
        "Complete MERN stack applications with secure backend, API integration and deployment.",
    },
    {
      number: "04",
      title: "Brand Strategy",
      description:
        "Digital branding systems that create clarity, consistency and strong market positioning.",
    },
  ];

  return (
    <section
      id="services"
      className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center"
    >
      {/* Moving Accent Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-150 bg-(--accent)/10 blur-[200px]" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 py-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-xs tracking-[0.35em] text-gray-400 uppercase mb-6">
            SERVICES
          </p>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            Crafting digital systems that feel{" "}
            <span className="text-(--accent)">alive</span>.
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative grid md:grid-cols-12 gap-8 py-12 border-b border-white/10 cursor-pointer overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Number */}
              <div className="md:col-span-2 text-gray-500 text-sm tracking-widest relative z-10">
                {service.number}
              </div>

              {/* Title */}
              <div className="md:col-span-4 relative z-10">
                <h3 className="text-3xl md:text-4xl font-semibold transition-colors duration-300 group-hover:text-(--accent)">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 text-gray-400 text-sm md:text-base leading-relaxed relative z-10">
                {service.description}
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex items-center justify-end relative z-10">
                <ArrowRight className="opacity-0 -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 text-(--accent)" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
