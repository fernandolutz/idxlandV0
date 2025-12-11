import Image from "next/image";
import { Building } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-'));

export default function ClientLogos() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-sky-100 text-gray-800">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Alguns Clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empresas que confiam em nossos serviços
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center p-4 rounded-lg transition-transform duration-300 hover:scale-105 bg-white shadow-md hover:shadow-xl"
            >
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={150}
                height={75}
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