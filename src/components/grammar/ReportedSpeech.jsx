import { LightBulbIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const ReportedSpeech = () => {
  const examples = [
    {
      category: 'Statements',
      description: 'Used to report what someone said or claimed.',
      formula: 'Subject + said (that) + clause',
      example: 'He said (that) he was tired.',
      ieltsUse:
        'Useful in Writing Task 2 to refer to expert opinions, studies, or general beliefs. E.g., "Experts said that regular exercise improves mental health."'
    },
    {
      category: 'Yes/No Questions',
      description: 'Used to report closed-ended questions.',
      formula: 'Subject + asked if/whether + clause',
      example: 'She asked if I had finished the project.',
      ieltsUse:
        'Useful in Speaking Part 2 or 3 to describe past conversations. Helps demonstrate grammatical range when narrating experiences.'
    },
    {
      category: 'Wh- Questions',
      description: 'Used to report open-ended questions.',
      formula: 'Subject + asked + question word (what, where, when, etc.) + clause',
      example: 'He asked where I had gone.',
      ieltsUse:
        'Useful in Speaking when sharing stories, especially about situations involving others. Shows ability to use complex structures.'
    },
    {
      category: 'Commands/Requests',
      description: 'Used to report what someone told or asked someone to do.',
      formula: 'Subject + told/asked + object + to + base verb',
      example: 'He told me to complete the assignment.',
      ieltsUse:
        'Often appears in formal letters (Writing Task 1 General) or advice essays in Task 2. E.g., "The manager instructed staff to follow safety protocols."'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reported Speech</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master reported speech to enhance coherence and grammatical range in your IELTS Writing and Speaking tasks.
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
              <div className="bg-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{example.category}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-2 font-medium">Description:</p>
                <p className="text-gray-600 mb-4">{example.description}</p>

                <p className="text-gray-700 mb-2 font-medium">Formula:</p>
                <div className="bg-purple-100 text-purple-800 p-3 rounded-md font-mono mb-4">
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

export default ReportedSpeech;
