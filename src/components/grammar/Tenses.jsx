import {
  ClockIcon,
  CalendarIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

const Tenses = () => {
  const tenses = [
    {
      category: 'Present Tenses',
      types: [
        {
          name: 'Simple Present',
          description: 'Used for habits, general truths, and scheduled events',
          example: 'I study English every day.',
          ieltsUse: 'Common in Writing Task 1 for describing general trends'
        },
        {
          name: 'Present Continuous',
          description: 'Used for actions happening now or temporary situations',
          example: 'I am studying English right now.',
          ieltsUse: 'Useful in Speaking Part 1 for describing current activities'
        },
        {
          name: 'Present Perfect',
          description: 'Used for actions that started in the past and continue to the present',
          example: 'I have studied English for three years.',
          ieltsUse: 'Important in Writing Task 2 for discussing experiences'
        },
        {
          name: 'Present Perfect Continuous',
          description: 'Used for actions that started in the past and are still continuing',
          example: 'I have been studying English since 2020.',
          ieltsUse: 'Useful in Speaking Part 2 for describing ongoing activities'
        }
      ]
    },
    {
      category: 'Past Tenses',
      types: [
        {
          name: 'Simple Past',
          description: 'Used for completed actions in the past',
          example: 'I studied English yesterday.',
          ieltsUse: 'Common in Writing Task 1 for describing past data'
        },
        {
          name: 'Past Continuous',
          description: 'Used for actions that were in progress at a specific time in the past',
          example: 'I was studying English when you called.',
          ieltsUse: 'Useful in Speaking Part 2 for setting the scene'
        },
        {
          name: 'Past Perfect',
          description: 'Used for actions completed before another past action',
          example: 'I had studied English before I moved to Canada.',
          ieltsUse: 'Important in Writing Task 2 for showing sequence of events'
        },
        {
          name: 'Past Perfect Continuous',
          description: 'Used for actions that were ongoing before another past action',
          example: 'I had been studying English for two years before I took the IELTS.',
          ieltsUse: 'Useful in Speaking Part 3 for discussing past experiences'
        }
      ]
    },
    {
      category: 'Future Tenses',
      types: [
        {
          name: 'Simple Future',
          description: 'Used for predictions and planned future actions',
          example: 'I will study English tomorrow.',
          ieltsUse: 'Common in Writing Task 2 for discussing future implications'
        },
        {
          name: 'Future Continuous',
          description: 'Used for actions that will be in progress at a specific future time',
          example: 'I will be studying English at this time tomorrow.',
          ieltsUse: 'Useful in Speaking Part 3 for discussing future plans'
        },
        {
          name: 'Future Perfect',
          description: 'Used for actions that will be completed before a specific future time',
          example: 'I will have studied English for four years by next month.',
          ieltsUse: 'Important in Writing Task 2 for discussing future achievements'
        },
        {
          name: 'Future Perfect Continuous',
          description: 'Used for actions that will have been ongoing up to a specific future time',
          example: 'I will have been studying English for five years by 2025.',
          ieltsUse: 'Useful in Speaking Part 3 for discussing long-term plans'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">English Tenses</h1>
          <p className="text-xl text-gray-600">Master the use of different tenses for IELTS success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tenses.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className={`bg-gradient-to-r ${
                index === 0 ? 'from-blue-500 to-sky-500' :
                index === 1 ? 'from-purple-500 to-pink-500' :
                'from-green-500 to-emerald-500'
              } p-6`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  {index === 0 ? <ClockIcon className="h-6 w-6 text-white" /> :
                   index === 1 ? <CalendarIcon className="h-6 w-6 text-white" /> :
                   <ArrowTrendingUpIcon className="h-6 w-6 text-white" />}
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-6">
                  {category.types.map((type, typeIndex) => (
                    <li key={typeIndex} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h4>
                      <p className="text-gray-600 mb-2">{type.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg mb-2">
                        <p className="text-gray-700 italic">Example: {type.example}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-700">IELTS Use: {type.ieltsUse}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tenses; 