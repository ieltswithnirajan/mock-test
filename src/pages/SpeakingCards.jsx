import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ChatBubbleLeftRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SpeakingCards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeSection, setActiveSection] = useState(1);

  const cards = [
    {
      id: 1,
      title: "Speaking Card 1",
      section1: [
        "What is your typical daily routine?",
        "How do you organize your day?",
        "Is your routine different on weekends?",
        "Do you prefer having a fixed routine or a flexible one?",
        "Would you like to change anything in your daily schedule?"
      ],
      section2: {
        topic: "Describe a person you admire.",
        bulletPoints: [
          "who the person is",
          "how you know them",
          "what qualities they have",
          "and explain why you admire them"
        ]
      },
      section3: [
        "What qualities make someone a good role model?",
        "Are famous people always good role models?",
        "Do young people need role models today?",
        "Can a family member be a better influence than a celebrity?",
        "Should schools teach about leadership and influence?"
      ]
    },
    {
      title: "Speaking Card 2",
      section1: [
        "What kind of food do you like?",
        "Do you prefer eating at home or eating out?",
        "Have your food preferences changed over time?",
        "How often do you eat with your family?",
        "Are there any traditional foods in your country?"
      ],
      section2: {
        topic: "Describe a special meal you had with friends or family.",
        bulletPoints: [
          "what the meal was",
          "where and when you had it",
          "who was there",
          "and explain why it was special"
        ]
      },
      section3: [
        "How have eating habits changed in recent years?",
        "What are the benefits of home-cooked meals?",
        "Is fast food popular in your country? Why?",
        "Should schools educate children about nutrition?",
        "How does culture affect food choices?"
      ]
    },
    {
      title: "Speaking Card 3",
      section1: [
        "Do you like reading books?",
        "What kind of books do you prefer?",
        "Do you read more now than when you were younger?",
        "Do you prefer e-books or printed books? Why?",
        "How often do you visit libraries?"
      ],
      section2: {
        topic: "Describe a book you recently read and liked.",
        bulletPoints: [
          "what the book was",
          "what it was about",
          "why you chose to read it",
          "and explain what you liked most about it"
        ]
      },
      section3: [
        "What are the benefits of reading books regularly?",
        "How can reading habits be encouraged in children?",
        "Do people in your country read a lot?",
        "How is reading different from watching movies?",
        "Is reading still important in the digital age?"
      ]
    },
    {
      title: "Speaking Card 4",
      section1: [
        "Do you enjoy traveling?",
        "How often do you travel?",
        "What is your favorite destination?",
        "Do you prefer traveling alone or with others?",
        "What is the most common form of transport in your country?"
      ],
      section2: {
        topic: "Describe a trip you took that you really enjoyed.",
        bulletPoints: [
          "where you went",
          "who you went with",
          "what you did there",
          "and explain why it was enjoyable"
        ]
      },
      section3: [
        "Why do people travel?",
        "How has tourism changed in your country?",
        "What are the advantages and disadvantages of tourism?",
        "How can tourism affect the environment?",
        "Should governments promote domestic travel?"
      ]
    },
    {
      title: "Speaking Card 5",
      section1: [
        "Do you often help people?",
        "What kind of help do you usually provide?",
        "Do you think helping others is important?",
        "Have you ever received help from a stranger?",
        "Would you like to do volunteer work?"
      ],
      section2: {
        topic: "Describe a time when you helped someone.",
        bulletPoints: [
          "who you helped",
          "what the situation was",
          "what you did to help",
          "and explain how you felt after helping"
        ]
      },
      section3: [
        "How can people be encouraged to help others?",
        "Is community service important for teenagers?",
        "Do you think people are less helpful now than before?",
        "How can schools promote social responsibility?",
        "Should helping others be part of the school curriculum?"
      ]
    },
    {
      title: "Speaking Card 6",
      section1: [
        "Do you like listening to music?",
        "What kind of music do you enjoy most?",
        "When do you usually listen to music?",
        "Can music affect your mood?",
        "Have your musical preferences changed over time?"
      ],
      section2: {
        topic: "Describe a song that has special meaning to you.",
        bulletPoints: [
          "what the song is",
          "when you first heard it",
          "what the song is about",
          "and explain why it means a lot to you"
        ]
      },
      section3: [
        "How is music important in different cultures?",
        "Is traditional music still popular in your country?",
        "How has technology changed the music industry?",
        "Can music be used to unite people?",
        "Should children be encouraged to learn musical instruments?"
      ]
    },
    {
      title: "Speaking Card 7",
      section1: [
        "What means of transport do you use most often?",
        "Is public transport convenient in your area?",
        "Do you prefer traveling by car or public transport?",
        "Has transportation improved in recent years?",
        "Is cycling popular in your country?"
      ],
      section2: {
        topic: "Describe a time you experienced a travel delay.",
        bulletPoints: [
          "where you were going",
          "what caused the delay",
          "what you did during the delay",
          "and explain how you felt about the experience"
        ]
      },
      section3: [
        "What are the main causes of travel delays?",
        "How can governments improve transport systems?",
        "What are the pros and cons of using public transport?",
        "How can we reduce traffic congestion in cities?",
        "Is air travel too expensive for most people?"
      ]
    },
    {
      title: "Speaking Card 8",
      section1: [
        "What do you usually do in your free time?",
        "Do you think it's important to have hobbies?",
        "How do you usually spend your weekends?",
        "Do you prefer staying indoors or going out?",
        "Have your leisure activities changed over time?"
      ],
      section2: {
        topic: "Describe a relaxing activity you enjoy.",
        bulletPoints: [
          "what the activity is",
          "when you usually do it",
          "why it relaxes you",
          "and explain how it benefits your well-being"
        ]
      },
      section3: [
        "Why is relaxation important in today's world?",
        "How can people manage stress effectively?",
        "Are people more stressed today than in the past?",
        "Should workplaces offer relaxation facilities?",
        "Is technology helping or increasing stress?"
      ]
    },
    {
      title: "Speaking Card 9",
      section1: [
        "What job do you do or want to do in the future?",
        "What do you like about your job or career goals?",
        "Is job satisfaction important to you?",
        "Would you prefer working for a big company or a small one?",
        "What is the most respected profession in your country?"
      ],
      section2: {
        topic: "Describe a job you would like to do in the future.",
        bulletPoints: [
          "what the job is",
          "why you are interested in it",
          "what qualifications are needed",
          "and explain what makes it suitable for you"
        ]
      },
      section3: [
        "How is the job market changing in your country?",
        "Is job stability important for young people?",
        "What challenges do people face when changing careers?",
        "How can education prepare students for work?",
        "Should people follow passion or practicality in career choice?"
      ]
    },
    {
      title: "Speaking Card 10",
      section1: [
        "Are you good at managing your time?",
        "How do you usually plan your day?",
        "Do you use any tools to organize your schedule?",
        "Have you ever missed an important deadline?",
        "Is being punctual important in your culture?"
      ],
      section2: {
        topic: "Describe a time when you had to plan something important.",
        bulletPoints: [
          "what the event or activity was",
          "what you had to plan",
          "how you prepared for it",
          "and explain how successful the plan was"
        ]
      },
      section3: [
        "What are the benefits of effective time management?",
        "Why do some people struggle with planning?",
        "Should children be taught time management skills?",
        "How can technology help with planning?",
        "Is it better to plan or to be spontaneous?"
      ]
    },
    {
      id: 11,
      title: "Speaking Card 11",
      section1: [
        "Do you enjoy shopping?",
        "How often do you go shopping?",
        "Do you prefer shopping online or in stores?",
        "Have your shopping habits changed over time?",
        "Is shopping a social activity for you?"
      ],
      section2: {
        topic: "Describe a memorable shopping experience.",
        bulletPoints: [
          "where and when it happened",
          "what you bought",
          "who you were with",
          "and explain why it was memorable"
        ]
      },
      section3: [
        "How has online shopping changed the retail industry?",
        "Do advertisements influence your shopping decisions?",
        "Should people be taught how to manage money?",
        "Is it important to support local businesses?",
        "Do people shop more for needs or for pleasure?"
      ]
    },
    {
      id: 12,
      title: "Speaking Card 12",
      section1: [
        "Do you enjoy watching movies?",
        "What kind of movies do you like?",
        "How often do you go to the cinema?",
        "Do you prefer watching movies alone or with others?",
        "Have your movie preferences changed?"
      ],
      section2: {
        topic: "Describe a film you recently watched and enjoyed.",
        bulletPoints: [
          "what the film was",
          "where you watched it",
          "what it was about",
          "and explain why you enjoyed it"
        ]
      },
      section3: [
        "How do movies influence society?",
        "Are foreign films popular in your country?",
        "Is it better to read a book or watch its film adaptation?",
        "Should films be used to teach history or social issues?",
        "Do movies reflect real life or fantasy?"
      ]
    },
    {
      id: 13,
      title: "Speaking Card 13",
      section1: [
        "Do you enjoy spending time in nature?",
        "How often do you go outdoors?",
        "What's your favorite natural place?",
        "Is it important to protect the environment?",
        "Have you ever visited a national park?"
      ],
      section2: {
        topic: "Describe a place in nature that you find peaceful.",
        bulletPoints: [
          "where it is",
          "what you do there",
          "how often you visit it",
          "and explain why you find it peaceful"
        ]
      },
      section3: [
        "How can we protect the environment?",
        "Do you think urbanization affects the natural world?",
        "Why is it important to teach children about nature?",
        "Can tourism harm the environment?",
        "What role does government play in environmental protection?"
      ]
    },
    {
      id: 14,
      title: "Speaking Card 14",
      section1: [
        "Do you like exercising?",
        "What kind of exercise do you prefer?",
        "How often do you exercise?",
        "Do you exercise alone or with others?",
        "Has your exercise routine changed over time?"
      ],
      section2: {
        topic: "Describe an exercise activity you enjoy.",
        bulletPoints: [
          "what the activity is",
          "how often you do it",
          "who you do it with",
          "and explain why you enjoy it"
        ]
      },
      section3: [
        "Why is regular exercise important?",
        "Do you think people in your country exercise enough?",
        "What can be done to encourage people to exercise more?",
        "Do you think exercise should be a mandatory part of school education?",
        "How can exercise improve mental health?"
      ]
    },
    {
      id: 15,
      title: "Speaking Card 15",
      section1: [
        "Do you like cooking?",
        "What is your favorite dish to cook?",
        "How often do you cook?",
        "Do you prefer cooking at home or eating out?",
        "Have your cooking habits changed over time?"
      ],
      section2: {
        topic: "Describe a dish you like to cook.",
        bulletPoints: [
          "what the dish is",
          "how you prepare it",
          "who you usually cook it for",
          "and explain why you enjoy making it"
        ]
      },
      section3: [
        "Is cooking an important skill to have?",
        "How can cooking affect health?",
        "Why do people enjoy eating at restaurants?",
        "Should schools teach cooking skills?",
        "How does food culture vary around the world?"
      ]
    },
    {
      id: 16,
      title: "Speaking Card 16",
      section1: [
        "Do you enjoy playing sports?",
        "What is your favorite sport?",
        "How often do you play sports?",
        "Do you prefer individual sports or team sports?",
        "Have your sports interests changed over time?"
      ],
      section2: {
        topic: "Describe a time when you played a sport.",
        bulletPoints: [
          "what sport it was",
          "when and where you played",
          "who you played with",
          "and explain how you felt during the game"
        ]
      },
      section3: [
        "Why do people play sports?",
        "How can sports benefit physical health?",
        "Do you think sports should be mandatory in schools?",
        "What role do professional sports play in society?",
        "How can sports bring people together?"
      ]
    },
    {
      id: 17,
      title: "Speaking Card 17",
      section1: [
        "Do you enjoy reading the news?",
        "How do you get your news?",
        "Do you prefer reading news online or in print?",
        "Has the way you consume news changed over time?",
        "Is it important to stay updated with current events?"
      ],
      section2: {
        topic: "Describe an important news event you remember.",
        bulletPoints: [
          "what the event was",
          "how you found out about it",
          "how it affected you",
          "and explain why it was important"
        ]
      },
      section3: [
        "How does the media influence public opinion?",
        "Should people rely more on social media for news?",
        "Is it important for governments to control news content?",
        "How can people distinguish between fake news and real news?",
        "How do different cultures consume news?"
      ]
    },
    {
      id: 18,
      title: "Speaking Card 18",
      section1: [
        "Do you like spending time at home?",
        "What do you usually do when you're at home?",
        "How important is your home environment to you?",
        "Do you prefer living in a house or an apartment?",
        "Is your home decorated in a particular style?"
      ],
      section2: {
        topic: "Describe your ideal home.",
        bulletPoints: [
          "where it would be located",
          "what the house or apartment would look like",
          "how many people would live there",
          "and explain why it would be ideal for you"
        ]
      },
      section3: [
        "What makes a home comfortable?",
        "Is it important to own a home in your culture?",
        "How does living in a city differ from living in a rural area?",
        "Should governments help people find affordable housing?",
        "What is the importance of home ownership?"
      ]
    },
    {
      id: 19,
      title: "Speaking Card 19",
      section1: [
        "Do you enjoy watching TV?",
        "How often do you watch TV?",
        "What kind of shows do you like?",
        "Do you prefer watching TV alone or with family?",
        "Has your TV-watching habits changed over time?"
      ],
      section2: {
        topic: "Describe a TV show you watched recently.",
        bulletPoints: [
          "what the show was about",
          "why you decided to watch it",
          "who you watched it with",
          "and explain why you liked or disliked it"
        ]
      },
      section3: [
        "Do you think TV shows can influence behavior?",
        "How have streaming services changed the way people watch TV?",
        "Is it better to watch a show on TV or online?",
        "Should there be limits on the content shown on TV?",
        "Can TV shows reflect social issues effectively?"
      ]
    },
    {
      id: 20,
      title: "Speaking Card 20",
      section1: [
        "Do you enjoy learning new languages?",
        "How many languages do you speak?",
        "Do you think it's important to learn other languages?",
        "How do you practice new languages?",
        "Have you ever faced challenges while learning a new language?"
      ],
      section2: {
        topic: "Describe a language you would like to learn.",
        bulletPoints: [
          "what the language is",
          "why you want to learn it",
          "how you plan to learn it",
          "and explain how learning it would benefit you"
        ]
      },
      section3: [
        "What are the benefits of learning new languages?",
        "Do you think learning a new language is difficult?",
        "How can technology help in learning languages?",
        "Should children be taught foreign languages at an early age?",
        "How does speaking more than one language benefit communication?"
      ]
    }
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
    setActiveSection(1);
  };

  const handleNextSection = () => {
    setActiveSection(prev => Math.min(prev + 1, 3));
  };

  const handleBackToCards = () => {
    setActiveCard(null);
    setActiveSection(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 mb-4">
            IELTS Speaking Cards
          </h1>
          <p className="text-lg text-slate-600">Practice with our collection of speaking topics</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeCard === null ? (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(index)}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                      <ChatBubbleLeftRightIcon className="h-6 w-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex items-center text-slate-500 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-medium">Start practicing</span>
                      <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-slate-200/50"
            >
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{cards[activeCard].title}</h3>
                  <button
                    onClick={handleBackToCards}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-center space-x-4 mb-8">
                  {[1, 2, 3].map((section) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeSection === section
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                          : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      Section {section}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {activeSection === 1 && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">General Questions</h4>
                        <ul className="space-y-4">
                          {cards[activeCard].section1.map((question, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-slate-50/50 rounded-xl p-4 border border-slate-200/50 hover:border-slate-300/50 transition-colors"
                            >
                              <span className="text-slate-700">{question}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection === 2 && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Cue Card Topic</h4>
                        <div className="bg-blue-50/50 rounded-xl p-4 mb-6 border border-blue-200/50">
                          <p className="text-blue-900 font-medium">{cards[activeCard].section2.topic}</p>
                        </div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Points to Cover</h4>
                        <ul className="space-y-4">
                          {cards[activeCard].section2.bulletPoints.map((point, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-slate-50/50 rounded-xl p-4 border border-slate-200/50 hover:border-slate-300/50 transition-colors"
                            >
                              <span className="text-slate-700">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection === 3 && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">Discussion Questions</h4>
                        <ul className="space-y-4">
                          {cards[activeCard].section3.map((question, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-slate-50/50 rounded-xl p-4 border border-slate-200/50 hover:border-slate-300/50 transition-colors"
                            >
                              <span className="text-slate-700">{question}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {activeSection < 3 ? (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleNextSection}
                    className="mt-8 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Next Section
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBackToCards}
                    className="mt-8 w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Back to Speaking Cards
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpeakingCards; 