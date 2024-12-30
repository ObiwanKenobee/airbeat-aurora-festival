import { Card } from "@/components/ui/card";
import { Users, Activity, Leaf } from "lucide-react";

const metrics = [
  {
    icon: Users,
    title: "Total Attendees",
    value: "12,458",
    change: "+15%",
  },
  {
    icon: Activity,
    title: "Active Experiences",
    value: "847",
    change: "+23%",
  },
  {
    icon: Leaf,
    title: "Carbon Offset",
    value: "28.5t",
    change: "+12%",
  },
];

export const MetricsPanel = () => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-white/10 border-none">
      <h2 className="text-2xl font-bold text-white mb-4">Live Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-white/5 backdrop-blur-sm"
          >
            <metric.icon className="w-8 h-8 text-aurora-blue mb-2" />
            <h3 className="text-lg font-semibold text-white">{metric.title}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white">{metric.value}</span>
              <span className="text-sm text-aurora-green">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};