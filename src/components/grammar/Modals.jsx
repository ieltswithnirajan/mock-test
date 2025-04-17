import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Modals = () => {
  const modals = [
    {
      name: "Can/Could",
      types: [
        {
          name: "Can",
          description: "Ability or permission in the present or future.",
          example: "I can speak French.",
          use: "Talking about abilities or permissions."
        },
        {
          name: "Could",
          description: "Past ability or polite requests.",
          example: "When I was a child, I could run fast.",
          use: "Hypothetical scenarios or polite requests."
        }
      ]
    },
    {
      name: "May/Might",
      types: [
        {
          name: "May",
          description: "Permission or possibility.",
          example: "It may rain tomorrow.",
          use: "Speculation or seeking permission."
        },
        {
          name: "Might",
          description: "A less certain form of 'may'.",
          example: "He might come to the party tonight.",
          use: "Discussing uncertain possibilities."
        }
      ]
    },
    {
      name: "Should/Ought to",
      types: [
        {
          name: "Should",
          description: "Advice, recommendation, or necessity.",
          example: "You should study for the test.",
          use: "Giving advice or making suggestions."
        },
        {
          name: "Ought to",
          description: "Formal advice or recommendation.",
          example: "You ought to apologize for your behavior.",
          use: "Formal suggestions."
        }
      ]
    },
    {
      name: "Must",
      types: [
        {
          name: "Must",
          description: "Expresses strong necessity or obligation.",
          example: "You must wear a helmet when riding a bike.",
          use: "Emphasizing strong necessity or recommendations."
        }
      ]
    },
    {
      name: "Would",
      types: [
        {
          name: "Would",
          description: "Polite requests, offers, or hypothetical situations.",
          example: "I would like a cup of coffee.",
          use: "Offering suggestions or discussing hypothetical situations."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Modals in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modals express necessity, ability, possibility, and permission. They are vital for giving opinions, offering suggestions, and discussing hypothetical or likely events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modals.map((modalGroup, index) => (
            <motion.div
              key={modalGroup.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-purple-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{modalGroup.name}</h2>
              </div>
              
              <div className="p-6">
                {modalGroup.types.map((type, typeIndex) => (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: typeIndex * 0.1 }}
                    className="mb-6 last:mb-0"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <BookOpenIcon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {type.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        
                        <div className="bg-gray-50 rounded-md p-4 mb-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modals; 