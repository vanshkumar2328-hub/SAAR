export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen w-full text-white overflow-hidden"
    >
      {/* LEFT — Roles */}
      <div className="relative z-10 px-6 pt-28 sm:px-10 lg:absolute lg:left-16 lg:top-1/3 lg:px-0 lg:pt-0 text-xs sm:text-sm tracking-widest space-y-2">
        <p>WEB-DESIGNER</p>
        <p>BLOGGER</p>
        <p>TREND ANALYST</p>
      </div>

      {/* CENTER — Huge Title */}
      <div className="relative z-10 px-6 mt-16 sm:px-10 lg:absolute lg:bottom-20 lg:left-16 lg:mt-0 lg:px-0">
        <h1 className="text-[64px] sm:text-[96px] md:text-[120px] lg:text-[160px] font-bold leading-none tracking-tight">
          SAAR
        </h1>

        {/* Yellow underline */}
        <div className="w-20 sm:w-24 lg:w-28 h-2 sm:h-3 bg-(--accent) mt-4"></div>
      </div>

      {/* RIGHT — Description */}
      <div className="relative z-10 px-6 mt-16 pb-16 sm:px-10 lg:absolute lg:right-20 lg:bottom-32 lg:mt-0 lg:pb-0 lg:px-0 max-w-md text-gray-300">
        <div className="flex items-center gap-3 mb-6 text-white">
          <span className="w-2 h-2 bg-(--accent) rounded-full shadow-[0_0_10px_3px_rgba(250,204,21,0.8)]"></span>
          <p className="text-xs sm:text-sm">AVAILABLE FOR WORK</p>
        </div>

        <p className="leading-relaxed mb-8 text-sm sm:text-base">
          I craft bold brands and modern websites with purpose. Each detail
          balances design and usability for impact. My work adapts as your
          vision grows.
        </p>

        <button className="border border-white px-5 sm:px-6 py-3 rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base">
          START A PROJECT
        </button>
      </div>

      {/* Right corner year */}
      <div className="relative z-10 px-6 mt-6 sm:px-10 text-gray-400 text-xs sm:text-sm lg:absolute lg:right-20 lg:top-1/3 lg:mt-0 lg:px-0">
        © 2025
      </div>

      {/* exact bottom overlay (same as reference) */}
      <div
        className="absolute -bottom-px left-0 right-0 h-50 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)",
        }}
      />

      <div id="hero-end" className="absolute bottom-0 left-0 w-full h-px" />
    </section>
  );
}