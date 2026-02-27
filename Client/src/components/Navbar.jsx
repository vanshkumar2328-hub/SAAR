import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/theme-context.js";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      return () => {
        const y = Math.abs(parseInt(document.body.style.top || "0", 10));

        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";

        window.scrollTo(0, y);
      };
    }
  }, [isMenuOpen]);

  const { setTheme } = useContext(ThemeContext);

  const links = [
    { label: "WORKS", id: "works" },
    { label: "SERVICES", id: "services" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-20 text-white">
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-16 py-4 lg:py-6">
        {/* LEFT — Logo + Desktop Tabs */}
        <div className="flex items-center gap-4 lg:gap-6">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none text-(--accent)">
            S
          </span>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex gap-10 text-[11px] pt-1 scale-90 origin-left">
            {links.map((item, i) => (
              <span
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 cursor-pointer hover:text-(--accent) transition"
              >
                <span className="opacity-60 font-light">
                  {String(i + 1).padStart(2, "0")} /
                </span>
                <span className="font-semibold tracking-[0.18em]">
                  {item.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Info + Controls */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] tracking-[0.15em]">
          {/* Desktop Info */}
          <div className="hidden lg:block text-right leading-tight mr-10 xl:mr-32">
            <p>SAAR@GMAIL.COM</p>
            <p className="text-gray-400">CUP {time}</p>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="tracking-widest hover:text-(--accent) transition"
          >
            ☰ MENU
          </button>

          {/* Theme Switcher */}
          <div className="hidden sm:flex gap-2">
            {["yellow", "green", "orange"].map((color) => (
              <button
                key={color}
                onClick={() => setTheme(color)}
                className="w-4 h-4 rounded-full border border-white"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Slide Menu */}
      <div
        className={`fixed inset-0 z-50 h-dvh w-screen max-w-full touch-none bg-black/95 backdrop-blur-md transform transition-transform duration-300 ease-out will-change-transform
 ${isMenuOpen ? "translate-x-0" : "translate-x-[100vw]"}`}
      >
        <div className="flex flex-col h-dvh p-6 sm:p-8 overflow-y-auto">
          <div className="sticky top-0 flex justify-between items-center mb-8 sm:mb-12 bg-black/95 py-2 z-10">
            <span className="text-4xl font-bold text-(--accent)">S</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest"
            >
              ✕ CLOSE
            </button>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 text-base sm:text-lg">
            {links.map((item, i) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-4 text-left py-2 hover:text-(--accent) transition"
              >
                <span className="opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="tracking-[0.2em] font-semibold">
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 sm:mt-auto space-y-5 sm:space-y-6 text-sm">
            <div>
              <p>SAAR@GMAIL.COM</p>
              <p className="text-gray-400">CUP {time}</p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {["yellow", "green", "orange"].map((color) => (
                <button
                  key={color}
                  onClick={() => setTheme(color)}
                  className="w-5 h-5 rounded-full border border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
