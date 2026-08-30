import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <Services />
        <Products />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
