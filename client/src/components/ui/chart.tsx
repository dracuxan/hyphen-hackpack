import React from "react";
import { cn } from "@/lib/utils";

// These are placeholder components since we don't have actual chart libraries installed
// In a real application, you would use libraries like Recharts, Chart.js, or D3.js

export function LineChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-4", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-gray-500">Line Chart visualization</div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full" height="60">
        <path
          d="M0,60 L20,50 L40,55 L60,40 L80,45 L100,30 L120,35 L140,20 L160,30 L180,15 L200,25 L220,10 L240,20 L260,5 L280,15 L300,10"
          fill="none"
          stroke="rgba(59, 130, 246, 0.8)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export function BarChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-green-100 to-green-50 p-4", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-gray-500">Bar Chart visualization</div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex h-[100px] items-end justify-around gap-2">
        {[45, 60, 30, 75, 85, 40, 50].map((height, i) => (
          <div
            key={i}
            className="w-8 bg-green-500 opacity-80"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function PieChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 p-4", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-gray-500">Pie Chart visualization</div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-24 w-24 rounded-full border-8 border-purple-500 border-r-purple-300 border-t-purple-400 border-l-purple-600"></div>
      </div>
    </div>
  );
}

export function AreaChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-orange-100 to-orange-50 p-4", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-gray-500">Area Chart visualization</div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full" height="100">
        <path
          d="M0,100 L20,85 L40,90 L60,70 L80,75 L100,60 L120,65 L140,50 L160,60 L180,45 L200,55 L220,40 L240,50 L260,35 L280,45 L300,40 L300,100 Z"
          fill="rgba(249, 115, 22, 0.3)"
          stroke="rgba(249, 115, 22, 0.8)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export function HeatMapChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-[200px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 p-4", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-gray-500">Heat Map visualization</div>
      </div>
      <div className="grid h-full w-full grid-cols-7 grid-rows-5 gap-1 p-4">
        {Array(35)
          .fill(0)
          .map((_, i) => {
            const opacity = Math.random() * 0.9 + 0.1;
            return (
              <div
                key={i}
                className="bg-red-500 rounded"
                style={{ opacity }}
              />
            );
          })}
      </div>
    </div>
  );
}

export function FunnelChart({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative h-[220px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 p-4", className)}
      {...props}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-sm text-gray-500">Funnel Chart visualization</div>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-3">
        <div className="w-[80%] h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white text-xs">Stage 1: 100%</div>
        <div className="w-[70%] h-8 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs">Stage 2: 70%</div>
        <div className="w-[50%] h-8 bg-blue-400 rounded-sm flex items-center justify-center text-white text-xs">Stage 3: 50%</div>
        <div className="w-[30%] h-8 bg-blue-300 rounded-sm flex items-center justify-center text-white text-xs">Stage 4: 30%</div>
        <div className="w-[15%] h-8 bg-blue-200 rounded-sm flex items-center justify-center text-blue-800 text-xs">Stage 5: 15%</div>
      </div>
    </div>
  );
}