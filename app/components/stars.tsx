import React, { ReactNode } from 'react';
import { SparklesCore } from "../../components/ui/sparkles";
interface BackgroundSparklesProps {
    children: ReactNode;
  }
  
  export function BackgroundSparkles({ children }: BackgroundSparklesProps) {
    return (
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="relative z-20 w-full">
          {children}
        </div>
      </div>
    );
  }