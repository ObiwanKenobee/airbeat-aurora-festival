import { Button } from "@/components/ui/button";

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
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-green">
          AIRBEAT™ AURORA
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Where technology meets culture, and imagination knows no bounds
        </p>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-aurora-purple to-aurora-blue hover:opacity-90 transition-opacity"
        >
          Reserve Your Spot
        </Button>
      </div>
    </div>
  );
};