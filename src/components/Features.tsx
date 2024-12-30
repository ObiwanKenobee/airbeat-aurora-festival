import { Sparkles, Globe, Ticket, Headset, Leaf, Map } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "360° Holographic Stage",
    description: "Witness mythologies, historical milestones, and cosmic narratives come alive in stunning holograms",
  },
  {
    icon: Headset,
    title: "Virtual Pilgrimages",
    description: "Step into the past and explore ancient wonders through state-of-the-art VR technology",
  },
  {
    icon: Globe,
    title: "Global Exchange Zones",
    description: "Break barriers by connecting with participants worldwide in real-time AR-enhanced spaces",
  },
  {
    icon: Leaf,
    title: "Sustainability Pavilion",
    description: "Experience the power of green technology and zero-waste innovations shaping our future",
  },
  {
    icon: Ticket,
    title: "Quantum Ticketing",
    description: "Your gateway to personalized festival experiences tailored to your preferences",
  },
  {
    icon: Map,
    title: "Interactive Festival Map",
    description: "Navigate with a dynamic, 3D-rendered map featuring live updates and crowd heatmaps",
  },
];

export const Features = () => {
  return (
    <div className="py-24 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Explore the Highlights</h2>
      <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
        Discover a world where ancient traditions meet cutting-edge technology, creating unforgettable experiences that will transform your perspective.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card 
            key={index}
            className="p-6 backdrop-blur-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border-none"
          >
            <feature.icon className="w-12 h-12 mb-4 text-aurora-blue" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};