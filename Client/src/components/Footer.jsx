export default function Footer() {
  return (
    <footer
      id="footer"
      className="
    relative w-full min-h-fit
        bg-black text-white
        py-16 px-8
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-(--accent)">S</h2>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SAAR Studio
            <br />
            All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="text-sm text-gray-400 space-y-2">
          <p>
            Email: <span className="text-white">saar@gmail.com</span>
          </p>
          <p>Built with React + Tailwind</p>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black to-transparent pointer-events-none" />
    </footer>
  );
}
