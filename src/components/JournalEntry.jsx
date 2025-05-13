import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';

const JournalEntry = ({ onSave, className }) => {
  const prompts = [
    "How are you feeling right now? What led to this feeling?",
    "What's one small thing you're grateful for today?",
    "What's one challenging thought you had today, and how can you reframe it?",
    "What's one small way you took care of yourself today?",
    "What would feel comforting to you right now?",
  ];

  const getRandomPrompt = (exclude) => {
    let newPrompt;
    do {
      newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (newPrompt === exclude);
    return newPrompt;
  };

  const [entry, setEntry] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [prompt, setPrompt] = useState(() => getRandomPrompt(null));

  const handleSave = async () => {
    if (!entry.trim()) {
      toast.warning("Please write something before saving.");
      return;
    }

    setIsSaving(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate saving
      if (onSave) await onSave(entry);
      toast.success("Journal entry saved successfully!");
      setEntry('');
    } catch (error) {
      toast.error("Failed to save entry.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleNewPrompt = () => {
    const newPrompt = getRandomPrompt(prompt);
    setPrompt(newPrompt);
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Journal Entry</CardTitle>
        <CardDescription>A place for your thoughts and feelings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-3 rounded-lg bg-comfort-neutral/30 italic text-sm flex items-start justify-between gap-2">
          <span>Prompt: {prompt}</span>
          <Button
            variant="outline"
            size="sm"
            className="text-xs px-2 py-1"
            onClick={handleNewPrompt}
          >
            New Prompt
          </Button>
        </div>
        <Textarea
          placeholder="Write your thoughts here..."
          className="min-h-[150px] text-base border-comfort-blue/20 focus-visible:ring-comfort-blue/40"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          onKeyDown={(e) => {
            if (e.ctrlKey && e.key === 'Enter') handleSave();
          }}
        />
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="comfort-button bg-comfort-blue hover:bg-comfort-blue/80 text-foreground"
        >
          {isSaving ? 'Saving...' : 'Save Entry'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JournalEntry;
