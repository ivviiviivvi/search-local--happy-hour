import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Martini, 
  BeerBottle, 
  Sparkle, 
  Users, 
  Star, 
  CalendarPlus 
} from '@phosphor-icons/react';
import { UserRole } from '@/lib/types';

interface RoleSelectionProps {
  onSelectRole: (role: UserRole) => void;
}

export function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="parallax-bg" />
      
      <motion.div
        className="max-w-5xl w-full text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkle weight="fill" className="w-12 h-12 text-accent" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              HappyHourAI
            </h1>
          </div>
          <p className="text-2xl text-muted-foreground font-medium">
            Join the community. Choose your role.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <Card 
              className="glass-card p-10 rounded-3xl cursor-pointer group stacked-element relative overflow-hidden border-2 border-transparent hover:border-accent/50 transition-all duration-500"
              onClick={() => onSelectRole('the-drinker')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-6 flex justify-center">
                  <motion.div
                    className="glass-morphic-strong p-8 rounded-3xl"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <Martini 
                      weight="fill" 
                      className="w-24 h-24 text-accent"
                    />
                  </motion.div>
                </div>

                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  The Drinker
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Discover amazing venues, connect with expert bartenders, and find your perfect happy hour experience.
                </p>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center gap-3 glass-morphic p-4 rounded-2xl">
                    <Star weight="fill" className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-medium">Discover & review venues</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-4 rounded-2xl">
                    <Users weight="fill" className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="font-medium">Follow favorite bartenders</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-4 rounded-2xl">
                    <Sparkle weight="fill" className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">Get personalized recommendations</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-accent to-secondary hover:shadow-2xl transition-all duration-300"
                >
                  Join as The Drinker
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <Card 
              className="glass-card p-10 rounded-3xl cursor-pointer group stacked-element relative overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all duration-500"
              onClick={() => onSelectRole('the-pourer')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="mb-6 flex justify-center">
                  <motion.div
                    className="glass-morphic-strong p-8 rounded-3xl"
                    animate={{ 
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5
                    }}
                  >
                    <BeerBottle 
                      weight="fill" 
                      className="w-24 h-24 text-primary"
                    />
                  </motion.div>
                </div>

                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  The Pourer
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Build your reputation, showcase your craft, and connect with customers who appreciate quality drinks.
                </p>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center gap-3 glass-morphic p-4 rounded-2xl">
                    <Sparkle weight="fill" className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">Create custom menus</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-4 rounded-2xl">
                    <CalendarPlus weight="fill" className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-medium">Host themed events</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-4 rounded-2xl">
                    <Users weight="fill" className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="font-medium">Build a following</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300"
                >
                  Join as The Pourer
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>

        <motion.p
          className="mt-12 text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          You can always switch roles later in your profile settings
        </motion.p>
      </motion.div>
    </div>
  );
}
