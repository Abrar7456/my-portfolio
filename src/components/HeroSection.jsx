import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <div className="max-w-4xl w-full space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-snug">
            <span className="block sm:inline opacity-0 animate-fade-in">
                Hi, I'm
            </span>{" "}
            <span
                className="whitespace-nowrap opacity-0 animate-fade-in-delay-1"
            >
                <span className="text-primary text-glow"> Abrar</span>{" "}
                <span className="text-gradient">Mughal</span>
            </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 max-w-[90%] mx-auto">
          I craft engaging web experiences with the latest technologies.
            Focused on front-end development, I build interfaces that are
            both visually stunning and highly functional.
        </p>

        {/* Button */}
        <div className="opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm sm:text-base text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};