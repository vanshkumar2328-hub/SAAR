import React, { useState } from "react";

const techStacks = [
  {
    name: "Figma",
    percent: "96%",
  },
  {
    name: "Framer",
    percent: "98%",
  },
  {
    name: "Webflow",
    percent: "92%",
  },
];

const TechStack = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-center py-12 relative overflow-hidden">
      {/* Section Title */}
      <div className="text-center mb-6">
        <p className="text-neutral-400 text-sm font-medium tracking-[0.15em] uppercase font-sans">
          TECH STACK
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            className="py-6 md:py-8 relative flex flex-col items-center group overflow-hidden w-full md:w-screen md:left-1/2 md:-translate-x-1/2"
          >
            {/* Default Static Text */}
            <div
              className={`relative inline-block transition duration-300 ${
                activeIndex === index ? "opacity-0" : "opacity-100"
              }`}
            >
              <h2 className="text-[24px] sm:text-[28px] md:text-[48px] font-semibold text-neutral-600 text-center leading-tight md:leading-none">
                {tech.name}
              </h2>

              <span className="absolute top-0 -right-10 md:-right-16 text-base md:text-2xl text-(--accent) font-medium">
                {tech.percent}
              </span>
            </div>

            {/* Hover Marquee Animation */}
            <div
              className={`absolute inset-0 flex items-center transition duration-300 ${
                activeIndex === index
                  ? "opacity-100 bg-(--accent)/7"
                  : "opacity-0"
              }`}
            >
              <div className="marquee-track flex whitespace-nowrap">
                {/* Track Wrapper */}
                <div className="flex">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`first-${i}`}
                      className="flex items-center mx-4 md:mx-8 text-[24px] sm:text-[28px] md:text-[48px] font-semibold text-white"
                    >
                      {tech.name}
                      <span className="ml-4 text-(--accent) text-lg md:text-2xl">
                        {tech.percent}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Exact Duplicate */}
                <div className="flex">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`second-${i}`}
                      className="flex items-center mx-8 text-[32px] md:text-[48px] font-semibold text-white"
                    >
                      {tech.name}
                      <span className="ml-4 text-(--accent) text-lg md:text-2xl">
                        {tech.percent}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-800"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
