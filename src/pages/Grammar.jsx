import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tenses from '../components/grammar/Tenses';
import Modals from '../components/grammar/Modals';
import Conditionals from '../components/grammar/Conditionals';
import Articles from '../components/grammar/Articles';
import Prepositions from '../components/grammar/Prepositions';

const Grammar = () => {
  const [activeTab, setActiveTab] = useState('tenses');

  const tabs = [
    { id: 'tenses', name: 'Tenses', component: Tenses },
    { id: 'modals', name: 'Modals', component: Modals },
    { id: 'conditionals', name: 'Conditionals', component: Conditionals },
    { id: 'articles', name: 'Articles', component: Articles },
    { id: 'prepositions', name: 'Prepositions', component: Prepositions }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grammar Guide</h1>
          <p className="text-xl text-gray-600">
            Master essential grammar concepts for IELTS success
          </p>
        </div>

        <div className="mb-8">
          <nav className="flex space-x-4 justify-center" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {ActiveComponent && <ActiveComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Grammar; 