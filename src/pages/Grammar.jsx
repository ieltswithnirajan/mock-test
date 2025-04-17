import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tenses from '../components/grammar/Tenses';
import Modals from '../components/grammar/Modals';
import Conditionals from '../components/grammar/Conditionals';
import Articles from '../components/grammar/Articles';
import Prepositions from '../components/grammar/Prepositions';
import PassiveVoice from '../components/grammar/PassiveVoice';
import AdjectivesAdverbs from '../components/grammar/AdjectivesandAdverbs';
import ReportedSpeech from '../components/grammar/ReportedSpeech';
import RelativeClauses from '../components/grammar/RelativeClause';
import ComparativesSuperlatives from '../components/grammar/ComparativesAndSuperlative';

const Grammar = () => {
  const [activeTab, setActiveTab] = useState('tenses');

  const tabs = [
    { id: 'tenses', name: 'Tenses', component: Tenses },
    { id: 'modals', name: 'Modals', component: Modals },
    { id: 'conditionals', name: 'Conditionals', component: Conditionals },
    { id: 'articles', name: 'Articles', component: Articles },
    { id: 'prepositions', name: 'Prepositions', component: Prepositions },
    { id: 'passive-voice', name: 'Passive Voice', component: PassiveVoice },
    { id: 'adjectives-adverbs', name: 'Adjectives & Adverbs', component: AdjectivesAdverbs },
    { id: 'reported-speech', name: 'Reported Speech', component: ReportedSpeech },
    { id: 'relative-clauses', name: 'Relative Clauses', component: RelativeClauses },
    { id: 'comparatives-superlatives', name: 'Comparatives & Superlatives', component: ComparativesSuperlatives },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-600 mb-4">
            Grammar Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master essential grammar concepts for IELTS success with our comprehensive guide
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-10 bg-white rounded-2xl shadow-lg p-2 overflow-x-auto">
          <nav className="flex flex-wrap md:flex-nowrap justify-center gap-2" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md transform scale-105'
                    : 'text-gray-600 hover:text-indigo-700 hover:bg-indigo-50'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="min-h-[400px]"
            >
              {ActiveComponent && <ActiveComponent />}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Enhance your IELTS preparation with our comprehensive grammar resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grammar;