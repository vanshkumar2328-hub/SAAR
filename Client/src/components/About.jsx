import profileVideo from "/videos/profile.mp4";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate min-h-screen w-full bg-black text-white overflow-hidden z-10"
    >
      {/* About top blend fade */}
      <div
        className="absolute top-0 left-0 w-full h-60 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, transparent, black)",
        }}
      />

      {/* LEFT — Video portrait */}
      <div className="relative w-full h-[50vh] lg:absolute lg:left-0 lg:top-0 lg:h-full lg:w-1/2 overflow-hidden">
        <video
          src={profileVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale"
          style={{
            maskImage: `
              radial-gradient(
                ellipse at 35% 45%,
                black 40%,
                transparent 85%
              )
            `,
            WebkitMaskImage: `
              radial-gradient(
                ellipse at 35% 45%,
                black 40%,
                transparent 85%
              )
            `,
          }}
        />

        {/* cinematic 4-side fade */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              linear-gradient(to top, black, transparent 35%),
              linear-gradient(to bottom, black, transparent 35%),
              linear-gradient(to left, black, transparent 35%),
              linear-gradient(to right, black, transparent 35%)
            `,
          }}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-full px-6 py-12 sm:px-10 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-0">
        <p className="text-xs tracking-widest text-gray-400 mb-4">ABOUT ME</p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-light mb-10 max-w-xl">
          I’m a designer and no-code developer creating bold, functional, and
          award-winning digital experiences that help brands{" "}
          <span className="text-gray-400">connect with their audience.</span>
        </h2>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 mb-6">Work Experience</p>

          <div className="space-y-4 text-sm">
            {[
              ["Independent Product Designer", "2025"],
              ["Senior UX Designer at CloudForge", "2024 – 2025"],
              ["Product Designer at Orbit Systems", "2022 – 2024"],
              ["UI/UX Designer at PixelHaus", "2021 – 2022"],
              ["Junior Designer at Brightline Studio", "2020 – 2021"],
            ].map(([role, year]) => (
              <div
                key={role}
                className="flex justify-between border-b border-gray-800 pb-2 gap-4"
              >
                <span className="pr-4">{role}</span>
                <span className="text-gray-400 whitespace-nowrap">{year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
