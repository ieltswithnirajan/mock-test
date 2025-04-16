import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  DocumentTextIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Writing = () => {
  const [activeTask, setActiveTask] = useState('task1');

  const writingTasks = {
    task1: {
      title: 'Task 1: Academic Writing',
      description: 'Write a report describing visual information',
      time: '20 minutes',
      wordCount: '150 words',
      examples: [
        {
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
        {
          title: 'Bar Chart',
          question: `The chart below shows the percentage of households with internet access in three different countries from 2000 to 2010.

Summarize the information by selecting and reporting the main features, and make comparisons where relevant.`,
          tips: [
            'Compare the data between countries',
            'Highlight the highest and lowest values',
            'Describe the overall trends',
            'Use appropriate comparative language',
            'Include specific percentages',
          ],
        },
      ],
    },
    task2: {
      title: 'Task 2: Essay Writing',
      description: 'Write an essay discussing a given topic',
      time: '40 minutes',
      wordCount: '250 words',
      examples: [
        {
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
        {
          title: 'Problem-Solution Essay',
          question: `Many cities around the world are facing serious problems with traffic congestion.

What are the causes of this problem and what measures can be taken to solve it?`,
          tips: [
            'Identify the main causes of the problem',
            'Propose practical solutions',
            'Support your ideas with examples',
            'Use appropriate problem-solution vocabulary',
            'Conclude with a summary of your solutions',
          ],
        },
      ],
    },
  };

  const currentTask = writingTasks[activeTask];
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const currentExample = currentTask.examples[currentExampleIndex];

  const nextExample = () => {
    if (currentExampleIndex < currentTask.examples.length - 1) {
      setCurrentExampleIndex(currentExampleIndex + 1);
    }
  };

  const prevExample = () => {
    if (currentExampleIndex > 0) {
      setCurrentExampleIndex(currentExampleIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Writing Practice</h1>
          <p className="section-subtitle">
            Improve your IELTS writing skills with these practice tasks
          </p>
        </div>

        {/* Task Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(writingTasks).map(([key, task]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTask(key);
                  setCurrentExampleIndex(0);
                }}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activeTask === key
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {key === 'task1' ? (
                  <ChartBarIcon className="h-5 w-5 mr-2" />
                ) : (
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                )}
                {task.title}
              </button>
            ))}
          </div>
        </div>

        {/* Task Information */}
        <motion.div
          key={activeTask}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentTask.title}
              </h3>
              <p className="text-gray-600 mb-4">{currentTask.description}</p>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-1" />
                  <span>{currentTask.time}</span>
                </div>
                <div>
                  <span>{currentTask.wordCount} minimum</span>
                </div>
              </div>
            </div>

            {/* Example Question */}
            <div className="bg-primary-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-2">
                {currentExample.title}
              </h4>
              <p className="text-gray-600 mb-6 whitespace-pre-line">
                {currentExample.question}
              </p>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">Tips:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {currentExample.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Answer Area */}
            <div className="mb-6">
              <h5 className="font-medium text-gray-900 mb-2">Your Answer:</h5>
              <textarea
                className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Write your answer here..."
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevExample}
                disabled={currentExampleIndex === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentExampleIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Previous Example
              </button>
              <span className="text-gray-600">
                Example {currentExampleIndex + 1} of {currentTask.examples.length}
              </span>
              <button
                onClick={nextExample}
                disabled={currentExampleIndex === currentTask.examples.length - 1}
                className={`px-4 py-2 rounded-lg ${
                  currentExampleIndex === currentTask.examples.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Next Example
              </button>
            </div>
          </div>
        </motion.div>

        {/* Timer Reminder */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span>Remember to time yourself while writing!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing; 