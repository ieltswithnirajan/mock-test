import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ChartBarIcon, 
  DocumentTextIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import Timer from '../components/Timer';

const Writing = () => {
  const { testId } = useParams();
  const [currentTask, setCurrentTask] = useState(1);
  const [showInstructions, setShowInstructions] = useState(true);

  const handleTimeUp = () => {
    // Handle time up logic
  };

  const writingTasks = {
    task1: {
      title: 'Task 1: Academic Writing',
      description: 'Write a report describing visual information',
      time: '20 minutes',
      wordCount: '150 words',
      example: {
        title: 'Line Graph',
        question: `The graph below shows the number of university graduates in Canada from 1992 to 2007.

Summarize the information by selecting and reporting the main features, and make comparisons where relevant.`,
        tips: [
          'Identify the main trends and patterns',
          'Compare significant data points',
          'Use appropriate vocabulary for describing trends',
          'Include specific numbers and percentages',
          'Write in a formal, academic style',
        ],
      },
    },
    task2: {
      title: 'Task 2: Essay Writing',
      description: 'Write an essay discussing a given topic',
      time: '40 minutes',
      wordCount: '250 words',
      example: {
        title: 'Opinion Essay',
        question: `Some people believe that university education should be free for all students, regardless of their financial background. Others argue that students should pay for their own education.

Discuss both views and give your own opinion.`,
        tips: [
          'Clearly state your position in the introduction',
          'Present both sides of the argument',
          'Support your points with examples',
          'Use appropriate linking words',
          'Conclude by restating your opinion',
        ],
      },
    },
  };

  const handleNextTask = () => {
    if (currentTask === 1) {
      setCurrentTask(2);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {showInstructions ? (
        <div className="max-w-4xl mx-auto">
          <Timer duration={60} onTimeUp={handleTimeUp} />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">IELTS Writing Test</h2>
            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                You should spend about 20 minutes on Task 1 and 40 minutes on Task 2.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  {currentTask === 1 ? writingTasks.task1.title : writingTasks.task2.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {currentTask === 1 ? writingTasks.task1.description : writingTasks.task2.description}
                </p>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Time: {currentTask === 1 ? writingTasks.task1.time : writingTasks.task2.time}
                  </p>
                  <p className="text-gray-600">
                    Word count: {currentTask === 1 ? writingTasks.task1.wordCount : writingTasks.task2.wordCount}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-2">
                    {currentTask === 1 ? writingTasks.task1.example.title : writingTasks.task2.example.title}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    {currentTask === 1 ? writingTasks.task1.example.question : writingTasks.task2.example.question}
                  </p>
                  <div className="mt-4">
                    <textarea
                      className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Write your answer here..."
                    />
                  </div>
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Tips:</h5>
                    <ul className="list-disc list-inside text-gray-700">
                      {(currentTask === 1 ? writingTasks.task1.example.tips : writingTasks.task2.example.tips).map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              {currentTask === 1 ? (
                <button
                  onClick={handleNextTask}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue to Task 2
                </button>
              ) : (
                <Link
                  to={`/mock-tests/${testId}/speaking`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue to Speaking Section
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="section-title">Writing Practice</h1>
              <p className="section-subtitle">
                Improve your IELTS writing skills with these practice tasks
              </p>
            </div>

            <button
              onClick={() => setShowInstructions(true)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Test
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Writing; 