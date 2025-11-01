const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Anna Karlsson</h3>
            <p className="text-sm text-muted-foreground">
              Legitimerad socionom och samtalsterapeut med fokus på barn, ungdomar och vuxna.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Om mig
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Tjänster
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:anna.karlsson@exempel.se" className="hover:text-primary transition-colors">
                  anna.karlsson@exempel.se
                </a>
              </li>
              <li>
                <a href="tel:+46701234567" className="hover:text-primary transition-colors">
                  070-123 45 67
                </a>
              </li>
              <li>Stockholm</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anna Karlsson. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
