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
    name: "Fernando L.",
    company: "Gerente de TI, Agri-Service",
    quote: "A IndexTI nos ajudou a levar tecnologias de grandes empresas para a nossa realidade, trazendo mais confiabilidade e estabilidade para a infraestrutura. Hoje contamos com uma disponibilidade superior a 99% e temos a tranquilidade de saber que o ambiente está bem gerenciado. O atendimento da equipe é sempre pontual, rápido e eficiente, o que faz da IndexTI um parceiro essencial para o nosso negócio.",
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
    <section id="testimonials" className="w-full py-16 sm:py-24">
      <div className="container">
        <div className="bg-card rounded-lg p-10">
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
        </div>
      </div>
    </section>
  );
}
