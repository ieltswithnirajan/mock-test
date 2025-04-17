import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Conditionals = () => {
  const conditionals = [
    {
      name: "Zero Conditional",
      form: "If + present simple, present simple",
      description: "Describes facts or scientific truths.",
      example: "If you heat water to 100°C, it boils.",
      use: "Describing facts or scientific truths."
    },
    {
      name: "First Conditional",
      form: "If + present simple, will + base verb",
      description: "Predicts real and likely future events.",
      example: "If it rains tomorrow, I will stay at home.",
      use: "Predicting real and likely future events."
    },
    {
      name: "Second Conditional",
      form: "If + past simple, would + base verb",
      description: "Discusses hypothetical or unlikely situations.",
      example: "If I were rich, I would travel the world.",
      use: "Discussing hypothetical or unlikely situations."
    },
    {
      name: "Third Conditional",
      form: "If + past perfect, would have + past participle",
      description: "Reflects on past events that didn't happen and their hypothetical consequences.",
      example: "If I had studied harder, I would have passed the exam.",
      use: "Reflecting on past events that didn't happen and their hypothetical consequences."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Conditionals in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conditionals express hypothetical situations and their consequences. They are frequently used to discuss future predictions or reflect on past events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conditionals.map((conditional, index) => (
            <motion.div
              key={conditional.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-green-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{conditional.name}</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookOpenIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Form</h3>
                      <p className="text-gray-600 font-mono bg-gray-50 p-2 rounded">
                        {conditional.form}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4">{conditional.description}</p>
                    
                    <div className="bg-gray-50 rounded-md p-4 mb-4">
                      <p className="text-gray-700 italic">"{conditional.example}"</p>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <LightBulbIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">IELTS Use:</span> {conditional.use}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conditionals; 