import { useState, useEffect } from "react";
import ShimmerCard from "@/components/ShimmerCard";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight">Elegant Cards</h1>
          <p className="text-gray-500">With smooth shimmer loading effects</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <ShimmerCard isLoading={isLoading}>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Premium Design</h3>
              <p className="text-gray-600">
                Crafted with attention to detail and smooth animations for a premium feel.
              </p>
            </div>
          </ShimmerCard>

          <ShimmerCard isLoading={isLoading}>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Elegant Interactions</h3>
              <p className="text-gray-600">
                Subtle hover effects and transitions create a sophisticated user experience.
              </p>
            </div>
          </ShimmerCard>
        </div>
      </div>
    </div>
  );
};

export default Index;