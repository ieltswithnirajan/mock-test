import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Tenses = () => {
  const tenses = [
    {
      category: "Present Tenses",
      types: [
        {
          name: "Present Simple",
          description: "Describe habits, facts, and routines.",
          example: "The sun rises in the east.",
          use: "Describing general trends, daily routines, or permanent truths."
        },
        {
          name: "Present Continuous",
          description: "Describe ongoing actions or near future arrangements.",
          example: "She is studying right now.",
          use: "Describing current actions or future plans."
        },
        {
          name: "Present Perfect",
          description: "Emphasize experience or results over time, connecting the past and present.",
          example: "I have lived here for five years.",
          use: "Talking about experiences without specific time references."
        },
        {
          name: "Present Perfect Continuous",
          description: "Focus on the duration of actions from the past to the present.",
          example: "She has been reading for two hours.",
          use: "Expressing long-term actions or unfinished activities."
        }
      ]
    },
    {
      category: "Past Tenses",
      types: [
        {
          name: "Past Simple",
          description: "Completed actions at a specific past time.",
          example: "I visited London last summer.",
          use: "Discussing past events or actions."
        },
        {
          name: "Past Continuous",
          description: "Actions happening in progress at a specific point in the past.",
          example: "I was watching TV when the phone rang.",
          use: "Setting a scene or providing background information."
        },
        {
          name: "Past Perfect",
          description: "Actions completed before other past actions.",
          example: "She had finished the work before the deadline.",
          use: "Discussing the sequence of events in the past."
        },
        {
          name: "Past Perfect Continuous",
          description: "Duration of actions that were ongoing before another past action.",
          example: "I had been studying for hours when my friend called.",
          use: "Emphasizing the duration of an action in the past."
        }
      ]
    },
    {
      category: "Future Tenses",
      types: [
        {
          name: "Future Simple",
          description: "Predictions, promises, or decisions about the future.",
          example: "I will visit the museum tomorrow.",
          use: "Talking about future events or plans."
        },
        {
          name: "Future Continuous",
          description: "Ongoing action happening at a specific time in the future.",
          example: "At 6 PM, I will be studying.",
          use: "Describing future events in progress at a certain time."
        },
        {
          name: "Future Perfect",
          description: "Actions that will be completed before a specific future point.",
          example: "By next week, I will have finished the project.",
          use: "Talking about future events with definite endpoints."
        },
        {
          name: "Future Perfect Continuous",
          description: "Duration of ongoing actions that will happen until a future point.",
          example: "By 2025, I will have been working here for ten years.",
          use: "Discussing long-term actions or experiences leading up to a future moment."
        }
      ]
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tenses in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tense usage is essential for clarity in expressing when an event happens—whether in the past, present, or future. It's critical to use the correct tense for accuracy and coherence in both Writing and Speaking tasks.
          </p>
        </motion.div>

        <div className="space-y-12">
          {tenses.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.types.map((type, index) => (
                    <motion.div
                      key={type.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <BookOpenIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {type.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{type.description}</p>
                          
                          <div className="bg-white rounded-md p-4 mb-4">
                            <p className="text-gray-700 italic">"{type.example}"</p>
                          </div>
                          
                          <div className="flex items-start space-x-2">
                            <LightBulbIcon className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-1" />
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">IELTS Use:</span> {type.use}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tenses; 