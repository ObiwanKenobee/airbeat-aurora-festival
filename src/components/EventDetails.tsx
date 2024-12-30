import { Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const EventDetails = () => {
  return (
    <div className="py-24 px-4 bg-gradient-to-b from-transparent to-aurora-purple/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 backdrop-blur-lg bg-white/10 border-none">
            <Calendar className="w-12 h-12 mb-4 mx-auto text-aurora-blue" />
            <h3 className="text-xl font-semibold mb-2">Dates</h3>
            <p className="text-gray-300">July 4–5, 2025</p>
          </Card>
          <Card className="p-8 backdrop-blur-lg bg-white/10 border-none">
            <MapPin className="w-12 h-12 mb-4 mx-auto text-aurora-blue" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Diani Beach, Kenya</p>
          </Card>
        </div>
      </div>
    </div>
  );
};