import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const SpeakingCards = () => {
  const [activePart, setActivePart] = useState('part1');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const speakingParts = {
    part1: {
      title: 'Part 1: Introduction and Interview',
      description: 'Answer questions about yourself and familiar topics',
      cards: [
        {
          question: 'Where are you from?',
          tips: [
            'Be specific about your hometown or current city',
            'Mention something interesting about the place',
            'Keep your answer between 2-3 sentences',
          ],
        },
        {
          question: 'Do you work or study?',
          tips: [
            'Clearly state whether you work or study',
            'Provide basic details about your job or studies',
            'Mention how long you have been doing it',
          ],
        },
        {
          question: 'What do you do in your free time?',
          tips: [
            'Mention 2-3 hobbies or activities',
            'Explain why you enjoy them',
            'Give specific examples when possible',
          ],
        },
      ],
    },
    part2: {
      title: 'Part 2: Individual Long Turn',
      description: 'Speak for 1-2 minutes on a given topic',
      cards: [
        {
          question: 'Describe a book you have read recently',
          points: [
            'What kind of book it was',
            'What it was about',
            'Why you read it',
            'How you felt about it',
          ],
          tips: [
            'Use the preparation time wisely',
            'Structure your answer using the points',
            'Include specific details and examples',
            'Keep track of time while speaking',
          ],
        },
        {
          question: 'Describe a memorable journey you have made',
          points: [
            'Where you went',
            'How you traveled',
            'What you did there',
            'Why it was memorable',
          ],
          tips: [
            'Use past tense consistently',
            'Include sensory details',
            'Explain your feelings and reactions',
            'Keep your answer focused and coherent',
          ],
        },
        {
          question: 'Describe a person who has influenced you',
          points: [
            'Who the person is',
            'How you know them',
            'What they have done',
            'Why they influenced you',
          ],
          tips: [
            'Use appropriate vocabulary to describe people',
            'Include specific examples of influence',
            'Express your feelings clearly',
            'Maintain a natural speaking pace',
          ],
        },
      ],
    },
    part3: {
      title: 'Part 3: Two-way Discussion',
      description: 'Discuss abstract topics related to Part 2',
      cards: [
        {
          question: 'How has technology changed the way people read books?',
          followUp: [
            'Do you think people read more or less now?',
            'What are the advantages of e-books?',
            'Will printed books disappear in the future?',
          ],
          tips: [
            'Express your opinion clearly',
            'Support your ideas with examples',
            'Use appropriate linking words',
            'Engage in a natural discussion',
          ],
        },
        {
          question: 'What are the benefits of traveling?',
          followUp: [
            'How has tourism changed in recent years?',
            'What are the negative effects of tourism?',
            'How can we make tourism more sustainable?',
          ],
          tips: [
            'Consider different perspectives',
            'Use a range of vocabulary',
            'Express complex ideas clearly',
            'Maintain a good discussion flow',
          ],
        },
        {
          question: 'What makes a good role model?',
          followUp: [
            'How do role models influence young people?',
            'Are celebrities good role models?',
            'How has the concept of role models changed?',
          ],
          tips: [
            'Define your terms clearly',
            'Use examples to support your points',
            'Show awareness of different viewpoints',
            'Express your ideas fluently',
          ],
        },
      ],
    },
  };

  const currentPart = speakingParts[activePart];
  const currentCard = currentPart.cards[currentCardIndex];

  const nextCard = () => {
    if (currentCardIndex < currentPart.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Speaking Cue Cards</h1>
          <p className="section-subtitle">
            Practice with real IELTS speaking topics
          </p>
        </div>

        {/* Part Selection */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(speakingParts).map(([key, part]) => (
              <button
                key={key}
                onClick={() => {
                  setActivePart(key);
                  setCurrentCardIndex(0);
                }}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  activePart === key
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {part.title}
              </button>
            ))}
          </div>
        </div>

        {/* Card Display */}
        <motion.div
          key={currentCardIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentPart.title}
              </h3>
              <p className="text-gray-600">{currentPart.description}</p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">
                {currentCard.question}
              </h4>

              {currentCard.points && (
                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">
                    You should say:
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {currentCard.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {currentCard.followUp && (
                <div className="mb-6">
                  <h5 className="font-medium text-gray-900 mb-2">
                    Follow-up questions:
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {currentCard.followUp.map((question, index) => (
                      <li key={index}>{question}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h5 className="font-medium text-gray-900 mb-2">Tips:</h5>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {currentCard.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevCard}
                disabled={currentCardIndex === 0}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  currentCardIndex === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ChevronLeftIcon className="h-5 w-5 mr-1" />
                Previous
              </button>
              <span className="text-gray-600">
                Card {currentCardIndex + 1} of {currentPart.cards.length}
              </span>
              <button
                onClick={nextCard}
                disabled={currentCardIndex === currentPart.cards.length - 1}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  currentCardIndex === currentPart.cards.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Next
                <ChevronRightIcon className="h-5 w-5 ml-1" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Timer Suggestion */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span>Tip: Use a timer to practice speaking for the correct duration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakingCards; 