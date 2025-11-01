import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Anna Karlsson
          </button>
          <div className="hidden md:flex gap-6">
            <Button variant="ghost" onClick={() => scrollToSection("hero")}>
              Start
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              Om mig
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("services")}>
              Tjänster
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
