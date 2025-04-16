import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MicrophoneIcon, 
  BookOpenIcon, 
  PencilSquareIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const modules = [
  {
    id: 'listening',
    title: 'Listening',
    strategies: [
      'Practice active listening with English media',
      'Focus on predicting answers',
      'Read questions before listening',
      'Pay attention to signpost words'
    ],
    commonMistakes: [
      'Not reading instructions carefully',
      'Missing answers due to spelling mistakes',
      'Getting distracted by similar words'
    ],
    tips: [
      'Write answers while listening',
      'Check word limits in answers',
      'Practice note-taking skills'
    ],
    resources: [
      'BBC Radio podcasts',
      'TED Talks',
      'IELTS practice tests'
    ]
  },
  {
    id: 'reading',
    title: 'Reading',
    strategies: [
      'Skim passages for main ideas',
      'Scan for specific information',
      'Use time management techniques',
      'Practice speed reading'
    ],
    commonMistakes: [
      'Spending too much time on one passage',
      'Not checking answers carefully',
      'Misunderstanding question types'
    ],
    tips: [
      'Read questions first',
      'Underline key words',
      'Practice with timed readings'
    ],
    resources: [
      'Academic journals',
      'News articles',
      'IELTS reading samples'
    ]
  },
  {
    id: 'writing',
    title: 'Writing',
    strategies: [
      'Plan your essay structure',
      'Use a variety of sentence structures',
      'Support main points with examples',
      'Practice time management'
    ],
    commonMistakes: [
      'Not addressing all parts of the task',
      'Poor paragraph organization',
      'Limited vocabulary usage'
    ],
    tips: [
      'Analyze the task carefully',
      'Use appropriate linking words',
      'Review and edit your work'
    ],
    resources: [
      'Sample essays',
      'Writing templates',
      'Grammar guides'
    ]
  },
  {
    id: 'speaking',
    title: 'Speaking',
    strategies: [
      'Practice speaking regularly',
      'Use a range of vocabulary',
      'Develop fluency through topics',
      'Work on pronunciation'
    ],
    commonMistakes: [
      'Speaking too fast or slow',
      'Using memorized responses',
      'Limited response development'
    ],
    tips: [
      'Record and analyze your speech',
      'Practice with a partner',
      'Focus on natural delivery'
    ],
    resources: [
      'Speaking partners',
      'Practice questions',
      'Pronunciation apps'
    ]
  }
];

const Strategies = () => {
  const [activeTab, setActiveTab] = useState('listening');

  const activeModule = modules.find(module => module.id === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">IELTS Strategies</h1>
        <p className="text-xl text-gray-600">Expert strategies for all four IELTS modules</p>
      </motion.div>

      {/* Module Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => setActiveTab(module.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === module.id
                ? 'bg-blue-500 text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {module.title}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Strategies and Common Mistakes */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Strategies</h3>
            <ul className="space-y-3">
              {activeModule.strategies.map((strategy, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{strategy}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Mistakes</h3>
            <ul className="space-y-3">
              {activeModule.commonMistakes.map((mistake, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span className="text-gray-700">{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tips and Resources */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Tips</h3>
            <ul className="space-y-3">
              {activeModule.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Useful Resources</h3>
            <ul className="space-y-3">
              {activeModule.resources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-700">{resource}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Strategies; 