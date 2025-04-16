import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import Timer from '../../components/Timer';

const Reading = () => {
  const { testId } = useParams();
  const [currentPassage, setCurrentPassage] = useState(0);
  const [showInstructions, setShowInstructions] = useState(true);
  const [answers, setAnswers] = useState({});

  const passages = [
    {
      id: 1,
      title: "The History of Tea",
      text: `Tea has a long and fascinating history spanning thousands of years. Originally discovered in China, according to legend, by Emperor Shen Nung in 2737 BC when tea leaves accidentally blew into his pot of boiling water. This serendipitous event led to the creation of the world's most popular beverage after water.

The practice of drinking tea spread throughout Chinese culture, reaching Japan and other Asian countries by the 6th century. European traders first encountered tea in the 16th century, and it quickly became a valuable commodity in international trade.

Today, tea is grown in dozens of countries and comes in countless varieties, from delicate white teas to robust black teas. The global tea industry continues to evolve, with new brewing methods and flavors being developed while maintaining traditional practices.`,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'According to the passage, when was tea discovered?',
          options: ['1737 BC', '2737 BC', '737 BC', '3737 BC'],
          correctAnswer: '2737 BC'
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'Tea reached Japan and other Asian countries by the 16th century.',
          correctAnswer: false
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'What is the most popular beverage in the world after water?',
          options: ['Coffee', 'Tea', 'Milk', 'Soda'],
          correctAnswer: 'Tea'
        }
      ]
    }
    // Add more passages here
  ];

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleTimeUp = () => {
    // Handle time up logic here
    alert("Time's up! Your answers will be submitted automatically.");
  };

  if (showInstructions) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Reading Test Instructions</h1>
          <div className="space-y-4 text-gray-600">
            <p>Welcome to the IELTS Reading test! Before you begin, please note:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You have <span className="font-semibold">60 minutes</span> to complete this test</li>
              <li>There are <span className="font-semibold">3 passages</span> with 40 questions in total</li>
              <li>You can navigate between passages using the buttons at the bottom</li>
              <li>Your answers are automatically saved as you progress</li>
              <li>You can use the bookmark feature to mark questions for review</li>
              <li>The timer can be paused if you need a break</li>
            </ul>
            <div className="mt-8">
              <button
                onClick={() => setShowInstructions(false)}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-indigo-800 transition-colors"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Timer duration={60} onTimeUp={handleTimeUp} />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Link
            to={`/mock-tests/${testId}`}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Test Overview
          </Link>
        </div>

        <motion.div
          key={currentPassage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Passage {currentPassage + 1}: {passages[currentPassage].title}
          </h2>
          <div className="prose max-w-none mb-8">
            {passages[currentPassage].text.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4">{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            {passages[currentPassage].questions.map((question) => (
              <div key={question.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
                  <button
                    className="text-gray-400 hover:text-yellow-500 transition-colors"
                    title="Bookmark for review"
                  >
                    <BookmarkIcon className="w-5 h-5" />
                  </button>
                </div>

                {question.type === 'multiple-choice' && (
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <label key={option} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          className="h-4 w-4 text-indigo-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {question.type === 'true-false' && (
                  <div className="flex space-x-4">
                    {['True', 'False'].map((option) => (
                      <label key={option} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={question.id}
                          value={option}
                          checked={answers[question.id] === option}
                          onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                          className="h-4 w-4 text-indigo-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentPassage(prev => Math.max(0, prev - 1))}
            disabled={currentPassage === 0}
            className={`flex items-center px-4 py-2 rounded ${
              currentPassage === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Previous Passage
          </button>

          <button
            onClick={() => setCurrentPassage(prev => Math.min(passages.length - 1, prev + 1))}
            disabled={currentPassage === passages.length - 1}
            className={`flex items-center px-4 py-2 rounded ${
              currentPassage === passages.length - 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Next Passage
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reading; 