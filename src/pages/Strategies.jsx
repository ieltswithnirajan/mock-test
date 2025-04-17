import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MicrophoneIcon, 
  BookOpenIcon, 
  PencilSquareIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  AcademicCapIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';

const modules = [
  {
    id: 'listening',
    title: 'Listening',
    icon: MicrophoneIcon,
    color: 'from-blue-500 to-cyan-500',
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
    icon: BookOpenIcon,
    color: 'from-green-500 to-emerald-500',
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
    icon: PencilSquareIcon,
    color: 'from-purple-500 to-pink-500',
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
    icon: ChatBubbleLeftRightIcon,
    color: 'from-orange-500 to-red-500',
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
  const [expandedSection, setExpandedSection] = useState(null);

  const activeModule = modules.find(module => module.id === activeTab);
  const Icon = activeModule?.icon;

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <motion.button
              key={module.id}
              onClick={() => setActiveTab(module.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === module.id
                  ? `bg-gradient-to-r ${module.color} text-white shadow-lg`
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <module.icon className="h-5 w-5 mr-2" />
              {module.title}
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Strategies and Common Mistakes */}
            <div className="space-y-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div 
                  className={`bg-gradient-to-r ${activeModule.color} p-6`}
                  onClick={() => toggleSection('strategies')}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-xl font-semibold text-white">Key Strategies</h3>
                    <LightBulbIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSection === 'strategies' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6"
                    >
                      <ul className="space-y-4">
                        {activeModule.strategies.map((strategy, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{strategy}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div 
                  className="bg-gradient-to-r from-red-500 to-pink-500 p-6"
                  onClick={() => toggleSection('mistakes')}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-xl font-semibold text-white">Common Mistakes</h3>
                    <ExclamationTriangleIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSection === 'mistakes' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6"
                    >
                      <ul className="space-y-4">
                        {activeModule.commonMistakes.map((mistake, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-red-500 mr-2">•</span>
                            <span className="text-gray-700">{mistake}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Tips and Resources */}
            <div className="space-y-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 p-6"
                  onClick={() => toggleSection('tips')}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-xl font-semibold text-white">Proven Tips</h3>
                    <AcademicCapIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSection === 'tips' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6"
                    >
                      <ul className="space-y-4">
                        {activeModule.tips.map((tip, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">{tip}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div 
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6"
                  onClick={() => toggleSection('resources')}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <h3 className="text-xl font-semibold text-white">Useful Resources</h3>
                    <BookmarkIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedSection === 'resources' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-6"
                    >
                      <ul className="space-y-4">
                        {activeModule.resources.map((resource, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="text-gray-700">{resource}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Strategies; 