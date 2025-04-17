import { LightBulbIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const AdjectivesAdverbs = () => {
  const examples = [
    {
      category: 'Adjectives',
      description: 'Adjectives describe or give more information about nouns (people, places, things).',
      formula: 'Adjective + Noun or be + Adjective',
      example: 'The test was difficult.',
      ieltsUse:
        'Crucial in Writing Task 2 to describe abstract ideas like "economic development" or "social issues". Also useful in Speaking Part 2 when describing experiences or objects, e.g., "It was a fascinating book."'
    },
    {
      category: 'Adverbs',
      description: 'Adverbs modify verbs, adjectives, or other adverbs, often showing how, when, where, or to what extent.',
      formula: 'Verb + Adverb / Adverb + Adjective',
      example: 'She speaks fluently.',
      ieltsUse:
        'Demonstrates fluency in Speaking when expressing manner or opinion (e.g., "I completely agree"). Also valuable in Writing Task 2 to emphasize points (e.g., "It is generally accepted that...").'
    },
    {
      category: 'Adjective Order',
      description:
        'When using multiple adjectives, they must follow a specific order: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose → Noun.',
      formula: 'Opinion + Size + Age + Shape + Color + Origin + Material + Noun',
      example: 'A beautiful small wooden table.',
      ieltsUse:
        'Helps in Speaking Part 2 to describe objects, and in Writing Task 1 (Academic) when describing visuals (e.g., "a large blue industrial machine"). Clear descriptions improve coherence and accuracy.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Adjectives and Adverbs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Improve your IELTS band score by mastering the use of adjectives and adverbs for richer, clearer communication.
          </p>
        </motion.div>

        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{example.category}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2 font-medium">Description:</p>
                <p className="text-gray-600 mb-4">{example.description}</p>

                <p className="text-gray-700 mb-2 font-medium">Formula:</p>
                <div className="bg-blue-100 text-blue-800 p-3 rounded-md font-mono mb-4">
                  {example.formula}
                </div>

                <p className="text-gray-700 mb-2 font-medium">Example:</p>
                <div className="bg-gray-50 rounded-md p-4 mb-4">
                  <p className="text-gray-700 italic">"{example.example}"</p>
                </div>

                <div className="flex items-start space-x-2">
                  <LightBulbIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">IELTS Use:</span> {example.ieltsUse}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdjectivesAdverbs;
