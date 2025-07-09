export const courseData = [
  {
    id: 1,
    title: 'PASO 1',
    grammar: ['Personal Pronouns', 'Possessive Adjectives', 'Simple Present', 'Plurals A vs. An'],
    vocabulary: ['Alphabet', 'Daily Routines', 'Most common verbs', 'Adjectives'],
  },
  {
    id: 2,
    title: 'PASO 2',
    grammar: ['Question Words', 'Present Continuous', 'Countable/Uncountable', 'Articles: The'],
    vocabulary: ['Numbers & Time', 'Family Members', 'Food & Drinks', 'Colors & Shapes'],
  },
  {
    id: 3,
    title: 'PASO 3',
    grammar: ['Simple Past', 'Past Continuous', 'Prepositions of Place', 'Conjunctions'],
    vocabulary: ['Jobs & Occupations', 'Places in the City', 'The Weather', 'Months & Seasons'],
  },
  ...Array.from({ length: 18 }, (_, i) => ({
    id: i + 4,
    title: `PASO ${i + 4}`,
    grammar: ['Tema de gramática A', 'Tema de gramática B', 'Tema de gramática C', 'Tema de gramática D'],
    vocabulary: ['Tema de vocabulario A', 'Tema de vocabulario B', 'Tema de vocabulario C', 'Tema de vocabulario D'],
  })),
];