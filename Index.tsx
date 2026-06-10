import Header from "@/Header";
import HeroSection from "@/HeroSection";
import AboutSection from "@/AboutSection";
import GallerySection from "@/GallerySection";
import TestimonialsSection from "@/TestimonialsSection";
import PriceSection from "@/PriceSection";
import OrderSection from "@/OrderSection";
import ContactSection from "@/ContactSection";
import Footer from "@/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <PriceSection />
      <TestimonialsSection />
      <OrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
