import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }}>
      <div className="container text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
          Qual o futuro da TI da sua empresa?
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-primary-foreground/80">
          Transformamos tecnologia em solução prática para o seu negócio
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="#contact">Conheça Nossos Serviços</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
            <Link href="#contact">Entre em Contato</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
