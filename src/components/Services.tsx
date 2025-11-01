import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Barn & föräldrar",
      description: "Stöd vid oro, känsloreglering, svårigheter i skolan eller hemma. Jag arbetar både med barn direkt och erbjuder föräldrasamtal för att stärka er relation och hitta vägar framåt tillsammans.",
      examples: ["Oro och ångest", "Känsloreglering", "Skolsvårigheter", "Familjerelationer"]
    },
    {
      icon: Heart,
      title: "Unga & vuxna",
      description: "Samtalsstöd vid stress, låg självkänsla, sorg, relationsproblem eller andra livskriser. Samtalen anpassas efter dina behov och kan vara både kortsiktiga och mer långsiktiga.",
      examples: ["Stress och utmattning", "Självkänsla", "Sorg och förlust", "Relationer"]
    },
    {
      icon: MessageCircle,
      title: "Stödjande samtal",
      description: "Ibland behöver man bara någon att prata med i en svår period. Jag erbjuder stödjande samtal där du får reflektera över din situation i en trygg miljö, utan krav på diagnos eller behandling.",
      examples: ["Livsövergångar", "Vägval", "Föräldrastöd", "Krishantering"]
    }
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Vem jag hjälper
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jag tar emot barn, ungdomar och vuxna i olika livssituationer. 
            Varje samtal utgår från dina unika behov och förutsättningar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.examples.map((example, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
