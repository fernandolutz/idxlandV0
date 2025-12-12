import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { IndexDigitalLogo } from "./icons";

export default function HeroBanner() {
  return (
    <section id="home" className="relative w-full text-primary-foreground overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/patterns/hero-background.png')" }}
      ></div>
      <div className="absolute inset-0 bg-primary/80"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-56px)] md:min-h-0 md:h-[550px] py-12 md:py-0">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              Qual o futuro da TI da sua empresa?
            </h1>
            <p className="mt-6 max-w-3xl mx-auto md:mx-0 text-lg md:text-xl text-primary-foreground/80">
              Transformamos tecnologia em solução prática para o seu negócio
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="#solutions">Conheça Nossos Serviços</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="#contact">Entre em Contato</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 justify-center items-center relative mt-12 md:mt-0">
            <div className="relative w-72 h-72 text-white">
                <div 
                    className="absolute inset-0 bg-white/20 rounded-full blur-3xl"
                    style={{ filter: 'blur(80px)' }}
                ></div>
                <IndexDigitalLogo className="w-full h-full relative z-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Link href="#solutions" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
