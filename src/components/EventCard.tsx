import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  CalendarBlank, 
  Clock, 
  Users, 
  Sparkle,
  ArrowRight,
  BookOpen,
  Crown,
  Scroll,
  MaskHappy,
  Columns
} from '@phosphor-icons/react';
import { ThemedEvent, DrinkingTheme } from '@/lib/types';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

const themeConfig: Record<DrinkingTheme, { label: string; icon: React.ReactNode; color: string }> = {
  'famous-drunks': { label: 'Famous Drunks', icon: <Crown weight="fill" className="w-3 h-3" />, color: 'from-amber-500/20 to-yellow-500/20' },
  'literary': { label: 'Literary', icon: <BookOpen weight="fill" className="w-3 h-3" />, color: 'from-purple-500/20 to-indigo-500/20' },
  'archetypal': { label: 'Archetypal', icon: <MaskHappy weight="fill" className="w-3 h-3" />, color: 'from-green-500/20 to-teal-500/20' },
  'prohibition': { label: 'Prohibition', icon: <Scroll weight="fill" className="w-3 h-3" />, color: 'from-slate-500/20 to-gray-500/20' },
  'ancient-rome': { label: 'Ancient Rome', icon: <Columns weight="fill" className="w-3 h-3" />, color: 'from-red-500/20 to-orange-500/20' },
};

interface EventCardProps {
  event: ThemedEvent;
  isRSVPd?: boolean;
  onRSVP?: (eventId: string) => void;
  onViewDetails?: (eventId: string) => void;
}

export function EventCard({ 
  event, 
  isRSVPd = false, 
  onRSVP,
  onViewDetails 
}: EventCardProps) {
  const eventDate = new Date(event.date);
  const isUpcoming = eventDate > new Date();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="glass-card overflow-hidden rounded-3xl stacked-element cursor-pointer group">
        <div className="relative overflow-hidden">
          {event.image && (
            <>
              <motion.img 
                src={event.image} 
                alt={event.title}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </>
          )}
          
          {!event.image && (
            <div className="w-full h-52 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 relative">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Sparkle className="w-32 h-32 text-accent opacity-30" weight="fill" />
              </motion.div>
            </div>
          )}

          {isUpcoming && (
            <motion.div 
              className="absolute top-4 left-4 z-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Badge className="bg-accent text-accent-foreground font-bold pulse-glow shadow-lg backdrop-blur-sm">
                <CalendarBlank className="w-4 h-4 mr-1" weight="fill" />
                Upcoming
              </Badge>
            </motion.div>
          )}

          <div className="absolute bottom-4 left-4 right-4 z-10">
            <motion.h3 
              className="font-bold text-2xl leading-tight text-white drop-shadow-lg mb-2"
              whileHover={{ scale: 1.02 }}
            >
              {event.title}
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-secondary/90 text-secondary-foreground backdrop-blur-sm">
                {event.theme}
              </Badge>
              {event.drinkingTheme && (
                <Badge className={`bg-gradient-to-r ${themeConfig[event.drinkingTheme].color} backdrop-blur-sm border-white/30 text-white font-bold`}>
                  {themeConfig[event.drinkingTheme].icon}
                  <span className="ml-1">{themeConfig[event.drinkingTheme].label}</span>
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-2 glass-morphic px-4 py-2 rounded-full">
              <CalendarBlank className="w-5 h-5 text-primary" weight="fill" />
              <span className="font-semibold">
                {format(eventDate, 'MMM dd, yyyy')}
              </span>
            </div>
            
            <div className="flex items-center gap-2 glass-morphic px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-accent" weight="fill" />
              <span className="font-semibold">
                {event.startTime} - {event.endTime}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 glass-morphic px-4 py-3 rounded-2xl">
            <Users className="w-5 h-5 text-secondary" weight="fill" />
            <span className="font-bold text-base">{event.rsvpCount}</span>
            <span className="text-sm text-muted-foreground">
              {event.rsvpCount === 1 ? 'person' : 'people'} going
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-xs font-semibold bg-gradient-to-r from-muted to-muted/50">
                  <Sparkle className="w-3 h-3 mr-1" weight="fill" />
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {onRSVP && isUpcoming && (
              <motion.div 
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant={isRSVPd ? 'outline' : 'default'}
                  className={isRSVPd 
                    ? 'w-full glass-morphic border-accent/50 font-bold' 
                    : 'w-full bg-gradient-to-r from-accent to-secondary font-bold shadow-lg hover:shadow-xl'
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    onRSVP(event.id);
                  }}
                >
                  {isRSVPd ? 'You\'re Going!' : 'RSVP Now'}
                </Button>
              </motion.div>
            )}

            {onViewDetails && (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={onRSVP && isUpcoming ? '' : 'flex-1'}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className={`glass-morphic border-border/50 hover:border-primary/50 font-semibold group ${onRSVP && isUpcoming ? '' : 'w-full'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewDetails(event.id);
                  }}
                >
                  Details
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="w-4 h-4" weight="bold" />
                  </motion.div>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
