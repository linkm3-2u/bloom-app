
import React, { useState } from 'react';
import MoodTracker from '../components/MoodTracker';
import JournalEntry from '../components/JournalEntry';

const CheckIn = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  
  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };
  
  const handleJournalSave = (entry) => {
    console.log('Journal entry saved:', { mood: selectedMood, entry });
    // In a real app, this would save to a database
  };
  
  return (
    <div className="page-container mx-auto py-8 px-4 pt-24">
      <h1 className="text-2xl font-medium mb-6">Daily Check-In</h1>
      <p className="text-muted-foreground mb-8">
        Take a moment to reflect on how you're feeling today. This helps track your progress over time.
      </p>
      
      <div className="space-y-10">
        <MoodTracker onMoodSelect={handleMoodSelect} className="animate-fade-in" />
        
        <JournalEntry onSave={handleJournalSave} className="animate-fade-in" />
      </div>
      
      {/* Decorative background elements */}
      <div className="fixed top-20 right-20 w-40 h-40 rounded-full bg-comfort-green/10 blur-3xl -z-10" />
      <div className="fixed bottom-20 left-20 w-60 h-60 rounded-full bg-comfort-blue/10 blur-3xl -z-10" />
    </div>
  );
};

export default CheckIn;
