import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Articles = () => {
  const articles = [
    {
      name: "Indefinite Articles (A, An)",
      description: "Use 'a' before consonant sounds and 'an' before vowel sounds.",
      examples: [
        "I saw a movie last night.",
        "I ate an apple for lunch."
      ],
      use: "Introducing new or non-specific items or things."
    },
    {
      name: "Definite Article (The)",
      description: "Use 'the' when referring to something specific or known.",
      examples: [
        "I went to the bank yesterday.",
        "The book on the table is mine."
      ],
      use: "Talking about specific items or ideas both the speaker and listener are familiar with."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the correct use of articles (a, an, the) is essential for clarity in both writing and speaking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-orange-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{article.name}</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookOpenIcon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    
                    <div className="bg-gray-50 rounded-md p-4 mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h3>
                      {article.examples.map((example, exampleIndex) => (
                        <p key={exampleIndex} className="text-gray-700 italic mb-2 last:mb-0">
                          "{example}"
                        </p>
                      ))}
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <LightBulbIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">IELTS Use:</span> {article.use}
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

export default Articles; 