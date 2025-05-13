
import React from 'react';
import { cn } from '../lib/utils';
import { Badge } from '@/components/ui/badge';

const Companion = ({ 
  stage = 0, 
  mood = 'happy',
  badges = [],
  className
}) => {
  // Growth stages for our plant companion
  const plantStages = [
    { name: 'Seed', height: 'h-14', color: 'bg-comfort-yellow' },
    { name: 'Sprout', height: 'h-20', color: 'bg-comfort-green' },
    { name: 'Sapling', height: 'h-28', color: 'bg-comfort-blue' },
    { name: 'Plant', height: 'h-40', color: 'bg-comfort-purple' },
    { name: 'Tree', height: 'h-52', color: 'bg-comfort-peach' },
  ];

  const currentStage = plantStages[Math.min(stage, plantStages.length - 1)];

  // Different "face" expressions based on mood
  const getMoodFace = () => {
    switch (mood) {
      case 'happy':
        return '◠‿◠';
      case 'calm':
        return '◠‿◠';
      case 'sad':
        return '◡︵◡';
      case 'worried':
        return '◑.◑';
      default:
        return '◠‿◠';
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative">
        {/* Plant body */}
        <div className={cn(
          "relative w-16 rounded-full transition-all duration-700 ease-in-out",
          currentStage.height,
          currentStage.color,
          "animate-pulse-gentle"
        )}>
          {/* Plant face */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl">
            {getMoodFace()}
          </div>
          
          {/* Plant pot */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-comfort-neutral rounded-t-3xl rounded-b-xl shadow-inner" />
        </div>
        
        {/* Badges floating around */}
        {badges.length > 0 && (
          <div className="absolute -right-4 top-0 flex flex-col gap-2 animate-float">
            {badges.slice(0, 3).map((badge, i) => (
              <Badge 
                key={i} 
                className={cn(
                  "bg-white/80 text-xs", 
                  i === 0 ? "animate-pulse-gentle" : ""
                )}
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      <p className="mt-10 text-center text-sm font-medium">
        {currentStage.name} • Level {stage + 1}
      </p>
    </div>
  );
};

export default Companion;
