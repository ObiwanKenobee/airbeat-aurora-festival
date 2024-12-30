import { Hologram, Globe, Ticket, VrHeadset, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Hologram,
    title: "Immersive Holo-Stage",
    description: "Walk through history and mythology with holographic 360° storytelling",
  },
  {
    icon: Globe,
    title: "Global Cultural Exchange",
    description: "Engage with festival-goers worldwide in real time",
  },
  {
    icon: Ticket,
    title: "Quantum Ticketing",
    description: "A festival experience uniquely tailored to you",
  },
  {
    icon: VrHeadset,
    title: "Virtual Pilgrimages",
    description: "Relive historical milestones in stunning virtual reality",
  },
  {
    icon: Leaf,
    title: "Sustainability Pavilion",
    description: "Experience the power of green energy at this zero-waste event",
  },
];

export const Features = () => {
  return (
    <div className="py-24 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">What You'll Discover</h2>
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