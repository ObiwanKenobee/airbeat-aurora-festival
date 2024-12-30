import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31"); // Example date

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/10 border-none">
      <h2 className="text-2xl font-bold text-white mb-4">Festival Countdown</h2>
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-4xl font-bold text-aurora-blue">{value}</div>
            <div className="text-sm text-gray-300 capitalize">{key}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};