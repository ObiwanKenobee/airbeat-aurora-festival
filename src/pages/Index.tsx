import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Newsletter } from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-aurora-purple text-white">
      <Hero />
      <Features />
      <Newsletter />
    </div>
  );
};

export default Index;