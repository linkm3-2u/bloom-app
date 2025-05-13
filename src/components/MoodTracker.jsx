
import React from 'react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const moods = [
  { emoji: '😊', name: 'Happy', color: 'bg-comfort-yellow hover:bg-comfort-yellow/80' },
  { emoji: '😌', name: 'Calm', color: 'bg-comfort-blue hover:bg-comfort-blue/80' },
  { emoji: '😐', name: 'Neutral', color: 'bg-comfort-neutral hover:bg-comfort-neutral/80' },
  { emoji: '😔', name: 'Sad', color: 'bg-comfort-purple/70 hover:bg-comfort-purple/50' },
  { emoji: '😟', name: 'Anxious', color: 'bg-comfort-peach hover:bg-comfort-peach/80' },
];

const MoodTracker = ({ onMoodSelect, className }) => {
  const handleMoodSelect = (mood) => {
    console.log('mood selected is:', mood)
    if (onMoodSelect) {
      console.log('in onmoodselect is true')
      onMoodSelect(mood);
            console.log('onmoodselect has ran with mood:', mood)

    }
    toast(`You're feeling ${mood} today. That's perfectly okay.`, {
      description: "Thanks for checking in. Your mood has been logged.",
      duration: 3000,
    });
  };

  return (
    <div className={className}>
      <h3 className="text-lg font-medium mb-4">How are you feeling today?</h3>
      
      <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
        {moods.map((mood) => (
          <Button
            key={mood.name}
            variant="ghost"
            onClick={() => handleMoodSelect(mood.name)}
            className={`flex flex-col p-4 rounded-xl transition-all ${mood.color}`}
          >
            <span className="text-3xl mb-1">{mood.emoji}</span>
            <span className="text-sm">{mood.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
