import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { StatsScroll } from "@/components/stats-scroll";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <StatsScroll />
      <Services />
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
