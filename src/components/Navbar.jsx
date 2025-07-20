import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkTheme();
    window.addEventListener("themeChange", checkTheme);
    return () => window.removeEventListener("themeChange", checkTheme);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow"
          : "py-6"
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 w-full">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-3 z-50">
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-primary">
            <span className="text-glow text-foreground">Abrar</span>{" "}
            <span className="text-primary">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        {!isMenuOpen && (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground z-50"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        )}

        <div
          className={cn(
            "top-full mt-2 absolute right-4 w-64 bg-background/95 border border-border rounded-xl shadow-xl z-50 p-6 flex flex-col space-y-4 transition-all duration-300 ease-in-out md:hidden",
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 pointer-events-none"
          )}
        >
          {/* Close Button */}
          <div className="flex justify-end -mt-2 -mr-2">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 text-muted-foreground"
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items */}
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-3 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};