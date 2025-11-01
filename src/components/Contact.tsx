import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulera formulärinlämning
    setTimeout(() => {
      toast({
        title: "Tack för ditt meddelande!",
        description: "Jag återkommer till dig inom 1-2 arbetsdagar.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Kontakta mig
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hör av dig så berättar jag mer om hur vi kan arbeta tillsammans. 
            Jag svarar vanligtvis inom 1–2 arbetsdagar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Kontaktuppgifter
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-post</p>
                    <a 
                      href="mailto:anna.karlsson@exempel.se" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      anna.karlsson@exempel.se
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefon</p>
                    <a 
                      href="tel:+46701234567" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      070-123 45 67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Plats</p>
                    <p className="text-muted-foreground">
                      Centralt i Stockholm<br />
                      Digitala samtal möjligt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <h4 className="font-semibold text-foreground mb-3">Viktigt att veta</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Första kontakten är kostnadsfri</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Jag svarar vanligtvis inom 1-2 arbetsdagar</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent mt-1">✓</span>
                  <span>Alla uppgifter behandlas konfidentiellt</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 border border-border">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Namn *
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ditt namn"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-post *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="din.epost@exempel.se"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="070-123 45 67"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Meddelande *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Berätta lite om vad du söker hjälp med..."
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Skickar..." : "Skicka meddelande"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Genom att skicka formuläret godkänner du att dina uppgifter behandlas 
                för att besvara din förfrågan.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
