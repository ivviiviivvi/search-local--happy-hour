import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sparkle,
  DiceFive,
  Users,
  Clock,
  ListChecks,
  ArrowClockwise
} from '@phosphor-icons/react';
import { DrinkingGame, DrinkingTheme } from '@/lib/types';
import { generateDrinkingGame } from '@/lib/game-generator';
import { toast } from 'sonner';

const THEME_OPTIONS: { value: DrinkingTheme; label: string; emoji: string }[] = [
  { value: 'famous-drunks', label: 'Famous Drunks', emoji: '🥃' },
  { value: 'literary', label: 'Literary', emoji: '📚' },
  { value: 'archetypal', label: 'Archetypal', emoji: '🎭' },
  { value: 'prohibition', label: 'Prohibition', emoji: '🕵️' },
  { value: 'ancient-rome', label: 'Ancient Rome', emoji: '🏛️' }
];

const DIFFICULTY_OPTIONS = [
  { value: 'easy', label: 'Easy', color: 'bg-green-500' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
  { value: 'hard', label: 'Hard', color: 'bg-red-500' }
];

export function DrinkingGamesGenerator() {
  const [game, setGame] = useState<DrinkingGame | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<DrinkingTheme>('archetypal');
  const [playerCount, setPlayerCount] = useState([4]);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const newGame = await generateDrinkingGame(
        selectedTheme,
        playerCount[0],
        difficulty
      );
      setGame(newGame);
      toast.success('Game generated!', {
        description: `Get ready to play ${newGame.name}!`
      });
    } catch (error) {
      toast.error('Failed to generate game', {
        description: 'Please try again'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const getDifficultyColor = (diff: string) => {
    return DIFFICULTY_OPTIONS.find(d => d.value === diff)?.color || 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 rounded-3xl"
      >
        <div className="flex items-center gap-3 mb-2">
          <DiceFive weight="fill" className="w-8 h-8 text-accent" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Drinking Game Generator
          </h2>
        </div>
        <p className="text-muted-foreground text-lg mb-6">
          AI-powered personalized drinking games for your crew
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Sparkle weight="fill" className="w-4 h-4 text-accent" />
              Theme
            </label>
            <Select value={selectedTheme} onValueChange={(v) => setSelectedTheme(v as DrinkingTheme)}>
              <SelectTrigger className="glass-morphic">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {THEME_OPTIONS.map((theme) => (
                  <SelectItem key={theme.value} value={theme.value}>
                    <span className="flex items-center gap-2">
                      <span>{theme.emoji}</span>
                      <span>{theme.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Users weight="fill" className="w-4 h-4 text-accent" />
              Players: {playerCount[0]}
            </label>
            <Slider
              value={playerCount}
              onValueChange={setPlayerCount}
              min={2}
              max={12}
              step={1}
              className="pt-2"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <DiceFive weight="fill" className="w-4 h-4 text-accent" />
              Difficulty
            </label>
            <Select value={difficulty} onValueChange={(v) => setDifficulty(v as 'easy' | 'medium' | 'hard')}>
              <SelectTrigger className="glass-morphic">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DIFFICULTY_OPTIONS.map((diff) => (
                  <SelectItem key={diff.value} value={diff.value}>
                    {diff.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full mt-6 h-14 text-lg bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 transition-transform"
        >
          {isGenerating ? (
            <>
              <ArrowClockwise className="mr-2 animate-spin" weight="bold" />
              Generating...
            </>
          ) : (
            <>
              <Sparkle className="mr-2" weight="fill" />
              Generate Game
            </>
          )}
        </Button>
      </motion.div>

      <AnimatePresence mode="wait">
        {isGenerating && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="glass-card p-8 rounded-3xl space-y-4"
          >
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </motion.div>
        )}

        {!isGenerating && game && (
          <motion.div
            key="game"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <Card className="glass-card border-2 border-accent/50 rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 pb-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <DiceFive className="w-12 h-12 text-accent" weight="fill" />
                      </motion.div>
                      <CardTitle className="text-4xl font-bold">{game.name}</CardTitle>
                    </div>
                    <CardDescription className="text-lg">{game.description}</CardDescription>
                  </div>
                  <Badge className={`${getDifficultyColor(game.difficulty)} text-white`}>
                    {game.difficulty}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Badge variant="secondary" className="glass-morphic">
                    <Users weight="fill" className="w-4 h-4 mr-1" />
                    {game.playerCount.min}-{game.playerCount.max} players
                  </Badge>
                  <Badge variant="secondary" className="glass-morphic">
                    <Clock weight="fill" className="w-4 h-4 mr-1" />
                    {game.duration}
                  </Badge>
                  {game.drinkingTheme && (
                    <Badge variant="secondary" className="glass-morphic">
                      {THEME_OPTIONS.find(t => t.value === game.drinkingTheme)?.emoji}
                      <span className="ml-1">
                        {THEME_OPTIONS.find(t => t.value === game.drinkingTheme)?.label}
                      </span>
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ListChecks weight="fill" className="text-accent" />
                    Rules
                  </h3>
                  <ScrollArea className="max-h-60">
                    <ol className="space-y-3">
                      {game.rules.map((rule, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shrink-0">
                            {index + 1}
                          </div>
                          <p className="flex-1 pt-1">{rule}</p>
                        </motion.li>
                      ))}
                    </ol>
                  </ScrollArea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Materials Needed</h3>
                    <ul className="space-y-2">
                      {game.materials.map((material, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {game.variations && game.variations.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold mb-3">Variations</h3>
                      <ul className="space-y-2">
                        {game.variations.map((variation, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-secondary" />
                            {variation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Generated {new Date(game.generatedAt).toLocaleString()}
                  </p>
                  <Button
                    onClick={handleGenerate}
                    variant="outline"
                    className="glass-morphic"
                  >
                    <ArrowClockwise className="mr-2" weight="bold" />
                    Generate Another
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {!isGenerating && !game && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 glass-card rounded-3xl"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl mb-6 inline-block"
            >
              🎲
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">Ready to Play?</h3>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Configure your preferences above and click "Generate Game" to create a unique drinking game for your group!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
