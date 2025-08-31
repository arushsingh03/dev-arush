"use client";
import React, { useState, useEffect, useRef } from "react";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

interface CountingStatsProps {
  stats?: StatItem[];
  duration?: number;
  className?: string;
}

const CountingStats: React.FC<CountingStatsProps> = ({
  stats = [
    { value: 50, label: "Freelance Client's", suffix: "+" },
    { value: 3, label: "Year's of Experience", suffix: "+" },
    { value: 35, label: "Project's", suffix: "+" },
  ],
  duration = 2000,
  className = "",
}) => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const increment = end / (duration / 50);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }

              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                newCounts[index] = Math.floor(start);
                return newCounts;
              });
            }, 50);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, stats, duration]);

  return (
    <div ref={componentRef} className={`w-full py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl md:text-8xl lg:text-9xl font-bold text-blue-500 mb-4 tracking-tight font-grovant">
                {counts[index]}
                {stat.suffix || ""}
              </div>
              <div className="text-lg md:text-sm text-white font-semibold uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <CountingStats />
    </div>
  );
};

export { CountingStats, StatsSection };
export default CountingStats;
