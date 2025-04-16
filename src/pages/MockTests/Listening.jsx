import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Timer from '../../components/Timer';

const Listening = () => {
  const { testId } = useParams();
  const [showInstructions, setShowInstructions] = useState(true);

  const handleTimeUp = () => {
    alert("Time's up! Please submit your answers.");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      {showInstructions ? (
        <div className="max-w-2xl mx-auto">
          <Link
            to={`/mock-tests/${testId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Mock Test
          </Link>
          <h1 className="text-3xl font-bold mb-6">IELTS Listening Test Instructions</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <p className="text-gray-700">
              <strong>Duration:</strong> 30 minutes + 10 minutes transfer time
            </p>
            <p className="text-gray-700">
              <strong>Questions:</strong> 40 questions
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Important Information:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You will hear the recording ONLY ONCE.</li>
                <li>The test is divided into 4 sections.</li>
                <li>Time will start automatically when you begin the test.</li>
                <li>Your answers will be automatically saved as you type.</li>
                <li>After the audio ends, you will have 10 minutes to transfer your answers.</li>
              </ul>
            </div>
            <button
              onClick={() => setShowInstructions(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <Timer duration={40} onTimeUp={handleTimeUp} />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">IELTS Listening Test</h2>
            <div className="text-center py-8">
              <p className="text-gray-600">
                Audio player and questions will be added in the next update.
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Listening; 