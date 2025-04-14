
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EditorPreviewSection from "@/components/EditorPreviewSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        <HowItWorksSection />
        <EditorPreviewSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
