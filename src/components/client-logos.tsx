import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-'));

export default function ClientLogos() {
  return (
    <section id="clients" className="w-full py-16 sm:py-24 bg-sky-200/70">
      <div className="container">
        <div className="text-center text-gray-800">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Alguns Clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empresas que confiam em nossos serviços
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {clientLogos.map((logo) => (
            <div
              key={logo.id}
              className="group flex justify-center items-center p-2 rounded-lg transition-all duration-300 bg-white shadow-md hover:shadow-xl hover:scale-105"
            >
               <div className="relative w-full h-20">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  fill
                  className="object-contain"
                  data-ai-hint={logo.imageHint}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
