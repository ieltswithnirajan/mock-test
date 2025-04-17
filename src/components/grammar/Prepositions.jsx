import { motion } from 'framer-motion';
import { BookOpenIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const Prepositions = () => {
  const prepositions = [
    {
      category: "Prepositions of Time",
      types: [
        {
          name: "At",
          description: "Used for specific times.",
          example: "At 3 PM."
        },
        {
          name: "On",
          description: "Used for days or dates.",
          example: "On Monday."
        },
        {
          name: "In",
          description: "Used for months, years, and long periods.",
          example: "In 2023."
        }
      ]
    },
    {
      category: "Prepositions of Place",
      types: [
        {
          name: "At",
          description: "Specific locations.",
          example: "At the station."
        },
        {
          name: "On",
          description: "Surfaces or locations in contact with a surface.",
          example: "On the table."
        },
        {
          name: "In",
          description: "Enclosed spaces.",
          example: "In a room."
        }
      ]
    },
    {
      category: "Prepositions of Movement",
      types: [
        {
          name: "To",
          description: "Movement toward something.",
          example: "Go to the store."
        },
        {
          name: "Into",
          description: "Movement from outside to inside.",
          example: "Walk into the room."
        },
        {
          name: "Onto",
          description: "Movement toward a surface.",
          example: "Climb onto the roof."
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prepositions in IELTS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prepositions are essential for indicating time, place, direction, and manner in both Writing and Speaking tasks.
          </p>
        </motion.div>

        <div className="space-y-8">
          {prepositions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-indigo-600 px-6 py-4">
                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                          <BookOpenIcon className="h-6 w-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {type.name}
                          </h3>
                          <p className="text-gray-600 mb-4">{type.description}</p>
                          
                          <div className="bg-white rounded-md p-4">
                            <p className="text-gray-700 italic">"{type.example}"</p>
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

export default Prepositions; 