const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=750&fit=crop"
                alt="Professionellt samtal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Om mig
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Jag är legitimerad socionom med mångårig erfarenhet av att möta barn, ungdomar 
                och vuxna i samtal. Min utbildning och erfarenhet ger mig verktyg att arbeta med 
                en rad olika livssituationer och utmaningar.
              </p>
              <p>
                Mitt fokus ligger på att skapa en trygg och respektfull miljö där det finns 
                utrymme för reflektion och förändring. Jag tror på att varje människa bär på 
                egna resurser och lösningar, och min roll är att hjälpa dig att hitta dem.
              </p>
              <p>
                Jag arbetar utifrån ett lösningsfokuserat och systemiskt perspektiv, vilket 
                innebär att vi tillsammans tittar framåt mot det du vill uppnå snarare än att 
                fastna i problem. Samtalen anpassas alltid efter dina behov och förutsättningar.
              </p>
              <p className="font-medium text-foreground">
                Genom ett empatiskt och icke-dömande bemötande skapar jag en plats där du kan 
                känna dig sedd och hörd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
