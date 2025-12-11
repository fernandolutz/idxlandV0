import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import Solutions from "@/components/solutions";
import PartnerLogos from "@/components/partner-logos";
import ClientLogos from "@/components/client-logos";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 w-full">
        <HeroBanner />
        <Solutions />
        <PartnerLogos />
        <ClientLogos />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
