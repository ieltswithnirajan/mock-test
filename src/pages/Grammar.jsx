import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ChevronDownIcon, 
} from '@heroicons/react/24/outline';

const Grammar = () => {
  const [expandedTopic, setExpandedTopic] = useState(null);

  const grammarTopics = [
    {
      id: 1,
      title: 'Tenses',
      description: 'Master all English tenses with detailed explanations and examples.',
      content: `The English language has 12 main tenses, divided into three time frames: past, present, and future. Each time frame has four aspects: simple, continuous, perfect, and perfect continuous.

Key points to remember:
- Present Simple: Used for habits and general truths
- Present Continuous: Used for actions happening now
- Present Perfect: Used for actions completed in the recent past
- Past Simple: Used for completed actions in the past
- Future Simple: Used for predictions and promises

Example sentences:
1. I study English every day. (Present Simple)
2. I am studying English now. (Present Continuous)
3. I have studied English for 2 years. (Present Perfect)
4. I studied English yesterday. (Past Simple)
5. I will study English tomorrow. (Future Simple)`,
    },
    {
      id: 2,
      title: 'Prepositions',
      description: 'Learn the correct usage of prepositions in different contexts.',
      content: `Prepositions are words that show the relationship between a noun or pronoun and other words in a sentence.

Common prepositions:
- Time: at, on, in, for, since
- Place: at, on, in, under, over
- Direction: to, from, into, out of
- Manner: by, with, without

Example sentences:
1. I will meet you at 3 PM. (Time)
2. The book is on the table. (Place)
3. She walked to the store. (Direction)
4. He solved the problem with ease. (Manner)`,
    },
    {
      id: 3,
      title: 'Complex Sentences',
      description: 'Understand how to create and use complex sentences effectively.',
      content: `Complex sentences contain one independent clause and at least one dependent clause.

Types of complex sentences:
1. Adverbial clauses
2. Relative clauses
3. Noun clauses

Example sentences:
1. Although it was raining, we went for a walk. (Adverbial)
2. The book that I read was interesting. (Relative)
3. I know that you are right. (Noun)`,
    },
    {
      id: 4,
      title: 'Articles',
      description: 'Learn the proper use of articles (a, an, the) in English.',
      content: `Articles are used to specify nouns. There are two types: definite (the) and indefinite (a, an).

Rules for using articles:
1. Use 'a' before consonant sounds
2. Use 'an' before vowel sounds
3. Use 'the' for specific or previously mentioned nouns

Example sentences:
1. I saw a cat in the garden.
2. She is an honest person.
3. The book on the table is mine.`,
    },
    {
      id: 5,
      title: 'Conditionals',
      description: 'Master the different types of conditional sentences.',
      content: `Conditionals express different degrees of possibility and probability.

Types of conditionals:
1. Zero Conditional: General truths
2. First Conditional: Possible future events
3. Second Conditional: Unreal present/future
4. Third Conditional: Unreal past

Example sentences:
1. If you heat water, it boils. (Zero)
2. If it rains, we will stay home. (First)
3. If I were rich, I would travel. (Second)
4. If I had studied, I would have passed. (Third)`,
    },
    {
      id: 6,
      title: 'Modal Verbs',
      description: 'Understand the use of modal verbs for expressing ability, permission, and obligation.',
      content: `Modal verbs are auxiliary verbs that express necessity, possibility, permission, or ability.

Common modal verbs:
- can, could
- may, might
- must, have to
- should, ought to
- will, would

Example sentences:
1. I can speak English. (Ability)
2. You may leave now. (Permission)
3. You must study hard. (Obligation)
4. You should practice daily. (Advice)`,
    },
  ];

  const toggleTopic = (id) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  // Define a palette of background colors for the cards
  const bgColors = [
    'bg-sky-50', 
    'bg-teal-50', 
    'bg-purple-50', 
    'bg-yellow-50', 
    'bg-pink-50', 
    'bg-indigo-50'
  ];

  // Define corresponding hover background colors
  const hoverBgColors = [
    'hover:bg-sky-100', 
    'hover:bg-teal-100', 
    'hover:bg-purple-100', 
    'hover:bg-yellow-100', 
    'hover:bg-pink-100', 
    'hover:bg-indigo-100'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Grammar Topics</h1>
          <p className="section-subtitle">
            Master essential grammar concepts for IELTS success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {grammarTopics.map((topic, index) => {
            const cardBgColor = bgColors[index % bgColors.length];
            const cardHoverBgColor = hoverBgColors[index % hoverBgColors.length]; // Not directly used on card, but could be for button

            return (
              <motion.div
                key={topic.id}
                layout
                initial={{ borderRadius: "12px" }}
                className={`${cardBgColor} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.button
                  onClick={() => toggleTopic(topic.id)}
                  className={`w-full text-left p-6 cursor-pointer focus:outline-none rounded-t-xl ${cardHoverBgColor}`}
                  aria-expanded={expandedTopic === topic.id}
                  aria-controls={`content-${topic.id}`}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {topic.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedTopic === topic.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">{topic.description}</p>
                </motion.button>

                <AnimatePresence initial={false}>
                  {expandedTopic === topic.id && (
                    <motion.section
                      key="content"
                      id={`content-${topic.id}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden bg-white/50"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <hr className="mb-4 border-gray-200" />
                        <div className="prose prose-sm max-w-none text-gray-700">
                          {topic.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4 last:mb-0">
                              {paragraph.split('\n').map((line, lineIndex) => (
                                <span key={lineIndex} className="block">{line}</span>
                              ))}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grammar; 