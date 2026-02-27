import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const works = [
  {
    title: "Seeson",
    video: "/videos/purple.mp4",
  },
  {
    title: "Future",
    video: "/videos/blue.mp4",
  },
  {
    title: "NexoPay",
    video: "/videos/red.mp4",
  },
];

export default function WorksSection() {
  const [index, setIndex] = useState(1);

  const imageRef = useRef(null);

  const get = (offset) => works[(index + offset + works.length) % works.length];

  const visible = [get(-1), get(0), get(1)];

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent("worksImageVisible", {
            detail: entry.isIntersecting,
          }),
        );
      },
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const wheelMotion = (i) => {
    const offset = i - 1;

    return {
      animate: {
        scale: offset === 0 ? 1 : 0.92,
        rotateX: offset * -18,
        opacity: offset === 0 ? 1 : 0.4,
        filter: offset === 0 ? "blur(0px)" : "blur(0.5px)",
      },
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 22,
      },
    };
  };

  return (
    <section
      id="works"
      className="relative h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative flex flex-col md:flex-row h-full w-full">
        {/* Left text section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-24 md:pr-10 space-y-6 md:space-y-8 order-2 md:order-1">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            Selected Works
          </p>

          {/* Wheel (UI preserved) */}
          <div className="space-y-2 select-none" style={{ perspective: 1000 }}>
            {visible.map((item, i) => {
              const isCenter = i === 1;

              return (
                <motion.div
                  layout
                  key={item.title}
                  onClick={() => {
                    setIndex(works.indexOf(item));
                  }}
                  {...wheelMotion(i)}
                  style={{ transformPerspective: 1000 }}
                  className="cursor-pointer"
                >
                  <h1
                    className={`text-4xl sm:text-5xl md:text-7xl font-bold transition-colors ${
                      isCenter
                        ? "text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {item.title}
                  </h1>
                </motion.div>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 pt-4 md:pt-6">
            <button className="px-6 py-2 border border-white/40 rounded-full text-sm hover:bg-white hover:text-black transition">
              Branding
            </button>
            <button className="px-6 py-2 border border-white/40 rounded-full text-sm hover:bg-white hover:text-black transition">
              Visual Identity
            </button>
          </div>
        </div>

        {/* Right showcase */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative order-1 md:order-2 h-[45vh] md:h-auto">
          <div
            ref={imageRef}
            className="relative w-[95%] md:w-[90%] h-full md:h-[75%] bg-black shadow-2xl flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={works[index].video}
                src={works[index].video}
                autoPlay
                muted
                playsInline
                preload="auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                onEnded={() => {
                  setIndex((i) => (i + 1) % works.length);
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black via-black/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 md:gap-10 text-sm text-white z-50">
        <button
          className="transition-colors"
          style={{ color: "#ffffff" }}
          onClick={() => setIndex((i) => (i - 1 + works.length) % works.length)}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
        >
          ← Prev
        </button>
        <button
          className="transition-colors"
          style={{ color: "#ffffff" }}
          onClick={() => setIndex((i) => (i + 1) % works.length)}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
        >
          Next →
        </button>
      </div>

      {/* Year */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-3xl md:text-6xl font-bold z-20">
        <span className="text-white">20</span>
        <span className="text-(--accent)">26</span>
      </div>

      {/* Decorative foreground shape */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
