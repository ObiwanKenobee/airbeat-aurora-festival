import { useState } from "react";
import { Card } from "@/components/ui/card";
import { User, Map, Globe } from "lucide-react";
import { HoverNavigation } from "./HoverNavigation";

const customizations = [
  {
    icon: User,
    title: "Your Profile",
    description: "Personalize your experience",
  },
  {
    icon: Map,
    title: "Festival Map",
    description: "Interactive 3D navigation",
  },
  {
    icon: Globe,
    title: "Language",
    description: "Real-time translations",
  },
];

export const CustomizationHub = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Card className="p-6 backdrop-blur-lg bg-white/10 border-none">
        <h2 className="text-2xl font-bold text-white mb-4">Customize</h2>
        <div className="space-y-4">
          {customizations.map((custom, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => setIsNavOpen(true)}
            >
              <custom.icon className="w-8 h-8 text-aurora-blue" />
              <div>
                <h3 className="font-semibold text-white">{custom.title}</h3>
                <p className="text-sm text-gray-300">{custom.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <HoverNavigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  );
};