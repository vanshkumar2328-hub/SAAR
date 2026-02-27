import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import VideoBackground from "./components/VideoBackground";
import CursorTrail from "./components/CursorTrail";
import About from "./components/About";
import TechStack from "./components/TechStack";
import WorksSection from "./components/WorksSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative w-full">
      {/* background + cursor */}
      <CursorTrail />
      <VideoBackground />
      {/* content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WorksSection />
        <Services />
        <About />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
