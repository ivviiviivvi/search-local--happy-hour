import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkle, 
  CheckCircle,
  XCircle
} from '@phosphor-icons/react';
import { MenuItem } from '@/lib/types';
import { motion } from 'framer-motion';

interface MenuItemCardProps {
  item: MenuItem;
  featured?: boolean;
}

export function MenuItemCard({ item, featured = false }: MenuItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className={`glass-card p-6 rounded-3xl ${
        featured ? 'ring-2 ring-accent/50 shadow-xl' : ''
      } ${!item.available ? 'opacity-60' : ''}`}>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-bold text-lg truncate">{item.name}</h4>
              {item.isSignature && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <Badge className="bg-accent text-accent-foreground text-xs font-bold">
                    <Sparkle className="w-3 h-3 mr-1" weight="fill" />
                    Signature
                  </Badge>
                </motion.div>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
          
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            <div className="glass-morphic px-4 py-2 rounded-2xl">
              <span className="font-bold text-lg text-primary">{item.price}</span>
            </div>
          </motion.div>
        </div>

        {item.ingredients && item.ingredients.length > 0 && (
          <>
            <Separator className="my-4 bg-border/30" />
            <div>
              <div className="text-xs font-bold text-muted-foreground mb-2">
                INGREDIENTS
              </div>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ingredient, index) => (
                  <motion.div
                    key={ingredient}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-xs font-medium bg-muted/50"
                    >
                      {ingredient}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="mt-4 flex items-center justify-between">
          <Badge 
            variant="outline" 
            className={`text-xs font-semibold ${
              item.available 
                ? 'border-accent/50 text-accent' 
                : 'border-muted-foreground/30 text-muted-foreground'
            }`}
          >
            {item.available ? (
              <>
                <CheckCircle className="w-3 h-3 mr-1" weight="fill" />
                Available
              </>
            ) : (
              <>
                <XCircle className="w-3 h-3 mr-1" weight="fill" />
                Unavailable
              </>
            )}
          </Badge>
          
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
            {item.category}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  icon?: React.ReactNode;
}

export function MenuSection({ title, items, icon }: MenuSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          {icon && (
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass-morphic p-3 rounded-2xl"
            >
              {icon}
            </motion.div>
          )}
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        
        <div className="grid gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <MenuItemCard 
                item={item} 
                featured={item.isSignature}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
