import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { User, Map, Globe, Settings, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: LucideIcon;  // Changed from SVGSVGElement to LucideIcon
  title: string;
  description: string;
  path: string;
}

const navItems: NavItem[] = [
  {
    icon: User,
    title: "Your Profile",
    description: "Personalize your experience",
    path: "/dashboard/profile",
  },
  {
    icon: Settings,
    title: "Personalize",
    description: "Tailor your preferences",
    path: "/dashboard/personalize",
  },
  {
    icon: Map,
    title: "Festival Map",
    description: "Interactive 3D navigation",
    path: "/dashboard/map",
  },
  {
    icon: Globe,
    title: "Language",
    description: "Real-time translations",
    path: "/dashboard/language",
  },
];

export const HoverNavigation = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
         onClick={onClose}>
      <Card 
        className="p-6 w-[90vw] max-w-2xl bg-aurora-purple/90 border-none backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {navItems.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "group relative p-6 rounded-lg cursor-pointer transition-all duration-300",
                "hover:bg-white/10 hover:scale-105",
                hoveredIndex === index ? "bg-white/10 scale-105" : "bg-white/5"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleNavigation(item.path)}
            >
              <div className="flex items-start gap-4">
                <item.icon className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  hoveredIndex === index ? "text-aurora-blue" : "text-white"
                )} />
                <div>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
              <div className={cn(
                "absolute inset-0 border border-aurora-blue/0 rounded-lg transition-all duration-300",
                hoveredIndex === index ? "border-aurora-blue/50" : ""
              )} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};