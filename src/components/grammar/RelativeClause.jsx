import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const RelativeClauses = () => {
  const relativeClauses = [
    {
      name: "Defining Relative Clauses",
      form: "Relative pronoun (who, which, that) + subject + verb",
      description: "Provides essential information about the noun it modifies. Without this clause, the meaning of the sentence would change significantly or become incomplete.",
      example: "The book that I borrowed from the library is fascinating.",
      use: "Common in Writing Task 2 to provide specific details about a subject, especially in the introduction or body paragraphs.",
      tip: "Avoid using 'that' in non-defining clauses, as it can make your writing sound too informal."
    },
    {
      name: "Non-Defining Relative Clauses",
      form: "Relative pronoun (who, which) + subject + verb (with commas)",
      description: "Adds extra, non-essential information about the noun. These clauses are not necessary to understand the main point of the sentence but provide additional context or detail.",
      example: "My teacher, who is very kind, helped me with my essay.",
      use: "Useful in Writing Task 2 to add additional details or examples. It’s also common in Speaking Part 2 when describing people or things in detail.",
      tip: "Be careful with punctuation: non-defining clauses must be set off by commas, which is a common mistake in writing."
    },
    {
      name: "Omitting the Relative Pronoun",
      form: "Subject + verb (without relative pronoun)",
      description: "Used when the relative pronoun is the object of the clause. It makes the sentence shorter and more concise.",
      example: "The book I borrowed is fascinating.",
      use: "Common in both Writing and Speaking for concise sentences. It’s a good option for avoiding unnecessary repetition.",
      tip: "Don’t omit the relative pronoun if it’s the subject of the relative clause."
    },
    {
      name: "Relative Clauses with Prepositions",
      form: "Preposition + relative pronoun + subject + verb",
      description: "Used to show relationships involving prepositions. This structure often occurs in formal language or when describing people or things in more complex ways.",
      example: "The person to whom I spoke was very helpful.",
      use: "Important in Writing Task 2 for formal and academic tone, especially when discussing topics that involve relationships or processes.",
      tip: "In informal speech or writing, it’s often acceptable to end the sentence with a preposition (e.g., 'The person I spoke to')."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mastering Relative Clauses for IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relative clauses are essential for adding detail, clarity, and variety to your sentences in IELTS Writing and Speaking tasks.
            Mastering them will improve both your grammar and coherence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relativeClauses.map((clause, index) => (
            <motion.div
              key={clause.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{clause.name}</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <BookOpenIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Form</h3>
                      <p className="text-gray-600 font-mono bg-gray-50 p-2 rounded">
                        {clause.form}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4">{clause.description}</p>
                    
                    <div className="bg-gray-50 rounded-md p-4 mb-4">
                      <p className="text-gray-700 italic">"{clause.example}"</p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <LightBulbIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">IELTS Use:</span> {clause.use}
                      </p>
                    </div>

                    {clause.tip && (
                      <div className="mt-4 p-4 bg-yellow-100 rounded-md">
                        <p className="text-sm text-yellow-700"><span className="font-semibold">Tip:</span> {clause.tip}</p>
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

export default RelativeClauses;
