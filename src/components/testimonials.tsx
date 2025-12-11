import { MessageSquare } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Jane Doe",
    company: "Innovate Corp",
    quote: "A Index Digital revolucionou nossa presença online. A expertise e o profissionalismo da equipe foram excepcionais do início ao fim. Resultados incríveis!",
  },
  {
    id: "testimonial-2",
    name: "John Smith",
    company: "Quantum Solutions",
    quote: "Trabalhar com a Index Digital foi um divisor de águas. Eles não apenas entregaram o que prometeram, mas superaram todas as nossas expectativas. Recomendo fortemente.",
  },
  {
    id: "testimonial-3",
    name: "Emily White",
    company: "Stellar Dynamics",
    quote: "A atenção aos detalhes e a abordagem centrada no cliente da Index Digital são incomparáveis. Eles realmente entendem nossas necessidades e entregam soluções de alto impacto.",
  },
];

const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-card">
      <div className="text-center">
        <MessageSquare className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
          O que Nossos Clientes Dizem
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Histórias reais de sucesso e satisfação.
        </p>
      </div>
      <div className="mt-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = testimonialImages.find(img => img.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <Card className="bg-background border-border shadow-lg">
                      <CardContent className="pt-6">
                        <blockquote className="text-lg text-foreground italic">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                      <CardFooter className="mt-4 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={image?.imageUrl} alt={testimonial.name} data-ai-hint={image?.imageHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
