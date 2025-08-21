import { FeaturesSection } from "./components/home/FeaturesSection";
import Hero from "./components/home/Hero";
import ProductHighlights from "./components/home/ProductHighlights";
import { TestimonialsSection } from "./components/home/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductHighlights/>
      <FeaturesSection/>
      <TestimonialsSection/>
    </div>
  );
}
