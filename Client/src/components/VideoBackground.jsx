import { useContext } from "react";
import { ThemeContext } from "../context/theme-context.js";

import purple from "/videos/purple.mp4";
import blue from "/videos/blue.mp4";
import red from "/videos/red.mp4";

import purpleMob from "/videos/purple-mob.mp4";
import blueMob from "/videos/blue-mob.mp4";
import redMob from "/videos/red-mob.mp4";

const videos = {
  yellow: { desktop: purple, mobile: purpleMob },
  green: { desktop: blue, mobile: blueMob },
  orange: { desktop: red, mobile: redMob },
};

export default function VideoBackground() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden w-screen h-screen md:w-auto md:h-auto">
      <video
        key={theme}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-center md:inset-auto md:top-1/2 md:left-1/2 md:min-w-full md:min-h-full md:w-auto md:h-auto md:-translate-x-1/2 md:-translate-y-1/2"
      >
        {/* Mobile Video: Screens smaller than 768px */}
        <source
          src={videos[theme].mobile}
          type="video/mp4"
          media="(max-width: 767px)"
        />
        {/* Desktop Video: Screens 768px and larger */}
        <source
          src={videos[theme].desktop}
          type="video/mp4"
          media="(min-width: 768px)"
        />
      </video>

      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
}
