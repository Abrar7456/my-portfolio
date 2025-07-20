import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { BackgroundSwitcher } from "../components/BackgoundSwitcher";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="overflow-hidden">
      <div className="min-h-screen bg-background text-foreground">
        <BackgroundSwitcher />
        <Navbar />

        <main>
          <section data-scroll-section>
            <HeroSection />
          </section>

          <section data-scroll-section>
            <AboutSection />
          </section>
        </main>
      </div>
    </div>
  );
};
