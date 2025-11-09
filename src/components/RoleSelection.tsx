import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Martini, 
  BeerBottle,
  Storefront,
  Sparkle, 
  Users, 
  Star, 
  CalendarPlus,
  Briefcase
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
        className="max-w-7xl w-full text-center relative z-10"
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
              Hello Happier Hour
            </h1>
          </div>
          <p className="text-2xl text-muted-foreground font-medium">
            Join the community. Choose your role.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                      className="w-20 h-20 text-accent"
                    />
                  </motion.div>
                </div>

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  The Drinker
                </h2>
                
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Discover amazing venues, connect with expert bartenders, and find your perfect happy hour experience.
                </p>

                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Star weight="fill" className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Discover & review venues</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Users weight="fill" className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Follow bartenders</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Sparkle weight="fill" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">Track achievements</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-12 text-base font-bold bg-gradient-to-r from-accent to-secondary hover:shadow-2xl transition-all duration-300"
                >
                  Join as Drinker
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
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
                      className="w-20 h-20 text-primary"
                    />
                  </motion.div>
                </div>

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  The Pourer
                </h2>
                
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Build your reputation, showcase your craft, and find job opportunities across venues.
                </p>

                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Sparkle weight="fill" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">Showcase signature drinks</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Briefcase weight="fill" className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Find job opportunities</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Users weight="fill" className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Build a following</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300"
                >
                  Join as Pourer
                </Button>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <Card 
              className="glass-card p-10 rounded-3xl cursor-pointer group stacked-element relative overflow-hidden border-2 border-transparent hover:border-secondary/50 transition-all duration-500"
              onClick={() => onSelectRole('the-venue')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                      ease: 'easeInOut',
                      delay: 1
                    }}
                  >
                    <Storefront 
                      weight="fill" 
                      className="w-20 h-20 text-secondary"
                    />
                  </motion.div>
                </div>

                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  The Venue
                </h2>
                
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Manage your establishment, hire talented bartenders, and attract more customers.
                </p>

                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Briefcase weight="fill" className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Post job openings</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <CalendarPlus weight="fill" className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">Manage schedules</span>
                  </div>
                  <div className="flex items-center gap-3 glass-morphic p-3 rounded-xl text-sm">
                    <Star weight="fill" className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">Promote events</span>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-12 text-base font-bold bg-gradient-to-r from-secondary to-accent hover:shadow-2xl transition-all duration-300"
                >
                  Join as Venue
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
