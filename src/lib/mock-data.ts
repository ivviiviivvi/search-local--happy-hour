import { Venue, Bartender, MenuItem, ThemedEvent, Review } from './types';

export const MOCK_BARTENDERS: Bartender[] = [
  {
    id: 'b1',
    name: 'Marcus Chen',
    bio: 'Award-winning mixologist specializing in craft cocktails with Asian-fusion flavors. 10+ years crafting experiences.',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80',
    venueId: '1',
    specialties: ['Craft Cocktails', 'Whiskey', 'Asian Fusion'],
    signatureDrinks: ['Yuzu Margarita', 'Ginger Old Fashioned', 'Sakura Martini'],
    yearsExperience: 12,
    followerCount: 1247,
    rating: 4.8,
    isVerified: true
  },
  {
    id: 'b2',
    name: 'Sofia Rodriguez',
    bio: 'Passionate about beer culture and local brews. Creating the perfect pour since 2015.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    venueId: '2',
    specialties: ['Craft Beer', 'Beer Pairing', 'Local Brews'],
    signatureDrinks: ['IPA Flight', 'Smoked Porter', 'Citrus Wheat'],
    yearsExperience: 8,
    followerCount: 892,
    rating: 4.9,
    isVerified: true
  },
  {
    id: 'b3',
    name: 'James Wellington',
    bio: 'Classical bartending meets modern innovation. Wine sommelier and spirits enthusiast.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    venueId: '3',
    specialties: ['Wine', 'Classic Cocktails', 'Spirits'],
    signatureDrinks: ['The Wellington', 'Elderflower Spritz', 'Smoked Manhattan'],
    yearsExperience: 15,
    followerCount: 2103,
    rating: 4.7,
    isVerified: true
  }
];

export const MOCK_MENU_ITEMS: Record<string, MenuItem[]> = {
  '1': [
    {
      id: 'm1',
      name: 'Yuzu Margarita',
      description: 'Fresh yuzu juice, premium tequila, agave, lime, and a chili salt rim',
      price: '$12',
      category: 'Signature Cocktails',
      ingredients: ['Yuzu', 'Tequila', 'Agave', 'Lime', 'Chili Salt'],
      isSignature: true,
      available: true
    },
    {
      id: 'm2',
      name: 'Ginger Old Fashioned',
      description: 'House-infused ginger bourbon, maple syrup, aromatic bitters',
      price: '$14',
      category: 'Signature Cocktails',
      ingredients: ['Bourbon', 'Ginger', 'Maple', 'Bitters'],
      isSignature: true,
      available: true
    },
    {
      id: 'm3',
      name: 'Classic Mojito',
      description: 'White rum, fresh mint, lime, cane sugar, soda',
      price: '$10',
      category: 'Classic Cocktails',
      ingredients: ['Rum', 'Mint', 'Lime', 'Sugar'],
      available: true
    },
    {
      id: 'm4',
      name: 'House Red Wine',
      description: 'Rotating selection of premium reds',
      price: '$8',
      category: 'Wine',
      available: true
    }
  ],
  '2': [
    {
      id: 'm5',
      name: 'Hazy IPA',
      description: 'Juicy, tropical hop bomb with notes of mango and passionfruit',
      price: '$7',
      category: 'Draft Beer',
      isSignature: true,
      available: true
    },
    {
      id: 'm6',
      name: 'Smoked Porter',
      description: 'Rich, smoky dark beer with chocolate and coffee notes',
      price: '$8',
      category: 'Draft Beer',
      isSignature: true,
      available: true
    },
    {
      id: 'm7',
      name: 'Loaded Nachos',
      description: 'House-made chips, cheese, jalapeños, sour cream, salsa',
      price: '$12',
      category: 'Food',
      available: true
    }
  ],
  '3': [
    {
      id: 'm8',
      name: 'The Wellington',
      description: 'Barrel-aged gin, elderflower, cucumber, topped with champagne',
      price: '$16',
      category: 'Signature Cocktails',
      isSignature: true,
      available: true
    },
    {
      id: 'm9',
      name: 'Smoked Manhattan',
      description: 'Rye whiskey, sweet vermouth, smoked with applewood',
      price: '$15',
      category: 'Classic Cocktails',
      isSignature: true,
      available: true
    },
    {
      id: 'm10',
      name: 'Chardonnay Flight',
      description: 'Three premium chardonnays from around the world',
      price: '$18',
      category: 'Wine',
      available: true
    }
  ]
};

