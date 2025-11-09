import { DrinkingGame, DrinkingTheme } from './types';

export async function generateDrinkingGame(
  theme?: DrinkingTheme,
  playerCount?: number,
  difficulty?: 'easy' | 'medium' | 'hard',
  personalPreferences?: string[]
): Promise<DrinkingGame> {
  const prompt = spark.llmPrompt`You are a creative drinking game designer. Generate a unique, fun, and safe drinking game.

${theme ? `Theme: ${theme}` : 'Theme: General/Social'}
${playerCount ? `Number of Players: ${playerCount}` : 'Number of Players: 2-8'}
${difficulty ? `Difficulty: ${difficulty}` : 'Difficulty: medium'}
${personalPreferences && personalPreferences.length > 0 ? `Preferences: ${personalPreferences.join(', ')}` : ''}

Create a drinking game with the following structure:
- Name: A catchy, memorable name that fits the theme
- Description: 2-3 sentences explaining the game's premise
- Rules: 5-8 clear, numbered rules
- Materials: List of items needed
- Duration: Estimated play time
- Variations: 2-3 optional rule variations

Important guidelines:
- Ensure the game encourages responsible drinking
- Make it social and fun, not competitive or dangerous
- Include optional non-alcoholic alternatives
- Match the theme creatively (e.g., literary theme might involve quotes, ancient Rome might involve togas)
- Keep rules simple and easy to remember

Return ONLY valid JSON with this exact structure:
{
  "game": {
    "name": "string",
    "description": "string",
    "rules": ["string"],
    "materials": ["string"],
    "duration": "string",
    "variations": ["string"]
  }
}`;

  try {
    const response = await spark.llm(prompt, 'gpt-4o', true);
    const data = JSON.parse(response);
    
    return {
      id: `game-${Date.now()}`,
      name: data.game.name,
      description: data.game.description,
      rules: data.game.rules,
      difficulty: difficulty || 'medium',
      playerCount: { min: 2, max: playerCount || 8 },
      duration: data.game.duration,
      drinkingTheme: theme,
      materials: data.game.materials,
      variations: data.game.variations,
      generatedAt: new Date().toISOString()
    };
  } catch (error) {
    console.error('Failed to generate drinking game:', error);
    return getFallbackGame(theme);
  }
}

