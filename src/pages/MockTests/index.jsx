import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  AcademicCapIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  PencilIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import Timer from '../../components/Timer';

const mockTests = [
  {
    id: 0,
    title: 'Mock Test Set 1',
    description: 'Full-length IELTS practice test with all four modules',
    duration: '2 hours 45 minutes',
    difficulty: 'Beginner',
    sections: [
      { name: 'Listening', duration: '30 minutes', questions: 40, icon: MicrophoneIcon },
      { name: 'Reading', duration: '60 minutes', questions: 40, icon: DocumentTextIcon },
      { name: 'Writing', duration: '60 minutes', tasks: 2, icon: PencilIcon },
      { name: 'Speaking', duration: '11-14 minutes', parts: 3, icon: ChatBubbleLeftIcon }
    ]
  },
  {
    id: 1,
    title: 'Mock Test Set 2',
    description: 'Another comprehensive IELTS practice test',
    duration: '2 hours 45 minutes',
    difficulty: 'Intermediate',
    sections: [
      { name: 'Listening', duration: '30 minutes', questions: 40, icon: MicrophoneIcon },
      { name: 'Reading', duration: '60 minutes', questions: 40, icon: DocumentTextIcon },
      { name: 'Writing', duration: '60 minutes', tasks: 2, icon: PencilIcon },
      { name: 'Speaking', duration: '11-14 minutes', parts: 3, icon: ChatBubbleLeftIcon }
    ]
  }
];

const MockTests = () => {
  const { testId, section } = useParams();
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(true);
  const [answers, setAnswers] = useState({});

  // If we have both testId and section, show the test content
  if (testId && section) {
    const test = mockTests[parseInt(testId)];
    if (!test) {
      navigate('/mock-tests');
      return null;
    }

    const sectionInfo = test.sections.find(s => s.name.toLowerCase() === section.toLowerCase());
    if (!sectionInfo) {
      navigate('/mock-tests');
      return null;
    }

    if (showInstructions) {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {section} Test Instructions
            </h1>
            <div className="space-y-4 text-gray-600">
              <p>Welcome to the IELTS {section} test! Before you begin, please note:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>You have <span className="font-semibold">{sectionInfo.duration}</span> to complete this test</li>
                {sectionInfo.questions && (
                  <li>There are <span className="font-semibold">{sectionInfo.questions} questions</span> in total</li>
                )}
                {sectionInfo.tasks && (
                  <li>You need to complete <span className="font-semibold">{sectionInfo.tasks} tasks</span></li>
                )}
                {sectionInfo.parts && (
                  <li>The test consists of <span className="font-semibold">{sectionInfo.parts} parts</span></li>
                )}
                <li>Your answers are automatically saved as you progress</li>
                <li>You can use the bookmark feature to mark questions for review</li>
                <li>The timer can be paused if you need a break</li>
              </ul>
              <div className="mt-8">
                <button
                  onClick={() => setShowInstructions(false)}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors"
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
        <Timer 
          duration={parseInt(sectionInfo.duration)} 
          onTimeUp={() => alert("Time's up! Your answers will be submitted automatically.")} 
        />
        
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link
              to="/mock-tests"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              Back to Mock Tests
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {test.title} - {section} Section
            </h1>
            {/* Add section specific content here */}
            <p className="text-gray-600">
              This section is under development. Content for {section} will be added soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, show the test list
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            IELTS Mock Tests
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 mb-12"
          >
            Practice under real IELTS conditions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockTests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{test.title}</h2>
                    <p className="text-gray-600 mt-1">{test.description}</p>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <ClockIcon className="h-5 w-5 mr-2" />
                    <span>{test.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {test.sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <Link
                        key={section.name}
                        to={`/mock-tests/${test.id}/${section.name.toLowerCase()}`}
                        className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                        <div>
                          <h3 className="font-medium text-gray-900">{section.name}</h3>
                          <p className="text-sm text-gray-500">
                            {section.duration}
                            {section.questions && ` • ${section.questions} questions`}
                            {section.tasks && ` • ${section.tasks} tasks`}
                            {section.parts && ` • ${section.parts} parts`}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  to={`/mock-tests/${test.id}/listening`}
                  className="block w-full text-center py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-colors"
                >
                  Start Test
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTests; 