export const MOCK_EVENTS: Record<string, ThemedEvent[]> = {
  '1': [
    {
      id: 'e1',
      title: 'Tiki Paradise Night',
      description: 'Transport yourself to a tropical paradise with exotic cocktails, tiki decorations, and island vibes',
      theme: 'Tiki',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
      startTime: '18:00',
      endTime: '23:00',
      image: 'https://images.unsplash.com/photo-1561564765-6c49c37e99c8?w=800&q=80',
      rsvpCount: 47,
      tags: ['Tiki', 'Tropical', 'Live Music']
    },
    {
      id: 'e2',
      title: 'Craft Cocktail Workshop',
      description: 'Learn from Marcus Chen how to make signature cocktails. Includes all materials and tastings.',
      theme: 'Educational',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 12).toISOString(),
      startTime: '19:00',
      endTime: '21:00',
      rsvpCount: 24,
      tags: ['Workshop', 'Educational', 'Cocktails']
    }
  ],
  '2': [
    {
      id: 'e3',
      title: 'Oktoberfest Celebration',
      description: 'Authentic German beers, pretzels, bratwurst, and live music all night long!',
      theme: 'Oktoberfest',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString(),
      startTime: '17:00',
      endTime: '22:00',
      image: 'https://images.unsplash.com/photo-1554692090-b8d076e0d5e2?w=800&q=80',
      rsvpCount: 89,
      tags: ['Oktoberfest', 'Beer', 'Food', 'Live Music']
    }
  ],
  '3': [
    {
      id: 'e4',
      title: 'Wine Down Wednesday',
      description: 'Half-price wine bottles, live jazz, and coastal sunset views',
      theme: 'Wine Night',
      date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(),
      startTime: '17:00',
      endTime: '21:00',
      rsvpCount: 35,
      tags: ['Wine', 'Jazz', 'Sunset']
    }
  ]
};

export const MOCK_REVIEWS: Record<string, Review[]> = {
  '1': [
    {
      id: 'r1',
      userId: 'u1',
      userName: 'Alex Thompson',
      userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      venueId: '1',
      rating: 5,
      comment: 'Marcus makes the best cocktails in the city! The Yuzu Margarita is absolutely incredible. The rooftop atmosphere during sunset is unbeatable.',
      photos: ['https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80'],
      tags: ['Great Cocktails', 'Amazing Views', 'Expert Bartender'],
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
      helpfulCount: 24
    },
    {
      id: 'r2',
      userId: 'u2',
      userName: 'Emma Davis',
      venueId: '1',
      rating: 5,
      comment: 'Perfect spot for after-work drinks. The happy hour deals are fantastic and the staff is super friendly!',
      tags: ['Great Value', 'Friendly Staff', 'Happy Hour'],
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
      helpfulCount: 18
    }
  ],
  '2': [
    {
      id: 'r3',
      userId: 'u3',
      userName: 'Mike Johnson',
      userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      venueId: '2',
      rating: 5,
      comment: 'Sofia knows everything about craft beer! She helped me discover my new favorite IPA. Great selection and even better service.',
      tags: ['Beer Expert', 'Great Selection', 'Knowledgeable Staff'],
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
      helpfulCount: 31
    }
  ],
  '3': [
    {
      id: 'r4',
      userId: 'u4',
      userName: 'Sarah Martinez',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      venueId: '3',
      rating: 4,
      comment: 'Upscale and elegant. James crafted a custom cocktail based on my preferences. Pricey but worth it for special occasions.',
      tags: ['Upscale', 'Custom Drinks', 'Special Occasion'],
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
      helpfulCount: 15
    }
  ]
};

