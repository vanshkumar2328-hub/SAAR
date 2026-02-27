import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-black text-white overflow-visible md:overflow-hidden flex items-start md:items-center pt-24 md:pt-0"
    >
      {/* Green glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-100 bg-green-600/20 blur-[200px]" />
      </div>

      {/* Container */}
      <div className="relative z-10 w-full flex justify-center md:transform-[translateY(40px)]">
        <div
          className="relative w-full px-5 sm:px-8"
          style={{ maxWidth: "800px" }}
        >
          {/* Compact tic-tac-toe logo */}
          <div className="hidden md:block absolute left-0 top-0 -translate-x-20 -translate-y-8 w-42.5 h-42.5 pointer-events-none">
            {/* longer realistic grid lines */}
            <div className="absolute left-1/3 top-[-20%] h-[140%] w-px bg-linear-to-b from-transparent via-white/25 to-transparent" />
            <div className="absolute left-2/3 top-[-20%] h-[140%] w-px bg-linear-to-b from-transparent via-white/25 to-transparent" />

            <div className="absolute top-1/3 left-[-20%] w-[140%] h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
            <div className="absolute top-2/3 left-[-20%] w-[140%] h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

            {/* perfectly fitted center logo */}
            <div className="absolute inset-0 grid place-items-center">
              {/* subtle white center cell */}
              <div className="absolute w-1/3 h-1/3 bg-white/5 backdrop-blur-[1px]" />

              {/* logo */}
              <span className="relative text-(--accent) font-bold text-[60px] leading-none select-none">
                S
              </span>
            </div>
          </div>

          {/* Mobile + Heading row */}
          <div className="flex items-center justify-between md:block w-full">
            {/* Mobile logo */}
            <div className="md:hidden relative w-14 h-14 pointer-events-none shrink-0 flex items-center justify-center">
              <div className="absolute left-1/3 top-[-20%] h-[140%] w-px bg-linear-to-b from-transparent via-white/25 to-transparent" />
              <div className="absolute left-2/3 top-[-20%] h-[140%] w-px bg-linear-to-b from-transparent via-white/25 to-transparent" />

              <div className="absolute top-1/3 left-[-20%] w-[140%] h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
              <div className="absolute top-2/3 left-[-20%] w-[140%] h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

              <div className="absolute inset-0 grid place-items-center">
                <div className="absolute w-1/3 h-1/3 bg-white/5 backdrop-blur-[1px]" />
                <span className="relative text-(--accent) font-bold text-2xl leading-none select-none">
                  S
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="font-medium text-4xl sm:text-5xl md:text-[60px] leading-tight md:leading-20 text-whitemb-8 md:mb-16 flex-1
 w-[65%] md:w-fit md:ml-auto text-right md:text-right"
            >
              Let’s start <br />
              creating together
            </h1>
          </div>

          {/* Form grid */}
          <div className="grid md:grid-cols-2 gap-7 md:gap-10">
            {/* Left column */}
            <div className="space-y-8">
              <Input label="Name *" />
              <Select
                label="You are interested in"
                options={[
                  "-- Select an option --",
                  "Web Development",
                  "UI/UX Design",
                  "Digital Marketing",
                ]}
              />
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <Input label="Email *" />
              <Select
                label="Budget in USD"
                options={[
                  "-- Select your budget --",
                  "$0 – $100",
                  "$100 – $500",
                  "$500 – $1,000",
                ]}
              />
            </div>
          </div>

          {/* Project details */}
          <div className="mt-8 md:mt-10">
            <Textarea label="Project details" />
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10 md:mt-12 gap-5 md:gap-6">
            <button
              className="
    self-start md:self-auto
    relative overflow-hidden
    border border-white/70
    px-5 py-3
    rounded-xl
    text-sm font-medium
    tracking-wide
    text-white
    group
    md:transform-[scale(0.8)]
  "
            >
              {/* sliding background */}
              <span
                className="
      absolute inset-0
      bg-white
      translate-y-full
      group-hover:translate-y-0
      transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]
    "
              />

              {/* text */}
              <span className="relative group-hover:text-black transition-colors duration-500">
                SUBMIT MESSAGE
              </span>
            </button>

            <p className="text-gray-400 text-sm text-left md:text-right">
              say hello -{" "}
              <span className="text-(--accent)">saar@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      {/* Bottom fade to remove video gap */}
      <div
        className="absolute -bottom-px left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
        }}
      />
    </section>
  );
}

/* Reusable components */

function Input({ label }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const shrink = focused || value;

  return (
    <div className="leading-none">
      {/* fixed height wrapper — layout lock */}
      <div className="h-4.5 overflow-hidden">
        <label
          className={`
            text-gray-400 block leading-none
            transition-transform duration-200 origin-bottom-left translate-y-[0.5px]
            ${shrink ? "scale-75" : "scale-100"}
          `}
        >
          {label}
        </label>
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full bg-transparent border-b border-white/20 focus:border-(--accent) outline-none py-0 leading-none transition-colors duration-500 ease-out"
      />
    </div>
  );
}

function Select({ label, options }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* trigger */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          flex items-center justify-between
          w-full py-1 cursor-pointer border-b transition-colors duration-500 ease-out
          ${open ? "border-(--accent)" : "border-white/20"}
        `}
      >
        <span className="text-gray-400 text-base leading-none">
          {value || label}
        </span>

        <svg
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 8l4 4 4-4" />
        </svg>
      </div>

      {/* dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-full bg-black border border-white/10 shadow-xl z-50">
          {options.map((opt, i) => (
            <div
              key={i}
              onClick={() => {
                setOpen(false);
                if (i === 0) return;
                setValue(opt);
              }}
              className={
                i === 0
                  ? "px-3 py-1.5 text-sm text-gray-500 cursor-default"
                  : "px-3 py-1.5 text-sm text-gray-300 hover:text-(--accent) cursor-pointer"
              }
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Textarea({ label }) {
  const [shrink, setShrink] = useState(false);

  return (
    <div className="leading-none">
      <div className="h-4.5 overflow-hidden">
        <label
          className={`
            text-gray-400 block leading-none
            transition-transform duration-200
            origin-bottom-left translate-y-[0.5px]
            ${shrink ? "scale-75" : "scale-100"}
          `}
        >
          {label}
        </label>
      </div>

      <textarea
        rows="1"
        onFocus={() => setShrink(true)}
        onBlur={(e) => !e.target.value && setShrink(false)}
        className="w-full bg-transparent border-b border-white/20 focus:border-(--accent) outline-none py-0 leading-none resize-none h-6"
      />
    </div>
  );
}
