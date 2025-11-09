import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Trophy,
  MapPin,
  CalendarBlank,
  Users,
  Star,
  Heart,
  Fire,
  Sparkle
} from '@phosphor-icons/react';
import { UserProfile, Achievement, AchievementType } from '@/lib/types';
import { ACHIEVEMENT_DEFINITIONS, getAchievementProgress } from '@/lib/achievement-system';

interface UserProfileModalProps {
  profile: UserProfile;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UserProfileModal({ profile, open, onOpenChange }: UserProfileModalProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const achievements = profile.achievements || [];
  const visitHistory = profile.visitHistory || [];
  const uniqueVenues = new Set(visitHistory.map(v => v.venueId)).size;

  const rarityColors = {
    common: 'text-muted-foreground',
    rare: 'text-blue-500',
    epic: 'text-purple-500',
    legendary: 'text-amber-500'
  };

  const rarityBorders = {
    common: 'border-muted',
    rare: 'border-blue-500',
    epic: 'border-purple-500',
    legendary: 'border-amber-500'
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    explorer: <MapPin weight="fill" className="w-5 h-5" />,
    social: <Users weight="fill" className="w-5 h-5" />,
    connoisseur: <Star weight="fill" className="w-5 h-5" />,
    supporter: <Heart weight="fill" className="w-5 h-5" />,
    special: <Sparkle weight="fill" className="w-5 h-5" />
  };

  const stats = [
    { label: 'Total Visits', value: visitHistory.length, icon: <Fire weight="fill" /> },
    { label: 'Unique Venues', value: uniqueVenues, icon: <MapPin weight="fill" /> },
    { label: 'Achievements', value: achievements.length, icon: <Trophy weight="fill" /> },
    { label: 'Following', value: profile.favoriteBartenders?.length || 0, icon: <Users weight="fill" /> }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-primary via-accent to-secondary" />
          
          <div className="absolute bottom-0 left-8 transform translate-y-1/2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Avatar className="w-24 h-24 ring-4 ring-background">
                <img src={profile.avatar} alt={profile.name} />
              </Avatar>
            </motion.div>
          </div>
        </div>

        <div className="p-8 pt-16">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">{profile.name}</h2>
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                  {profile.role === 'the-pourer' ? '🍸 Bartender' : 
                   profile.role === 'the-venue' ? '🏛️ Venue' : '🍺 Enthusiast'}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Member since {new Date(profile.createdAt).toLocaleDateString()}
                </span>
              </div>
              {profile.bio && (
                <p className="text-muted-foreground max-w-2xl">{profile.bio}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 rounded-2xl text-center"
              >
                <div className="flex justify-center mb-2 text-accent">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="achievements">
                Achievements ({achievements.length})
              </TabsTrigger>
              <TabsTrigger value="history">Visit History</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Trophy weight="fill" className="text-accent" />
                    Recent Achievements
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.slice(0, 4).map((achievement, index) => {
                      const def = ACHIEVEMENT_DEFINITIONS.find(d => d.id === achievement.id);
                      return (
                        <motion.div
                          key={achievement.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`glass-card p-4 rounded-2xl border-2 ${
                            def ? rarityBorders[def.rarity] : 'border-muted'
                          }`}
                        >
                          <div className="text-4xl mb-2">{achievement.icon}</div>
                          <div className="font-bold mb-1">{achievement.title}</div>
                          <div className="text-xs text-muted-foreground mb-2">
                            {achievement.description}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {profile.preferences && (
                  <div>
                    <h3 className="text-lg font-bold mb-4">Preferences</h3>
                    <div className="glass-card p-4 rounded-2xl space-y-3">
                      {profile.preferences.favoriteDrinks && (
                        <div>
                          <div className="text-sm font-medium mb-2">Favorite Drinks</div>
                          <div className="flex flex-wrap gap-2">
                            {profile.preferences.favoriteDrinks.map((drink) => (
                              <Badge key={drink} variant="secondary">{drink}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {profile.preferences.atmosphere && (
                        <div>
                          <div className="text-sm font-medium mb-2">Atmosphere</div>
                          <div className="flex flex-wrap gap-2">
                            {profile.preferences.atmosphere.map((atm) => (
                              <Badge key={atm} variant="outline">{atm}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <ScrollArea className="h-[400px]">
                <div className="space-y-6">
                  {['common', 'rare', 'epic', 'legendary'].map((rarity) => {
                    const rarityAchievements = ACHIEVEMENT_DEFINITIONS.filter(
                      def => def.rarity === rarity
                    );

                    return (
                      <div key={rarity}>
                        <h3 className={`text-lg font-bold mb-4 capitalize ${rarityColors[rarity as keyof typeof rarityColors]}`}>
                          {rarity} Achievements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {rarityAchievements.map((def) => {
                            const unlocked = achievements.find(a => a.id === def.id);
                            const progress = getAchievementProgress(def, profile);

                            return (
                              <motion.div
                                key={def.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`glass-card p-4 rounded-2xl border-2 ${
                                  unlocked 
                                    ? rarityBorders[def.rarity]
                                    : 'border-muted opacity-50'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="text-3xl">{def.icon}</div>
                                  <div className="flex-1">
                                    <div className="font-bold mb-1">{def.title}</div>
                                    <div className="text-xs text-muted-foreground mb-2">
                                      {def.description}
                                    </div>
                                    {!unlocked && (
                                      <div className="space-y-1">
                                        <Progress value={progress.percentage} className="h-2" />
                                        <div className="text-xs text-muted-foreground">
                                          {progress.current} / {progress.target}
                                        </div>
                                      </div>
                                    )}
                                    {unlocked && (
                                      <div className="text-xs text-accent font-medium">
                                        ✓ Unlocked
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {visitHistory.length === 0 ? (
                    <div className="text-center py-12 glass-card rounded-2xl">
                      <div className="text-6xl mb-4">🗺️</div>
                      <h3 className="text-xl font-bold mb-2">No visits yet</h3>
                      <p className="text-muted-foreground">
                        Start exploring venues to build your history!
                      </p>
                    </div>
                  ) : (
                    visitHistory.map((visit, index) => (
                      <motion.div
                        key={`${visit.venueId}-${visit.date}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card p-4 rounded-2xl flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <CalendarBlank weight="fill" className="w-5 h-5 text-accent" />
                          <div>
                            <div className="font-medium">Venue ID: {visit.venueId}</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(visit.date).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        {visit.rating && (
                          <div className="flex items-center gap-1">
                            <Star weight="fill" className="text-amber-500" />
                            <span className="font-medium">{visit.rating}</span>
                          </div>
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
