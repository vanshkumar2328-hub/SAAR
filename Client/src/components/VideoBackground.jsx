import { useContext } from "react";
import { ThemeContext } from "../context/theme-context.js";

import purple from "/videos/purple.mp4";
import blue from "/videos/blue.mp4";
import red from "/videos/red.mp4";

const videos = {
  yellow: purple,
  green: blue,
  orange: red,
};

export default function VideoBackground() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden w-screen h-screen md:w-auto md:h-auto">
      <video
        key={theme}
        src={videos[theme]}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
  absolute inset-0
  w-full h-full
  object-cover object-center

  md:inset-auto
  md:top-1/2 md:left-1/2
  md:min-w-full md:min-h-full
  md:w-auto md:h-auto
  md:-translate-x-1/2 md:-translate-y-1/2
"
      />

      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
