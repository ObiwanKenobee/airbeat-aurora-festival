import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aurora-blue/30 rounded-full filter blur-3xl animate-aurora-flow"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-aurora-purple/30 rounded-full filter blur-3xl animate-aurora-flow delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-aurora-green/30 rounded-full filter blur-3xl animate-aurora-flow delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green">
          AIRBEAT™ AURORA
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Welcome to the future of immersive entertainment—a transformative journey where technology, culture, and sustainability converge. This is more than a festival; it's a global movement that unites humanity through multisensory experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-aurora-purple to-aurora-blue hover:opacity-90 transition-opacity"
          >
            Reserve Your Spot
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-aurora-blue text-aurora-blue hover:bg-aurora-blue/10"
          >
            Explore the Experience
          </Button>
        </div>
      </div>
    </div>
  );
};