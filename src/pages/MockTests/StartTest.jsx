import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ClockIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

const sections = [
  {
    id: 'listening',
    name: 'Listening Test',
    icon: MusicalNoteIcon,
    duration: '30 minutes',
    questions: 40,
    description: 'Listen to four recordings and answer questions based on what you hear.',
  },
  {
    id: 'reading',
    name: 'Reading Test',
    icon: DocumentTextIcon,
    duration: '60 minutes',
    questions: 40,
    description: 'Read three passages and answer various types of questions.',
  },
  {
    id: 'writing',
    name: 'Writing Test',
    icon: DocumentTextIcon,
    duration: '60 minutes',
    tasks: 2,
    description: 'Complete two writing tasks: a graph/chart description and an essay.',
  },
  {
    id: 'speaking',
    name: 'Speaking Test',
    icon: MicrophoneIcon,
    duration: '11-14 minutes',
    parts: 3,
    description: 'Participate in a recorded interview covering three different parts.',
  },
];

const StartTest = () => {
  const { testId } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          to="/mock-tests"
          className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Mock Tests
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Mock Test {testId}</h1>
        <p className="text-gray-600 mb-8">
          Select a section below to begin your test. Make sure you have the required time and equipment
          ready before starting each section.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-start mb-4">
                <section.icon className="w-8 h-8 text-indigo-600 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{section.name}</h3>
                  <p className="text-gray-600 mt-1">{section.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {section.duration}
                </div>
                {section.questions && (
                  <div className="flex items-center">
                    <QuestionMarkCircleIcon className="w-4 h-4 mr-1" />
                    {section.questions} questions
                  </div>
                )}
                {section.tasks && (
                  <div className="flex items-center">
                    <DocumentTextIcon className="w-4 h-4 mr-1" />
                    {section.tasks} tasks
                  </div>
                )}
                {section.parts && (
                  <div className="flex items-center">
                    <DocumentTextIcon className="w-4 h-4 mr-1" />
                    {section.parts} parts
                  </div>
                )}
              </div>

              <Link
                to={`/mock-tests/${testId}/${section.id}`}
                className="inline-block w-full text-center py-2 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium rounded-md hover:from-indigo-700 hover:to-indigo-800 transition-colors"
              >
                Start {section.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StartTest; 