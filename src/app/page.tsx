import Header from "@/components/header";
import Hero from "@/components/hero";
import PartnerLogos from "@/components/partner-logos";
import ClientLogos from "@/components/client-logos";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <PartnerLogos />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
