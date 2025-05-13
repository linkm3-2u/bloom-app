import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import JournalEntry from '../components/JournalEntry';
import { ArrowLeft, CalendarDays, FileText, Pencil } from 'lucide-react';
import { format } from 'date-fns';

const Journaling = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [activeTab, setActiveTab] = useState('write');
  
  // Simulate loading entries from storage
  useEffect(() => {
    // In a real app, this would fetch from a database
    const mockEntries = [
      { 
        id: 1, 
        content: "Today was a good day. I practiced meditation for 10 minutes and felt more focused afterward.",
        mood: "happy",
        date: new Date(2025, 4, 12) // May 12, 2025
      },
      { 
        id: 2, 
        content: "Feeling a bit anxious about the upcoming presentation, but I'm trying to use the breathing techniques I learned.",
        mood: "anxious",
        date: new Date(2025, 4, 10) // May 10, 2025
      },
      { 
        id: 3, 
        content: "I had a good conversation with my friend today. It reminded me of the importance of social connections.",
        mood: "grateful",
        date: new Date(2025, 4, 8) // May 8, 2025
      }
    ];
    
    setJournalEntries(mockEntries);
  }, []);

  const handleSaveJournal = (entry) => {
    const newEntry = {
      id: Date.now(),
      content: entry,
      date: new Date(),
      mood: "reflective" // Default mood
    };
    
    setJournalEntries(prev => [newEntry, ...prev]);
    toast.success("Journal entry saved successfully!");
    setActiveTab('history');
  };

  const handleDeleteEntry = (id) => {
    setJournalEntries(prev => prev.filter(entry => entry.id !== id));
    toast.success("Journal entry deleted");
  };

  return (
    <div className="container max-w-3xl mx-auto py-8 px-4 pb-24">
      <h1 className="text-2xl font-medium mb-6">Journaling</h1>
      <p className="text-muted-foreground mb-8">
        Write your thoughts and feelings or view your previous journal entries.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6 w-full grid grid-cols-2">
          <TabsTrigger value="write" className="text-base flex items-center gap-2">
            <Pencil size={16} />
            Write
          </TabsTrigger>
          <TabsTrigger value="history" className="text-base flex items-center gap-2">
            <FileText size={16} />
            History
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="write" className="animate-fade-in">
          <JournalEntry onSave={handleSaveJournal} />
        </TabsContent>
        
        <TabsContent value="history" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays size={20} />
                Journal History
              </CardTitle>
              <CardDescription>
                Review your past reflections and track your emotional journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              {journalEntries.length > 0 ? (
                <div className="space-y-6">
                  {journalEntries.map((entry) => (
                    <Card key={entry.id} className="border-comfort-blue/20">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <CalendarDays size={14} />
                            {format(entry.date, 'MMMM d, yyyy')}
                          </div>
                          <div className="px-2 py-1 rounded-md text-xs font-medium bg-comfort-purple/20 text-comfort-purple">
                            {entry.mood}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="whitespace-pre-wrap">{entry.content}</p>
                      </CardContent>
                      <CardFooter className="flex justify-end pt-0">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-xs text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteEntry(entry.id)}
                        >
                          Delete
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4">
                    <FileText size={48} className="mx-auto text-comfort-blue/30" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No entries yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start journaling to see your entries here
                  </p>
                  <Button 
                    onClick={() => setActiveTab('write')}
                    className="bg-comfort-blue hover:bg-comfort-blue/80 text-foreground"
                  >
                    <Pencil size={16} className="mr-2" />
                    Write Your First Entry
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Decorative background elements */}
      <div className="fixed top-40 left-20 w-40 h-40 rounded-full bg-comfort-purple/10 blur-3xl -z-10" />
      <div className="fixed bottom-40 right-20 w-60 h-60 rounded-full bg-comfort-blue/10 blur-3xl -z-10" />
    </div>
  );
};

export default Journaling;
