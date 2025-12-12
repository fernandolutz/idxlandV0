import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const partnerLogos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

export default function PartnerLogos() {
    const allLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="w-full py-16 sm:py-24 bg-sky-100/80">
      <div className="container">
        <div className="text-center text-gray-800">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Parceiros
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trabalhamos com as melhores marcas do mercado.
          </p>
        </div>
      </div>
      <div
        className="relative mt-12 w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-scroll">
          {allLogos.map((logo, index) => (
            <Link
              href="#"
              key={`${logo.id}-${index}`}
              className="group flex-shrink-0 flex justify-center items-center p-4 rounded-lg bg-white shadow-md mx-4 h-24 w-48 transition-transform duration-300 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  fill
                  className="object-contain"
                  data-ai-hint={logo.imageHint}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}