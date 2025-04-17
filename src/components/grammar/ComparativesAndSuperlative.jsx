import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const ComparativesSuperlatives = () => {
  const comparativesSuperlatives = [
    {
      name: "Comparatives",
      form: "Adjective + -er / more + adjective",
      description: "Comparatives are used to compare two things, people, or ideas. They indicate that one thing has more or less of a particular quality than another.",
      example: "This book is cheaper than that one.",
      use: "Comparatives are common in Writing Task 2 when discussing different aspects of a topic, such as comparing trends or opinions.",
      additionalExamples: [
        "This problem is easier to solve than that one.",
        "My house is bigger than yours."
      ],
      tip: "Be sure to use 'than' after the comparative form. Additionally, for one-syllable adjectives, you typically add '-er' (e.g., 'smaller'). For adjectives with more syllables, use 'more' (e.g., 'more expensive')."
    },
    {
      name: "Superlatives",
      form: "Adjective + -est / most + adjective",
      description: "Superlatives are used to describe the highest or lowest degree of a quality. They refer to one thing being at the extreme end of a spectrum, whether positive or negative.",
      example: "This is the most interesting movie I have ever seen.",
      use: "Superlatives are useful in both Writing and Speaking to emphasize extremes. For instance, they can be used in Writing Task 1 when describing data or trends that show clear differences.",
      additionalExamples: [
        "This is the most expensive restaurant in town.",
        "That was the best decision I ever made."
      ],
      tip: "For one-syllable adjectives, add '-est' (e.g., 'tallest'). For longer adjectives, use 'most' before the adjective (e.g., 'most beautiful'). Don't forget to use 'the' before superlatives!"
    },
    {
      name: "Irregular Forms",
      form: "Irregular adjectives (e.g., good → better → best)",
      description: "Some adjectives have irregular forms that do not follow the typical patterns of adding '-er' or 'more'. These must be memorized.",
      example: "This solution is better than the previous one.",
      use: "Irregular forms are important for accuracy in both Writing and Speaking tasks. For example, in Speaking Part 2, when you describe experiences or objects, you might use 'better' or 'best' to highlight a specific choice.",
      additionalExamples: [
        "This exam was worse than the last one.",
        "This is the best pizza I've ever eaten."
      ],
      tip: "Common irregular adjectives include 'good' (better, best), 'bad' (worse, worst), 'far' (further, furthest), 'little' (less, least), and 'much' (more, most). Be sure to use these forms correctly!"
    },
    {
      name: "Double Comparatives",
      form: "The + comparative, the + comparative",
      description: "Double comparatives are used to show cause-and-effect relationships, or to emphasize how two factors depend on each other.",
      example: "The harder you work, the more successful you become.",
      use: "Double comparatives are frequently used in Writing Task 2 to discuss the relationship between factors, such as the effect of education on career success, or in Speaking Part 3 to discuss social issues.",
      additionalExamples: [
        "The faster you run, the stronger your body becomes.",
        "The more you practice, the better you get."
      ],
      tip: "In double comparatives, both parts of the sentence follow the comparative form. The structure 'The + comparative, the + comparative' is used to express a correlation between two things."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comparatives & Superlatives in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how to use comparatives and superlatives correctly will help you make precise comparisons and emphasize key points in IELTS Writing and Speaking tasks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {comparativesSuperlatives.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-indigo-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{item.name}</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookOpenIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Form</h3>
                      <p className="text-gray-600 font-mono bg-gray-50 p-2 rounded">
                        {item.form}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="bg-gray-50 rounded-md p-4 mb-4">
                      <p className="text-gray-700 italic">"{item.example}"</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Additional Examples</h3>
                      <ul className="list-inside list-disc text-gray-600">
                        {item.additionalExamples.map((ex, idx) => (
                          <li key={idx} className="italic">{`"${ex}"`}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <LightBulbIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">IELTS Use:</span> {item.use}
                      </p>
                    </div>

                    {item.tip && (
                      <div className="mt-4 p-4 bg-yellow-100 rounded-md">
                        <p className="text-sm text-yellow-700"><span className="font-semibold">Tip:</span> {item.tip}</p>
                      </div>
                    )}
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

export default ComparativesSuperlatives;
