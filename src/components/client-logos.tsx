import Image from "next/image";
import Link from "next/link";
import { Building } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-'));

export default function ClientLogos() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <Building className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Confiado por Empresas de Sucesso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Alguns dos clientes que impulsionaram seus negócios com nossas soluções.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center p-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-card"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={200}
                height={100}
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