function getFallbackGame(theme?: DrinkingTheme): DrinkingGame {
  const games: Record<DrinkingTheme | 'default', DrinkingGame> = {
    'famous-drunks': {
      id: `game-${Date.now()}`,
      name: 'The Hemingway Challenge',
      description: 'Channel your inner literary drunk. Take turns sharing bold opinions or life philosophies. The group votes on who sounds most like a famous writer.',
      rules: [
        'Players sit in a circle with their drinks',
        'First player makes a profound or absurd statement about life, art, or the human condition',
        'Group votes with thumbs up or down',
        'If majority votes up, everyone else drinks. If down, the speaker drinks',
        'Next player continues clockwise',
        'Bonus rule: Use a famous drunk\'s actual quote for automatic group drink'
      ],
      difficulty: 'medium',
      playerCount: { min: 3, max: 10 },
      duration: '20-30 minutes',
      drinkingTheme: 'famous-drunks',
      materials: ['Drinks', 'Optional: Famous quotes reference'],
      variations: [
        'Historical Mode: Must reference actual historical figures',
        'Modern Mode: Include contemporary celebrities',
        'Literary Only: Stick to writers and poets'
      ],
      generatedAt: new Date().toISOString()
    },
    'literary': {
      id: `game-${Date.now()}`,
      name: 'Plot Twist',
      description: 'Collaborative storytelling meets drinking game. Build a ridiculous story together, one sentence at a time.',
      rules: [
        'First player starts a story with one sentence',
        'Next player adds exactly one sentence',
        'Story must make some sense (loose interpretation allowed)',
        'If someone breaks the flow or makes no sense, they drink',
        'Every 5th sentence must include a literary reference',
        'Story ends when someone says "The End" - then everyone drinks',
        'Best story wins (voted by group)'
      ],
      difficulty: 'easy',
      playerCount: { min: 3, max: 8 },
      duration: '15-25 minutes',
      drinkingTheme: 'literary',
      materials: ['Drinks', 'Creativity'],
      variations: [
        'Genre Mode: Pick a genre (horror, romance, sci-fi) and stick to it',
        'Rhyme Time: Every sentence must rhyme with the previous',
        'Single Word: Build story one word at a time instead'
      ],
      generatedAt: new Date().toISOString()
    },
    'ancient-rome': {
      id: `game-${Date.now()}`,
      name: 'Caesar\'s Decree',
      description: 'One player becomes Caesar and makes absurd rules. Break them at your peril!',
      rules: [
        'Choose first Caesar by any method (eldest, birthday, etc.)',
        'Caesar announces one silly rule everyone must follow (e.g., "Speak in third person")',
        'Round lasts 5 minutes',
        'Anyone who breaks the rule drinks',
        'After 5 minutes, Caesar drinks and passes title clockwise',
        'New Caesar makes new rule',
        'Game continues for 3-5 rounds'
      ],
      difficulty: 'easy',
      playerCount: { min: 3, max: 10 },
      duration: '15-30 minutes',
      drinkingTheme: 'ancient-rome',
      materials: ['Drinks', 'Timer', 'Optional: Paper crown for Caesar'],
      variations: [
        'Double Decree: Caesar makes two rules simultaneously',
        'Rebellion Mode: One player can challenge Caesar (rock-paper-scissors)',
        'Imperial Mode: Add complexity with each new Caesar'
      ],
      generatedAt: new Date().toISOString()
    },
    'prohibition': {
      id: `game-${Date.now()}`,
      name: 'Speakeasy Secrets',
      description: 'Stay in character as prohibition-era patrons. Give away your identity and drink!',
      rules: [
        'Each player picks a 1920s character (gangster, flapper, detective, etc.)',
        'Everyone has a "secret" they must hide (written on paper)',
        'Players ask each other yes/no questions',
        'If your secret is guessed, you drink',
        'You can bluff - if called out wrongly, accuser drinks',
        'Player with secret intact longest wins',
        'Use 1920s slang for bonus points (no drinking penalty)'
      ],
      difficulty: 'medium',
      playerCount: { min: 4, max: 8 },
      duration: '20-30 minutes',
      drinkingTheme: 'prohibition',
      materials: ['Drinks', 'Paper', 'Pens', 'Optional: 1920s music'],
      variations: [
        'Raid Mode: One player is the agent trying to bust everyone',
        'Password Entry: Players must give password to take each drink',
        'Jazz Hands: Must do a charleston move when drinking'
      ],
      generatedAt: new Date().toISOString()
    },
    'archetypal': {
      id: `game-${Date.now()}`,
      name: 'Archetype Assignment',
      description: 'Embody classic archetypes and act accordingly. Breaking character means drinking.',
      rules: [
        'Each player draws or chooses an archetype (Hero, Trickster, Sage, Rebel, etc.)',
        'Must stay in character for the round',
        'Players interact and ask questions',
        'Breaking character = drink',
        'Most convincing performance wins (group vote)',
        'Loser drinks, winner assigns next round\'s archetypes',
        'Play 3-5 rounds with different archetypes'
      ],
      difficulty: 'medium',
      playerCount: { min: 3, max: 8 },
      duration: '25-35 minutes',
      drinkingTheme: 'archetypal',
      materials: ['Drinks', 'Archetype cards or list'],
      variations: [
        'Alignment Mode: Add good/neutral/evil alignment',
        'Quest Mode: Group must complete a silly quest together',
        'Mashup Mode: Combine two archetypes for complexity'
      ],
      generatedAt: new Date().toISOString()
    },
    'default': {
      id: `game-${Date.now()}`,
      name: 'Social Sips',
      description: 'A friendly icebreaker game perfect for any group. Share stories and make memories.',
      rules: [
        'Players sit in a circle',
        'First player says "Never have I ever..." and completes the sentence',
        'Anyone who HAS done it takes a sip',
        'Person who drinks most recent goes next',
        'Keep it fun and respectful',
        'Play for 10-15 minutes or until stories run out'
      ],
      difficulty: 'easy',
      playerCount: { min: 3, max: 12 },
      duration: '15-20 minutes',
      materials: ['Drinks', 'Good company'],
      variations: [
        'Most Likely To: Change format to "Most likely to..." voting',
        'Story Time: Winner tells full story about their experience',
        'Two Truths: Combine with two truths and a lie'
      ],
      generatedAt: new Date().toISOString()
    }
  };

  return games[theme || 'default'];
}
