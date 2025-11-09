import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  Users, 
  CheckCircle, 
  Sparkle,
  Wine,
  Martini,
  BeerBottle
} from '@phosphor-icons/react';
import { Bartender } from '@/lib/types';
import { motion } from 'framer-motion';

interface BartenderCardProps {
  bartender: Bartender;
  isFollowing?: boolean;
  onToggleFollow?: (bartenderId: string) => void;
  onViewProfile?: (bartenderId: string) => void;
}

export function BartenderCard({ 
  bartender, 
  isFollowing = false, 
  onToggleFollow,
  onViewProfile 
}: BartenderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="glass-card p-6 rounded-3xl overflow-hidden cursor-pointer stacked-element">
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <img 
              src={bartender.avatar} 
              alt={bartender.name}
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-background shadow-xl"
            />
            {bartender.isVerified && (
              <motion.div
                className="absolute -bottom-1 -right-1 bg-accent rounded-full p-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <CheckCircle weight="fill" className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-xl truncate">{bartender.name}</h3>
              {bartender.isVerified && (
                <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                  Verified
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
              <div className="flex items-center gap-1">
                <Star weight="fill" className="w-4 h-4 text-accent" />
                <span className="font-bold">{bartender.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users weight="fill" className="w-4 h-4 text-primary" />
                <span className="font-semibold">{bartender.followerCount.toLocaleString()}</span>
              </div>
              <span className="font-medium">{bartender.yearsExperience}+ years</span>
            </div>
          </div>

          {onToggleFollow && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                variant={isFollowing ? 'outline' : 'default'}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFollow(bartender.id);
                }}
                className={isFollowing 
                  ? 'glass-morphic border-accent/50 hover:border-accent' 
                  : 'bg-gradient-to-r from-primary to-accent'
                }
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </motion.div>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {bartender.bio}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {bartender.specialties.slice(0, 3).map((specialty) => (
            <motion.div
              key={specialty}
              whileHover={{ scale: 1.1 }}
            >
              <Badge variant="secondary" className="text-xs font-semibold bg-gradient-to-r from-muted to-muted/50">
                <Sparkle className="w-3 h-3 mr-1" weight="fill" />
                {specialty}
              </Badge>
            </motion.div>
          ))}
        </div>

        <Separator className="my-4 bg-border/30" />

        <div>
          <div className="text-xs font-bold text-muted-foreground mb-3 flex items-center gap-2">
            <Martini className="w-4 h-4 text-accent" weight="fill" />
            SIGNATURE DRINKS
          </div>
          <div className="space-y-2">
            {bartender.signatureDrinks.slice(0, 3).map((drink, index) => (
              <motion.div
                key={drink}
                className="glass-morphic p-3 rounded-xl text-sm font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <div className="flex items-center gap-2">
                  {index === 0 && <Wine className="w-4 h-4 text-secondary" weight="fill" />}
                  {index === 1 && <Martini className="w-4 h-4 text-accent" weight="fill" />}
                  {index === 2 && <BeerBottle className="w-4 h-4 text-primary" weight="fill" />}
                  <span>{drink}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {onViewProfile && (
          <motion.div
            className="mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full glass-morphic border-border/50 hover:border-primary/50 font-semibold"
              onClick={() => onViewProfile(bartender.id)}
            >
              View Full Profile
            </Button>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
