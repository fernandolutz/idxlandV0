import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Globe } from "lucide-react";

const highlightsData = [
  {
    icon: Calendar,
    text: "Desde 2019 no mercado",
  },
  {
    icon: Users,
    text: "Mais de 100 clientes ativos",
  },
  {
    icon: Globe,
    text: "Atendimento em todo Brasil",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="pb-16 sm:pb-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightsData.map((highlight, index) => (
            <Card key={index} className="bg-card border-border/50">
              <CardContent className="p-6 flex items-center justify-center gap-4">
                <highlight.icon className="h-6 w-6 text-primary" />
                <p className="text-lg font-medium text-foreground">{highlight.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
