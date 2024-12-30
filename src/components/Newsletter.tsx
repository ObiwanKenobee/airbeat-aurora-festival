import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for joining!",
      description: "You're now on the list for exclusive AIRBEAT™ AURORA updates.",
    });
    setEmail("");
  };

  return (
    <div className="py-24 px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Be Part of the Experience</h2>
      <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
        Get ready to redefine entertainment. Sign up for exclusive updates and early access.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-none"
          required
        />
        <Button type="submit">Join Now</Button>
      </form>
    </div>
  );
};