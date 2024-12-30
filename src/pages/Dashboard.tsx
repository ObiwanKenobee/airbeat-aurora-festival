import { CountdownTimer } from "@/components/dashboard/CountdownTimer";
import { MetricsPanel } from "@/components/dashboard/MetricsPanel";
import { EventHighlights } from "@/components/dashboard/EventHighlights";
import { OperationsPanel } from "@/components/dashboard/OperationsPanel";
import { CustomizationHub } from "@/components/dashboard/CustomizationHub";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-aurora-purple p-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <CountdownTimer />
        </div>
        <div>
          <EventHighlights />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-3">
          <OperationsPanel />
        </div>

        {/* Center Content */}
        <div className="lg:col-span-6">
          <MetricsPanel />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3">
          <CustomizationHub />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;