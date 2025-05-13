
import React from 'react';
import Companion from '../components/Companion';
import ProgressChart from '../components/ProgressChart';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';

const Progress = () => {
  // Sample data for charts
  const moodData = [
    { day: 'Mon', moodScore: 4 },
    { day: 'Tue', moodScore: 5 },
    { day: 'Wed', moodScore: 6 },
    { day: 'Thu', moodScore: 7 },
    { day: 'Fri', moodScore: 6 },
    { day: 'Sat', moodScore: 8 },
    { day: 'Sun', moodScore: 7 },
  ];

  // Fixing the TypeScript errors by adding moodScore to sleepData
  const sleepData = [
    { day: 'Mon', moodScore: 4, sleepHours: 6 },
    { day: 'Tue', moodScore: 5, sleepHours: 7 },
    { day: 'Wed', moodScore: 6, sleepHours: 7.5 },
    { day: 'Thu', moodScore: 7, sleepHours: 6 },
    { day: 'Fri', moodScore: 6, sleepHours: 8 },
    { day: 'Sat', moodScore: 8, sleepHours: 9 },
    { day: 'Sun', moodScore: 7, sleepHours: 7 },
  ];

  // Fixing the TypeScript errors by adding moodScore to anxietyData
  const anxietyData = [
    { day: 'Mon', moodScore: 4, anxietyLevel: 6 },
    { day: 'Tue', moodScore: 5, anxietyLevel: 7 },
    { day: 'Wed', moodScore: 6, anxietyLevel: 5 },
    { day: 'Thu', moodScore: 7, anxietyLevel: 4 },
    { day: 'Fri', moodScore: 6, anxietyLevel: 3 },
    { day: 'Sat', moodScore: 8, anxietyLevel: 2 },
    { day: 'Sun', moodScore: 7, anxietyLevel: 3 },
  ];

  // Sample achievements
  const achievements = [
    { name: "First Check-In", date: "May 1", description: "Completed your first daily check-in" },
    { name: "3-Day Streak", date: "May 4", description: "Logged your mood for 3 days in a row" },
    { name: "Journal Master", date: "May 5", description: "Wrote 5 journal entries" },
    { name: "Mindful Week", date: "May 5", description: "Completed a full week of check-ins" },
  ];

  return (
    <div className="page-container max-w-4xl mx-auto py-8 px-4 pb-24">
      <h1 className="text-2xl font-medium mb-6">Your Progress</h1>
      <p className="text-muted-foreground mb-8">
        See how you're growing and improving day by day. Every small step counts!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <Companion 
            stage={2} 
            mood="happy" 
            badges={["7-Day Streak", "Meditation", "Journaling"]}
          />
        </div>
        
        <div className="md:col-span-2 grid grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement.name} className="flex items-start gap-3">
                    <Badge className="bg-comfort-blue/70 text-xs mt-0.5">
                      {achievement.date}
                    </Badge>
                    <div>
                      <p className="font-medium text-sm">{achievement.name}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="space-y-8">
        <ProgressChart 
          data={moodData}
          title="Mood Tracker"
          description="See how your mood has changed over the past week"
          className="animate-fade-in"
        />
        
        <ProgressChart 
          data={sleepData}
          title="Sleep Tracker"
          description="Your sleep patterns over the past week (hours)"
          className="animate-fade-in"
        />
        
        <ProgressChart 
          data={anxietyData}
          title="Anxiety Levels"
          description="Track your anxiety levels (lower is better)"
          className="animate-fade-in"
        />
      </div>
      
      <div className="fixed top-20 right-20 w-40 h-40 rounded-full bg-comfort-blue/10 blur-3xl -z-10" />
      <div className="fixed bottom-20 left-20 w-60 h-60 rounded-full bg-comfort-purple/10 blur-3xl -z-10" />
    </div>
  );
};

export default Progress;
