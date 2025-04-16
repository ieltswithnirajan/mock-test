import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MicrophoneIcon, 
  BookOpenIcon, 
  PencilSquareIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const MockTests = () => {
  const [activeTest, setActiveTest] = useState(null);

  const mockTests = [
    {
      id: 1,
      title: 'Mock Test Set 1',
      description: 'Full-length IELTS practice test with all four modules',
      duration: '2 hours 45 minutes',
      modules: [
        {
          id: 'listening',
          name: 'Listening',
          icon: MicrophoneIcon,
          duration: '30 minutes',
          questions: 40,
        },
        {
          id: 'reading',
          name: 'Reading',
          icon: BookOpenIcon,
          duration: '60 minutes',
          questions: 40,
        },
        {
          id: 'writing',
          name: 'Writing',
          icon: PencilSquareIcon,
          duration: '60 minutes',
          tasks: 2,
        },
        {
          id: 'speaking',
          name: 'Speaking',
          icon: ChatBubbleLeftRightIcon,
          duration: '11-14 minutes',
          parts: 3,
        },
      ],
    },
    {
      id: 2,
      title: 'Mock Test Set 2',
      description: 'Another comprehensive IELTS practice test',
      duration: '2 hours 45 minutes',
      modules: [
        {
          id: 'listening',
          name: 'Listening',
          icon: MicrophoneIcon,
          duration: '30 minutes',
          questions: 40,
        },
        {
          id: 'reading',
          name: 'Reading',
          icon: BookOpenIcon,
          duration: '60 minutes',
          questions: 40,
        },
        {
          id: 'writing',
          name: 'Writing',
          icon: PencilSquareIcon,
          duration: '60 minutes',
          tasks: 2,
        },
        {
          id: 'speaking',
          name: 'Speaking',
          icon: ChatBubbleLeftRightIcon,
          duration: '11-14 minutes',
          parts: 3,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Mock Tests</h1>
          <p className="section-subtitle">
            Practice under real IELTS conditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockTests.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {test.title}
                  </h3>
                  <div className="flex items-center text-gray-500">
                    <ClockIcon className="h-5 w-5 mr-1" />
                    <span>{test.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{test.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {test.modules.map((module) => (
                    <Link
                      key={module.id}
                      to={`/mock-tests/${test.id}/${module.id}`}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="p-2 bg-primary-100 rounded-lg mr-4">
                        <module.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {module.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {module.duration}
                          {module.questions && ` • ${module.questions} questions`}
                          {module.tasks && ` • ${module.tasks} tasks`}
                          {module.parts && ` • ${module.parts} parts`}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    to={`/mock-tests/${test.id}/listening`}
                    className="btn-primary w-full text-center"
                  >
                    Start Test
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            More mock tests coming soon! Check back regularly for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MockTests; 