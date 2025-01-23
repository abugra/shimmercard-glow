import React from 'react';
import { cn } from "@/lib/utils";

interface ShimmerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const ShimmerCard = ({ isLoading = false, children, className, ...props }: ShimmerCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)]",
        "transition-all duration-300 ease-in-out hover:shadow-[0_4px_6px_-1px_rgb(0,0,0,0.1),0_2px_4px_-2px_rgb(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      {isLoading ? (
        <div className="space-y-3">
          <div className="h-14 rounded-lg bg-gray-100">
            <div className="relative overflow-hidden h-full rounded-lg bg-gray-100">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-3 w-3/4 rounded-lg bg-gray-100">
              <div className="relative overflow-hidden h-full rounded-lg bg-gray-100">
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
              </div>
            </div>
            <div className="h-3 rounded-lg bg-gray-100">
              <div className="relative overflow-hidden h-full rounded-lg bg-gray-100">
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ShimmerCard;