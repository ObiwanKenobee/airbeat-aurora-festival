import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sparkles, Globe, Headset, Leaf } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Holo-Stage",
    description: "360° Storytelling",
  },
  {
    icon: Globe,
    title: "Global Exchange",
    description: "Real-time Cultural Connect",
  },
  {
    icon: Headset,
    title: "VR Pilgrimages",
    description: "Historical Journeys",
  },
  {
    icon: Leaf,
    title: "Eco Hub",
    description: "Zero-waste Innovation",
  },
];

export const EventHighlights = () => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-white/10 border-none">
      <h2 className="text-2xl font-bold text-white mb-4">Festival Highlights</h2>
      <Carousel>
        <CarouselContent>
          {highlights.map((highlight, index) => (
            <CarouselItem key={index}>
              <div className="text-center p-4">
                <highlight.icon className="w-12 h-12 mx-auto mb-2 text-aurora-blue" />
                <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
};