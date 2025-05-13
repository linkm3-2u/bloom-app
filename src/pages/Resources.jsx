
import React from 'react';
import ResourceCard from '../components/ResourceCard';

const Resources = () => {
  const resources = [
    {
      title: "Crisis Support",
      description: "If you're in crisis or need immediate support, these resources are available 24/7.",
      actionText: "Get Help Now",
      link: "https://www.crisistextline.org/",
      colorClass: "bg-comfort-blue/30"
    },
    {
      title: "Breathing Exercises",
      description: "Simple breathing techniques to help manage anxiety and stress in the moment.",
      actionText: "Learn Techniques",
      link: "https://www.healthline.com/health/box-breathing",
      colorClass: "bg-comfort-green/30"
    },
    {
      title: "Sleep Improvement",
      description: "Tips and resources for better sleep quality and establishing healthy sleep routines.",
      actionText: "Explore",
      link: "https://www.sleepfoundation.org/",
      colorClass: "bg-comfort-purple/30"
    },
    {
      title: "Mindfulness Practices",
      description: "Introduction to mindfulness exercises that can help ground you in the present moment.",
      actionText: "Start Practice",
      link: "https://www.mindful.org/meditation/mindfulness-getting-started/",
      colorClass: "bg-comfort-yellow/30"
    },
    {
      title: "Managing Difficult Emotions",
      description: "Strategies for understanding and coping with challenging emotions.",
      actionText: "Learn More",
      link: "https://www.psychologytoday.com/us/blog/emotional-fitness/201311/10-ways-handle-painful-emotions",
      colorClass: "bg-comfort-peach/30"
    },
    {
      title: "Finding Professional Help",
      description: "Resources to help you find therapists, counselors, and other mental health professionals.",
      actionText: "Find Support",
      link: "https://www.psychologytoday.com/us/therapists",
      colorClass: "bg-comfort-neutral/50"
    }
  ];

  return (
    <div className="page-container max-w-4xl mx-auto py-8 px-4 pb-24">
      <h1 className="text-2xl font-medium mb-6">Helpful Resources</h1>
      <p className="text-muted-foreground mb-8">
        We've gathered these supportive resources for your wellbeing journey. Remember, seeking help is a sign of strength.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            description={resource.description}
            actionText={resource.actionText}
            link={resource.link}
            colorClass={resource.colorClass}
            className="animate-scale-gentle"
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>
      
      <div className="mt-12 p-6 rounded-xl bg-comfort-blue/10 text-center">
        <h2 className="text-lg font-medium mb-3">Emergency Services</h2>
        <p className="text-sm text-muted-foreground mb-2">
          If you're experiencing an emergency or are in immediate danger, please contact:
        </p>
        <p className="text-xl font-medium">Emergency Services: 911</p>
        <p className="mt-2 text-lg">National Suicide Prevention Lifeline: 988</p>
      </div>
      
      {/* Decorative background elements */}
      <div className="fixed top-20 right-20 w-40 h-40 rounded-full bg-comfort-yellow/10 blur-3xl -z-10" />
      <div className="fixed bottom-20 left-20 w-60 h-60 rounded-full bg-comfort-purple/10 blur-3xl -z-10" />
    </div>
  );
};

export default Resources;