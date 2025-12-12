import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-'));

export default function ClientLogos() {
  const allLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="w-full py-16 sm:py-24 bg-white">
      <div className="container">
        <div className="text-center text-gray-800">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Alguns Clientes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empresas que confiam em nossos serviços
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
            <div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0 flex justify-center items-center mx-8"
              style={{ height: '6rem' }} 
            >
              <div className={cn(
                  "relative h-full w-48",
                  logo.id === 'client-3' && 'scale-150'
                )}>
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
