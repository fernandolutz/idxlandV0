import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const partnerLogos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

export default function PartnerLogos() {
  return (
    <section id="partners" className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Parceiros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trabalhamos com as melhores marcas do mercado.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <Link
              href="#"
              key={logo.id}
              className="flex justify-center items-center p-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-background"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={150}
                height={75}
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
