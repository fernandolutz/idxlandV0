import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
          Inovação Digital que Impulsiona Resultados
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
          Na Index Digital, combinamos tecnologia de ponta e expertise para criar soluções digitais que transformam o seu negócio e constroem confiança.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">Entre em Contato</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#partners">Nossos Parceiros</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
