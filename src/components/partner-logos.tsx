import Image from "next/image";
import Link from "next/link";
import { Handshake } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const partnerLogos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

export default function PartnerLogos() {
  return (
    <section id="partners" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <Handshake className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Nossos Parceiros Estratégicos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Colaboramos com líderes da indústria para entregar as melhores soluções.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partnerLogos.map((logo) => (
            <Link
              href="#"
              key={logo.id}
              className="flex justify-center items-center p-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={200}
                height={100}
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
