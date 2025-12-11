import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="home" className="relative w-full text-primary-foreground py-20 md:py-32">
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/patterns/hero-background.png')" }}
        ></div>
        <div className="absolute inset-0 bg-primary/80"></div>

      <div className="container relative z-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Qual o futuro da TI da sua empresa?
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
          Transformamos tecnologia em solução prática para o seu negócio
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="#solutions">Conheça Nossos Serviços</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="#contact">Entre em Contato</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="#solutions" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
