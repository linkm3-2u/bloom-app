import React, { useState, useEffect } from 'react';
import Companion from '../components/Companion';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import MoodTracker from '../components/MoodTracker';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from "lucide-react";
import WelcomePage from './WelcomePage';

const Home = () => {
  const [userName, setUserName] = useState("Friend");
  const [showMoodTracker, setShowMoodTracker] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dailyTip, setDailyTip] = useState("");
  const [quote, setQuote] = useState("");
  const isLoggedIn = !!localStorage.getItem("userName");

  useEffect(() => {
    if (isLoggedIn) {
      const saved = localStorage.getItem("userName");
      if (saved) setUserName(saved);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    setDailyTip("Take a few minutes today to practice deep breathing - inhale for 4 seconds, hold for 4, exhale for 6.");
    setQuote("The greatest glory in living lies not in never falling, but in rising every time we fall.");

    return () => clearTimeout(timer);
  }, []);

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const handleCheckIn = () => {
    setShowMoodTracker(true);
  };

  const handleMoodSelect = (mood) => {
    setTimeout(() => {
      setShowMoodTracker(false);
      toast.success(`You're feeling ${mood} today. Thanks for sharing!`);
    }, 500);
  };

  const features = [
    {
      title: "Daily Mood Tracking",
      description: "Record how you feel each day to identify patterns in your emotional wellbeing."
    },
    {
      title: "Progress Visualization",
      description: "See your journey with easy-to-understand charts and graphs."
    },
    {
      title: "Personalized Resources",
      description: "Get recommendations tailored to your specific needs and interests."
    }
  ];

  const upcomingFeatures = [
    "Guided meditation sessions",
    "Weekly wellness challenges",
    "Journal prompts based on your mood",
    "Community support groups"
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-12 px-4">
      {isLoggedIn ? (
        <div className={cn("transition-opacity duration-1000 w-full max-w-lg", isLoading ? "opacity-0" : "opacity-100")}>
          <div className="text-center mb-8 animate-fade-in">
            <h1 className=" text-2xl md:text-4xl font-medium">
              {getTimeBasedGreeting()}, {userName}
            </h1>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto" bg-con>
              Welcome to your safe space. Take a moment to breathe and check in with yourself.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <Companion
              stage={1}
              mood="happy"
              badges={["hi"]}
              className="animate-scale-gentle"
            />
          </div>

          {showMoodTracker ? (
            <div className="mt-4 animate-scale-gentle">
              <MoodTracker onMoodSelect={handleMoodSelect} />
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-8 items-center">
              <Button
                onClick={handleCheckIn}
                className="comfort-button bg-comfort-blue hover:bg-comfort-blue/80 text-foreground px-8 py-4"
              >
                Check In Today
              </Button>
              <Link to="/progress">
                <Button
                  variant="ghost"
                  className="comfort-button bg-comfort-neutral/50 hover:bg-comfort-neutral/80 text-foreground"
                >
                  View Your Progress
                </Button>
              </Link>
            </div>
          )}

          <Card className="mt-12 bg-comfort-neutral/10 border-comfort-blue/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Today's Wellness Tip</h3>
              <p className="text-muted-foreground">{dailyTip}</p>
            </CardContent>
          </Card>

          <div className="mt-8 text-center px-4 py-6 bg-comfort-purple/10 rounded-lg">
            <p className="italic text-md">"{quote}"</p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-medium text-center mb-8">Why Comfort Works For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-comfort-blue/5 hover:bg-comfort-blue/10 transition-colors">
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-medium text-center mb-8">How It Works</h2>
            <div className="space-y-8">
              <Step number={1} title="Check in daily with your mood" desc="Start each day by recording how you're feeling." color="blue" />
              <Step number={2} title="Track your progress over time" desc="See how your moods and habits evolve with our visual tracking tools." color="purple" />
              <Step number={3} title="Discover personalized resources" desc="Get recommendations based on your needs and interests." color="neutral" />
            </div>
          </div>

          <div className="mt-16 mb-20">
            <h2 className="text-xl font-medium text-center mb-6">Coming Soon</h2>
            <div className="bg-comfort-blue/5 p-4 rounded-lg">
              <ul className="space-y-3">
                {upcomingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <ArrowRight size={16} className="text-comfort-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 text-center">
              <Link to="/resources">
                <Button variant="ghost" className="comfort-button bg-comfort-neutral/30 hover:bg-comfort-neutral/50 text-foreground">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              "Small steps are still steps forward."
            </p>
          </div>
        </div>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
};

const Step = ({ number, title, desc, color }) => (
  <div className="flex items-center gap-4">
    <div className={`w-10 h-10 rounded-full bg-comfort-${color} flex items-center justify-center text-white font-bold`}>
      {number}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export default Home;
