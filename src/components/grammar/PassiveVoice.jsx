import { LightBulbIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const PassiveVoice = () => {
  const passiveVoiceExamples = [
    {
      category: 'Present Passive',
      description: 'Used to describe actions happening now or general truths in a passive form.',
      example: 'English is spoken all over the world.',
      ieltsUse: 'Common in Writing Task 1 for describing processes or general trends.'
    },
    {
      category: 'Past Passive',
      description: 'Used to describe actions completed in the past in a passive form.',
      example: 'The report was written yesterday.',
      ieltsUse: 'Useful in Writing Task 2 for describing past events or actions.'
    },
    {
      category: 'Future Passive',
      description: 'Used to describe actions that will be completed in the future in a passive form.',
      example: 'The results will be announced tomorrow.',
      ieltsUse: 'Important in Writing Task 2 for discussing future implications.'
    },
    {
      category: 'Present Perfect Passive',
      description: 'Used to describe actions that have been completed recently or at an unspecified time in the past in a passive form.',
      example: 'The project has been completed.',
      ieltsUse: 'Useful in Writing Task 2 for discussing achievements or results.'
    },
    {
      category: 'Modal Passive',
      description: 'Used to describe actions that are possible, necessary, or likely in a passive form.',
      example: 'The issue must be addressed immediately.',
      ieltsUse: 'Common in Writing Task 2 for expressing necessity or recommendations.'
    },
    {
      category: 'Passive with "By"',
      description: 'Used to emphasize the agent performing the action in a passive sentence.',
      example: 'The book was written by a famous author.',
      ieltsUse: 'Useful in Writing Task 2 for attributing actions or results to specific entities.'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Passive Voice in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastering the passive voice is essential for describing processes, results, and formal writing in IELTS tasks.
          </p>
        </motion.div>

        <div className="space-y-8">
          {passiveVoiceExamples.map((example, index) => (
            <motion.div
              key={example.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-green-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{example.category}</h2>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{example.description}</p>
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

export default PassiveVoice;