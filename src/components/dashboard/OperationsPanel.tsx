import { Card } from "@/components/ui/card";
import { Shield, Calendar, BarChart } from "lucide-react";

const operations = [
  {
    icon: Calendar,
    title: "Event Schedule",
    description: "View and manage timeline",
  },
  {
    icon: Shield,
    title: "Security Status",
    description: "All systems operational",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Real-time performance data",
  },
];

export const OperationsPanel = () => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-white/10 border-none">
      <h2 className="text-2xl font-bold text-white mb-4">Operations</h2>
      <div className="space-y-4">
        {operations.map((op, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
          >
            <op.icon className="w-8 h-8 text-aurora-blue" />
            <div>
              <h3 className="font-semibold text-white">{op.title}</h3>
              <p className="text-sm text-gray-300">{op.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};