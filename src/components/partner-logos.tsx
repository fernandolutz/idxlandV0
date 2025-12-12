import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const partnerLogos = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

export default function PartnerLogos() {
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
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {partnerLogos.map((logo) => (
            <Link
              href="#"
              key={logo.id}
              className="group flex justify-center items-center p-4 rounded-lg transition-all duration-300 bg-white shadow-md hover:shadow-xl hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-full h-16">
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
