import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  ThumbsUp, 
  Sparkle,
  Calendar
} from '@phosphor-icons/react';
import { Review } from '@/lib/types';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface ReviewCardProps {
  review: Review;
  onMarkHelpful?: (reviewId: string) => void;
  isHelpful?: boolean;
}

export function ReviewCard({ review, onMarkHelpful, isHelpful = false }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="glass-card p-6 rounded-3xl">
        <div className="flex items-start gap-4 mb-4">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            {review.userAvatar ? (
              <img 
                src={review.userAvatar} 
                alt={review.userName}
                className="w-14 h-14 rounded-2xl object-cover ring-2 ring-background shadow-lg"
              />
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {review.userName.charAt(0)}
              </div>
            )}
          </motion.div>

          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-lg">{review.userName}</h4>
            <div className="flex items-center gap-3 mt-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Star 
                      weight="fill" 
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-accent' : 'text-muted-foreground/30'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {review.rating}.0
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" weight="fill" />
              <span>{formatDistanceToNow(new Date(review.date), { addSuffix: true })}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-foreground leading-relaxed mb-4">
          {review.comment}
        </p>

        {review.photos && review.photos.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {review.photos.map((photo, index) => (
              <motion.div
                key={photo}
                className="relative overflow-hidden rounded-2xl aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={photo} 
                  alt={`Review photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        )}

        {review.tags && review.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {review.tags.map((tag, index) => (
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
        )}

        {onMarkHelpful && (
          <>
            <Separator className="my-4 bg-border/30" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground font-medium">
                {review.helpfulCount} {review.helpfulCount === 1 ? 'person' : 'people'} found this helpful
              </span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  variant={isHelpful ? 'default' : 'outline'}
                  className={isHelpful 
                    ? 'bg-gradient-to-r from-primary to-accent' 
                    : 'glass-morphic border-border/50 hover:border-accent/50'
                  }
                  onClick={() => onMarkHelpful(review.id)}
                >
                  <ThumbsUp 
                    className="w-4 h-4 mr-2" 
                    weight={isHelpful ? 'fill' : 'regular'} 
                  />
                  Helpful
                </Button>
              </motion.div>
            </div>
          </>
        )}
      </Card>
    </motion.div>
  );
}
