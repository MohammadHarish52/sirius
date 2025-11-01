export type Category = 'Work' | 'Travel' | 'Projects' | 'Personal' | 'Education' | 'Finance' | 'Ideas';

export interface Note {
  id: string;
  category: Category;
  title: string;
  description: string;
  timestamp: string;
  isFavorite: boolean;
}

export const notes: Note[] = [
  {
    id: '1',
    category: 'Work' as const,
    title: 'Q1 Project Planning Meeting',
    description: 'Discussed key milestones - Frontend redesign by March - API migration by February - Design system 1. Sarah to finalize design system 2. Mike to setup CI/CD pipeline 3. Schedule weekly progress reviews',
    timestamp: '12 months ago',
    isFavorite: false
  },
  {
    id: '2',
    category: 'Travel' as const,
    title: 'Japan Travel Itinerary',
    description: 'Tokyo (5 days) - Shibuya Crossing - Teamlab Borderless - Tsukiji Market Kyoto (4 days) - Fushimi Inari - Arashiyama Bamboo Grove - Kinkaku-ji Osaka (3 days) - Dotonbori - Osaka Castle - Universal Studios',
    timestamp: '9 months ago',
    isFavorite: false
  },
  {
    id: '3',
    category: 'Projects' as const,
    title: 'React Performance Optimization',
    description: 'Key techniques: 1. useMemo for expensive calculations 2. useCallback for function memoization 3. React.memo for component memoization 4. Virtual list for large datasets 5. Code splitting with lazy loading Tools: - React DevTools - Lighthouse - Chrome Performance tab',
    timestamp: '6 months ago',
    isFavorite: false
  },
  {
    id: '4',
    category: 'Personal' as const,
    title: 'Home Workout Routine',
    description: 'Circuit Training (30 mins): 1. 20 pushups 2. 30 squats 3. 15 burpees 4. 1 min plank 5. 20 lunges each leg Repeat 3 times Rest 1 min between sets Cardio - 20 min HIIT - 5 min cooldown',
    timestamp: '8 months ago',
    isFavorite: false
  },
  {
    id: '5',
    category: 'Personal' as const,
    title: 'Photography Settings',
    description: 'Landscape Settings - f/8 to f/11 aperture - ISO 100 - Tripod recommended Portrait Settings - f/1.8 to f/2.8 - Fast shutter speed - Natural lighting focus Night Photography - High ISO (800+) - Slow shutter speed - Manual focus',
    timestamp: '8 months ago',
    isFavorite: false
  },
  {
    id: '6',
    category: 'Personal' as const,
    title: 'Mediterranean Recipe Collection',
    description: 'Greek Salad - Cucumber - Tomatoes - Red onion - Feta cheese - Kalamata olives - Olive oil - Oregano Hummus - Chickpeas - Tahini - Garlic - Lemon juice - Olive oil - Cumin',
    timestamp: '8 months ago',
    isFavorite: false
  },
  {
    id: '7',
    category: 'Education' as const,
    title: '2025 Reading List',
    description: 'Currently Reading: 1. Dune: Messiah by Frank Herbert 2. The Pragmatic Programmer To Read Next: - Snow Crash by Neal Stephenson - Clean Architecture by Robert Martin - Foundation by Isaac Asimov - The Design of Everyday Things',
    timestamp: '7 months ago',
    isFavorite: false
  },
  {
    id: '8',
    category: 'Finance' as const,
    title: 'Personal Finance Tracker',
    description: 'Monthly Budget - Rent: $2000 - Utilities: $200 - Groceries: $600 - Transportation: $150 - Entertainment: $300 - Savings: $1000 Investments - 401k: 10% of income - Index funds: $500/month - Emergency fund: 6 months expenses',
    timestamp: '7 months ago',
    isFavorite: false
  }
];

export const categoryColors: Record<Category, { light: string; accent: string }> = {
  Work: { light: 'bg-(--color-purple-light)', accent: 'text-(--color-work-accent)' },
  Travel: { light: 'bg-(--color-peach-light)', accent: 'text-(--color-travel-accent)' },
  Projects: { light: 'bg-(--color-cyan-light)', accent: 'text-(--color-projects-accent)' },
  Personal: { light: 'bg-(--color-blue-light)', accent: 'text-(--color-personal-accent)' },
  Education: { light: 'bg-(--color-blue-light)', accent: 'text-(--color-education-accent)' },
  Finance: { light: 'bg-(--color-pink-light)', accent: 'text-(--color-finance-accent)' },
  Ideas: { light: 'bg-(--color-peach-light)', accent: 'text-(--color-ideas-accent)' }
};