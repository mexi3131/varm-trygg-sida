import { Shield, Clock, CheckCircle } from "lucide-react";

const Approach = () => {
  const features = [
    {
      icon: Shield,
      title: "Trygghet & sekretess",
      description: "Allt som sägs i samtalen omfattas av absolut sekretess. Din trygghet och integritet är alltid i fokus."
    },
    {
      icon: CheckCircle,
      title: "Lösningsfokuserat",
      description: "Vi arbetar framåtriktat mot dina mål med fokus på resurser och möjligheter snarare än problem."
    },
    {
      icon: Clock,
      title: "Flexibelt & individanpassat",
      description: "Samtalen anpassas efter dina behov - både när det gäller innehåll, längd och arbetssätt."
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Så går samtalen till
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Det första samtalet är en möjlighet för oss att lära känna varandra och för dig att 
            berätta om din situation. Därefter utformar vi tillsammans hur vi ska arbeta vidare 
            utifrån dina önskemål och behov.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Praktisk information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Mottagning</h4>
              <p className="text-muted-foreground">
                Samtalen sker i trivsamma och lugna lokaler centralt beläget. 
                Digitala samtal via videolänk är också möjligt.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Tidsbokning</h4>
              <p className="text-muted-foreground">
                Tider bokas efter överenskommelse. Jag arbetar med privatpersoner 
                och svarar vanligtvis inom 1–2 arbetsdagar.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Längd</h4>
              <p className="text-muted-foreground">
                Ett samtal är ca 50-60 minuter. För barn anpassas tiden efter behov 
                och kan vara kortare.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Kostnad</h4>
              <p className="text-muted-foreground">
                Information om kostnad ges i samband med första kontakten. 
                Jag tar inte emot friskvårdskuponger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
