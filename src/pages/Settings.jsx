import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

const Settings = () => {
  const [settings, setSettings] = useState({
    name: "User",
    notifications: true,
    darkMode: false,
    soundEffects: true,
    reminders: true,
    shareData: false
  });

  const colorThemes = [
    { name: "Calm Blue", class: "bg-comfort-blue" },
    { name: "Soft Green", class: "bg-comfort-green" },
    { name: "Gentle Purple", class: "bg-comfort-purple" },
    { name: "Warm Peach", class: "bg-comfort-peach" },
    { name: "Sunshine", class: "bg-comfort-yellow" },
  ];

  const [selectedTheme, setSelectedTheme] = useState(0);

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));

    if (setting === 'darkMode') {
      if (value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    toast.success(`Setting updated: ${setting}`);
  };

  const handleThemeSelect = (index) => {
    setSelectedTheme(index);
    toast.success(`Theme updated to ${colorThemes[index].name}`);
  };

  const handleSaveProfile = () => {
    toast.success("Profile information updated successfully!");
  };

  return (
    <div className="page-container max-w-2xl mx-auto py-8 px-4 pb-24">
      <h1 className="text-2xl font-medium mb-6">Settings</h1>
      <p className="text-muted-foreground mb-8">
        Customize your experience to make it more comfortable for you.
      </p>

      <div className="space-y-6">
        <Card className="border-comfort-blue/20">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={settings.name} 
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                className="border-comfort-blue/20"
              />
            </div>
            <div className="pt-2">
              <Button 
                onClick={handleSaveProfile}
                className="comfort-button bg-comfort-blue hover:bg-comfort-blue/80 text-foreground"
              >
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-comfort-blue/20">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Choose your color theme and display preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex-grow">Dark mode</Label>
              <Switch 
                id="dark-mode" 
                checked={settings.darkMode} 
                onCheckedChange={(checked) => handleSettingChange('darkMode', checked)}
              />
            </div>
            <Separator className="my-4" />
            <div className="space-y-3">
              <Label>Color Theme</Label>
              <div className="flex flex-wrap gap-3">
                {colorThemes.map((theme, index) => (
                  <button
                    key={index}
                    onClick={() => handleThemeSelect(index)}
                    className={`w-10 h-10 rounded-full transition-all ${theme.class} ${
                      selectedTheme === index 
                        ? 'ring-2 ring-primary ring-offset-2' 
                        : 'hover:scale-110'
                    }`}
                    title={theme.name}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-comfort-blue/20">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your notification preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications" className="flex-grow">Enable notifications</Label>
              <Switch 
                id="notifications" 
                checked={settings.notifications} 
                onCheckedChange={(checked) => handleSettingChange('notifications', checked)}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="reminders" className="flex-grow">Daily check-in reminders</Label>
              <Switch 
                id="reminders" 
                checked={settings.reminders} 
                onCheckedChange={(checked) => handleSettingChange('reminders', checked)}
                disabled={!settings.notifications}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sound-effects" className="flex-grow">Sound effects</Label>
              <Switch 
                id="sound-effects" 
                checked={settings.soundEffects} 
                onCheckedChange={(checked) => handleSettingChange('soundEffects', checked)}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-comfort-blue/20">
          <CardHeader>
            <CardTitle>Privacy</CardTitle>
            <CardDescription>Manage your privacy settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="share-data" className="flex-grow">Anonymous data sharing</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Help us improve by sharing anonymous usage data
                </p>
              </div>
              <Switch 
                id="share-data" 
                checked={settings.shareData} 
                onCheckedChange={(checked) => handleSettingChange('shareData', checked)}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="fixed top-40 left-20 w-40 h-40 rounded-full bg-comfort-peach/10 blur-3xl -z-10" />
    </div>
  );
};

export default Settings;
