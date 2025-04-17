import { useState } from 'react';
import { motion } from 'framer-motion';
import { ClockIcon, MicrophoneIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Timer = ({ duration, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  return (
    <div className="fixed top-24 right-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 w-64">
      <div className="flex items-center mb-4">
        <ClockIcon className="h-6 w-6 text-sky-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Time Remaining</h3>
      </div>
      <div className="text-3xl font-bold text-sky-600">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-sky-600 rounded-full transition-all duration-1000"
            style={{ width: `${(timeLeft / (duration * 60)) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const Speaking = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const parts = [
    {
      id: 1,
      title: "Part 1: Introduction & Interview",
      duration: 4,
      description: "General questions about yourself and familiar topics",
      questions: [
        "Tell me about your hometown.",
        "What do you do in your free time?",
        "Do you prefer reading books or watching movies? Why?",
        "What kind of music do you like to listen to?"
      ]
    },
    {
      id: 2,
      title: "Part 2: Long Turn",
      duration: 3,
      description: "Speak for 2 minutes about a given topic",
      cueCard: {
        topic: "Describe a skill you would like to learn",
        points: [
          "What skill it is",
          "Why you want to learn it",
          "How you would learn it",
          "How it would benefit you"
        ],
        preparationTime: 60,
        speakingTime: 120
      }
    },
    {
      id: 3,
      title: "Part 3: Discussion",
      duration: 4,
      description: "In-depth discussion related to Part 2 topic",
      questions: [
        "Why do people need to learn new skills in today's world?",
        "How has technology changed the way people learn new skills?",
        "What are the advantages of learning skills online versus in person?",
        "Which skills do you think will be most important in the future?"
      ]
    }
  ];

  const currentTask = parts[currentPart];

  const handleNext = () => {
    if (currentPart < parts.length - 1) {
      setCurrentPart(currentPart + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Congratulations!</h1>
            <p className="text-xl text-gray-600 mb-8">
              You have completed Mock Test 1. Well done on completing all sections of the test!
            </p>
            <div className="flex justify-center">
              <Link
                to="/mock-tests"
                className="bg-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors"
              >
                Return to Mock Tests
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Speaking Mock Test</h1>
            <p className="mt-2 text-gray-600">Complete all three parts of the speaking test</p>
          </div>

          {/* Part Navigation */}
          <div className="flex space-x-4 mb-8">
            {parts.map((part, index) => (
              <button
                key={part.id}
                onClick={() => setCurrentPart(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  currentPart === index
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                Part {part.id}
              </button>
            ))}
          </div>

          {/* Current Part Content */}
          <div className="space-y-6">
            <div className="bg-sky-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {currentTask.title}
              </h2>
              <p className="text-gray-600">{currentTask.description}</p>
            </div>

            {/* Questions or Cue Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              {currentTask.questions ? (
                <div className="space-y-4">
                  {currentTask.questions.map((question, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-700">{question}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">{currentTask.cueCard.topic}</h3>
                  <ul className="space-y-2">
                    {currentTask.cueCard.points.map((point, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <ArrowRightIcon className="h-4 w-4 text-sky-500 mr-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Preparation time: {currentTask.cueCard.preparationTime} seconds</span>
                      <span>Speaking time: {currentTask.cueCard.speakingTime} seconds</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Recording Controls */}
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isRecording
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-sky-600 text-white hover:bg-sky-700'
                }`}
              >
                <MicrophoneIcon className="h-5 w-5 mr-2" />
                {isRecording ? 'Stop Recording' : 'Start Recording'}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentPart === 0}
              className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous Part
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700"
            >
              {currentPart === parts.length - 1 ? 'Complete Test' : 'Next Part'}
            </button>
          </div>

          <Link
            to="/mock-tests"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Mock Tests
          </Link>
        </motion.div>
      </div>

      <Timer duration={currentTask.duration} isActive={isRecording} />
    </div>
  );
};

export default Speaking; 