export const MOCK_VENUES: Venue[] = [
  {
    id: '1',
    name: 'The Golden Hour',
    address: '123 Main St',
    neighborhood: 'Downtown',
    priceLevel: 2,
    rating: 4.5,
    reviewCount: 342,
    tags: ['Rooftop', 'Cocktails', 'Outdoor'],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
      'https://images.unsplash.com/photo-1560962462-08b29cccf1ae?w=800&q=80'
    ],
    distance: 0.3,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    description: 'Elevated cocktail lounge with panoramic city views. Our award-winning mixologists craft innovative drinks using premium spirits and fresh ingredients.',
    followerCount: 1847,
    amenities: ['Rooftop', 'Outdoor Seating', 'Live Music', 'Private Events'],
    bartenders: [MOCK_BARTENDERS[0]],
    menu: MOCK_MENU_ITEMS['1'],
    events: MOCK_EVENTS['1'],
    hours: {
      monday: { start: '16:00', end: '23:00' },
      tuesday: { start: '16:00', end: '23:00' },
      wednesday: { start: '16:00', end: '23:00' },
      thursday: { start: '16:00', end: '00:00' },
      friday: { start: '16:00', end: '02:00' },
      saturday: { start: '14:00', end: '02:00' },
      sunday: { start: '14:00', end: '22:00' }
    },
    deals: [
      {
        id: 'd1',
        title: '$5 House Cocktails',
        description: 'All house cocktails and draft beers',
        type: 'cocktails',
        price: '$5',
        daysActive: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        timeRange: { start: '16:00', end: '19:00' }
      },
      {
        id: 'd2',
        title: 'Half-Price Wine',
        description: 'All wine by the glass',
        type: 'wine',
        price: '50% off',
        daysActive: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        timeRange: { start: '16:00', end: '18:00' }
      }
    ]
  },
  {
    id: '2',
    name: 'Brewmaster\'s Hideaway',
    address: '456 Elm Ave',
    neighborhood: 'Arts District',
    priceLevel: 1,
    rating: 4.7,
    reviewCount: 523,
    tags: ['Craft Beer', 'Casual', 'Games'],
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80'
    ],
    distance: 0.7,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    description: 'Neighborhood craft beer haven with 30+ rotating taps featuring local and regional breweries. Cozy atmosphere with board games.',
    followerCount: 2134,
    amenities: ['Board Games', 'Dog Friendly', 'Darts', 'Pool Table'],
    bartenders: [MOCK_BARTENDERS[1]],
    menu: MOCK_MENU_ITEMS['2'],
    events: MOCK_EVENTS['2'],
    hours: {
      monday: { start: '15:00', end: '23:00' },
      tuesday: { start: '15:00', end: '23:00' },
      wednesday: { start: '15:00', end: '23:00' },
      thursday: { start: '15:00', end: '00:00' },
      friday: { start: '15:00', end: '01:00' },
      saturday: { start: '12:00', end: '01:00' },
      sunday: { start: '12:00', end: '22:00' }
    },
    deals: [
      {
        id: 'd3',
        title: '$3 Draft Beers',
        description: 'Select draft beers and appetizers',
        type: 'beer',
        price: '$3',
        daysActive: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        timeRange: { start: '15:00', end: '18:00' }
      },
      {
        id: 'd4',
        title: 'Taco Tuesday',
        description: '$2 tacos with drink purchase',
        type: 'food',
        price: '$2',
        daysActive: ['tuesday'],
        timeRange: { start: '15:00', end: '20:00' }
      }
    ]
  },
  {
    id: '3',
    name: 'Sunset Lounge',
    address: '789 Beach Blvd',
    neighborhood: 'Waterfront',
    priceLevel: 3,
    rating: 4.3,
    reviewCount: 287,
    tags: ['Upscale', 'Ocean View', 'Live Music'],
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=800&q=80',
      'https://images.unsplash.com/photo-1509669803555-fd5dbb783b5f?w=800&q=80'
    ],
    distance: 1.2,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    description: 'Sophisticated waterfront lounge with breathtaking ocean views. Premium wines, craft cocktails, and live jazz every Friday and Saturday.',
    followerCount: 1456,
    amenities: ['Ocean View', 'Live Music', 'Valet Parking', 'Dress Code'],
    bartenders: [MOCK_BARTENDERS[2]],
    menu: MOCK_MENU_ITEMS['3'],
    events: MOCK_EVENTS['3'],
    hours: {
      monday: null,
      tuesday: { start: '17:00', end: '23:00' },
      wednesday: { start: '17:00', end: '23:00' },
      thursday: { start: '17:00', end: '00:00' },
      friday: { start: '17:00', end: '01:00' },
      saturday: { start: '17:00', end: '01:00' },
      sunday: { start: '17:00', end: '22:00' }
    },
    deals: [
      {
        id: 'd5',
        title: 'Wine Down Wednesday',
        description: '$6 select wines and small plates',
        type: 'wine',
        price: '$6',
        daysActive: ['wednesday'],
        timeRange: { start: '17:00', end: '20:00' }
      }
    ]
  },
  {
    id: '4',
    name: 'The Local Tap',
    address: '321 Oak Street',
    neighborhood: 'University District',
    priceLevel: 1,
    rating: 4.6,
    reviewCount: 612,
    tags: ['Sports Bar', 'Wings', 'Beer Garden'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    distance: 0.5,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    description: 'Classic sports bar with outdoor beer garden. Watch the game on our 20+ screens while enjoying wings and cold beer.',
    followerCount: 3241,
    amenities: ['Beer Garden', 'Sports TVs', 'Outdoor Games', 'Group Friendly'],
    deals: [
      {
        id: 'd6',
        title: 'All Day Happy Hour',
        description: '$4 select beers and well drinks',
        type: 'all',
        price: '$4',
        daysActive: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        timeRange: { start: '11:00', end: '19:00' }
      },
      {
        id: 'd7',
        title: 'Wing Wednesday',
        description: '50¢ wings with any drink',
        type: 'food',
        price: '50¢',
        daysActive: ['wednesday'],
        timeRange: { start: '16:00', end: '22:00' }
      }
    ]
  },
  {
    id: '5',
    name: 'Verde Garden Bar',
    address: '555 Park Lane',
    neighborhood: 'Midtown',
    priceLevel: 2,
    rating: 4.4,
    reviewCount: 198,
    tags: ['Garden Patio', 'Farm-to-Table', 'Cocktails'],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
    distance: 0.9,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
    description: 'Lush garden oasis in the heart of the city. Farm-to-table cocktails made with fresh herbs from our garden.',
    followerCount: 987,
    amenities: ['Garden Patio', 'Fresh Ingredients', 'Pet Friendly', 'Brunch'],
    deals: [
      {
        id: 'd8',
        title: 'Garden Hour',
        description: '$7 craft cocktails and $5 small bites',
        type: 'cocktails',
        price: '$7',
        daysActive: ['tuesday', 'wednesday', 'thursday', 'friday'],
        timeRange: { start: '16:00', end: '18:30' }
      }
    ]
  },
  {
    id: '6',
    name: 'Bourbon & Branch',
    address: '888 Whiskey Row',
    neighborhood: 'Historic District',
    priceLevel: 3,
    rating: 4.8,
    reviewCount: 456,
    tags: ['Whiskey Bar', 'Speakeasy', 'Craft Cocktails'],
    image: 'https://images.unsplash.com/photo-1509669803555-fd5dbb783b5f?w=800&q=80',
    distance: 1.5,
    lastUpdated: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    description: 'Hidden speakeasy-style whiskey bar with over 200 bourbon selections. Prohibition-era ambiance with modern craft cocktails.',
    followerCount: 1654,
    amenities: ['Speakeasy', 'Whiskey Collection', 'Reservations', 'Cigar Lounge'],
    deals: [
      {
        id: 'd9',
        title: 'Bourbon Hour',
        description: '$8 select bourbons and classic cocktails',
        type: 'cocktails',
        price: '$8',
        daysActive: ['thursday', 'friday'],
        timeRange: { start: '17:00', end: '19:00' }
      }
    ]
  }
];
