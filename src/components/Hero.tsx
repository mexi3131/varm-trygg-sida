import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-sm text-accent-foreground">
              <Heart className="w-4 h-4" />
              <span>Socionom & samtalsterapeut</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Samtal som gör skillnad
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              För barn, unga och vuxna
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Varmt välkommen till trygga samtal som skapar utrymme för återhämtning och förändring. 
              Jag arbetar med barn, ungdomar och vuxna i en säker och respektfull miljö.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Boka eller kontakta mig
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg"
                onClick={() => scrollToSection("about")}
              >
                Läs mer om mig
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=800&fit=crop"
                alt="Anna Karlsson - Socionom och samtalsterapeut"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
