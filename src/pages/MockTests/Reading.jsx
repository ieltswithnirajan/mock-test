import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Timer from '../../components/Timer';

const Reading = () => {
  const { testId } = useParams();
  const [showInstructions, setShowInstructions] = useState(true);
  const [currentPassage, setCurrentPassage] = useState(0);

  const handleTimeUp = () => {
    alert("Time's up! Please submit your answers.");
  };

  const mockTest = {
    title: "IELTS Academic Reading Test",
    duration: 60,
    totalQuestions: 40,
    passages: [
      {
        title: "MAKING TIME FOR SCIENCE",
        text: `Chronobiology might sound a little futuristic – like something from a science fiction novel, perhaps – but it's actually a field of study that concerns one of the oldest processes life on this planet has ever known: short-term rhythms of time and their effect on flora and fauna.

This can take many forms. Marine life, for example, is influenced by tidal patterns. Animals tend to be active or inactive depending on the position of the sun or moon. Numerous creatures, humans included, are largely diurnal – that is, they like to come out during the hours of sunlight. Nocturnal animals, such as bats and possums, prefer to forage by night. A third group are known as crepuscular: they thrive in the low-light of dawn and dusk and remain inactive at other hours.

When it comes to humans, chronobiologists are interested in what is known as the circadian rhythm. This is the complete cycle our bodies are naturally geared to undergo within the passage of a twenty-four hour day. Aside from sleeping at night and waking during the day, each cycle involves many other factors such as changes in blood pressure and body temperature. Not everyone has an identical circadian rhythm. 'Night people', for example, often describe how they find it very hard to operate during the morning, but become alert and focused by evening. This is a benign variation within circadian rhythms known as a chronotype.

Scientists have limited abilities to create durable modifications of chronobiological demands. Recent therapeutic developments for humans such as artificial light machines and melatonin administration can reset our circadian rhythms, for example, but our bodies can tell the difference and health suffers when we breach these natural rhythms for extended periods of time. Plants appear no more malleable in this respect; studies demonstrate that vegetables grown in season and ripened on the tree are far higher in essential nutrients than those grown in greenhouses and ripened by laser.

Knowledge of chronobiological patterns can have many pragmatic implications for our day-to-day lives. While contemporary living can sometimes appear to subjugate biology – after all, who needs circadian rhythms when we have caffeine pills, energy drinks, shift work and cities that never sleep? – keeping in synch with our body clock is important.

The average urban resident, for example, rouses at the eye-blearing time of 6.04 a.m., which researchers believe to be far too early. One study found that even rising at 7.00 a.m. has deleterious effects on health unless exercise is performed for 30 minutes afterward. The optimum moment has been whittled down to 7.22 a.m.; muscle aches, headaches and moodiness were reported to be lowest by participants in the study who awoke then.

Once you're up and ready to go, what then? If you're trying to shed some extra pounds, dieticians are adamant: never skip breakfast. This disorients your circadian rhythm and puts your body in starvation mode. The recommended course of action is to follow an intense workout with a carbohydrate-rich breakfast; the other way round and weight loss results are not as pronounced.

Morning is also great for breaking out the vitamins. Supplement absorption by the body is not temporal-dependent, but naturopath Pam Stone notes that the extra boost at breakfast helps us get energised for the day ahead. For improved absorption, Stone suggests pairing supplements with a food in which they are soluble and steering clear of caffeinated beverages. Finally, Stone warns to take care with storage; high potency is best for absorption, and warmth and humidity are known to deplete the potency of a supplement.

After-dinner espressos are becoming more of a tradition – we have the Italians to thank for that – but to prepare for a good night's sleep we are better off putting the brakes on caffeine consumption as early as 3 p.m. With a seven hour half-life, a cup of coffee containing 90 mg of caffeine taken at this hour could still leave 45 mg of caffeine in your nervous system at ten o'clock that evening. It is essential that, by the time you are ready to sleep, your body is rid of all traces.

Evenings are important for winding down before sleep; however, dietician Geraldine Georgeou warns that an after-five carbohydrate-fast is more cultural myth than chronobiological demand. This will deprive your body of vital energy needs. Overloading your gut could lead to indigestion, though. Our digestive tracts do not shut down for the night entirely, but their work slows to a crawl as our bodies prepare for sleep. Consuming a modest snack should be entirely sufficient.`,
        questions: [
          {
            type: "true_false_not_given",
            instructions: "Do the following statements agree with the information given in Reading Passage 1? In boxes 1–7 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this",
            questions: [
              {
                id: 1,
                text: "Chronobiology is the study of how living things have evolved over time.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              },
              {
                id: 2,
                text: "The rise and fall of sea levels affects how sea creatures behave.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              },
              {
                id: 3,
                text: "Most animals are active during the daytime.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              },
              {
                id: 4,
                text: "Circadian rhythms identify how we do different things on different days.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              },
              {
                id: 5,
                text: "A 'night person' can still have a healthy circadian rhythm.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              },
              {
                id: 6,
                text: "New therapies can permanently change circadian rhythms without causing harm.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              },
              {
                id: 7,
                text: "Naturally-produced vegetables have more nutritional value.",
                options: ["TRUE", "FALSE", "NOT GIVEN"]
              }
            ]
          },
          {
            type: "multiple_choice",
            instructions: "Choose the correct letter, A, B, C or D. Write the correct letter in boxes 8–13 on your answer sheet.",
            questions: [
              {
                id: 8,
                text: "What did researchers identify as the ideal time to wake up in the morning?",
                options: [
                  "A 6.04",
                  "B 7.00",
                  "C 7.22",
                  "D 7.30"
                ]
              },
              {
                id: 9,
                text: "In order to lose weight, we should",
                options: [
                  "A avoid eating breakfast",
                  "B eat a low carbohydrate breakfast",
                  "C exercise before breakfast",
                  "D exercise after breakfast"
                ]
              },
              {
                id: 10,
                text: "Which is NOT mentioned as a way to improve supplement absorption?",
                options: [
                  "A avoiding drinks containing caffeine while taking supplements",
                  "B taking supplements at breakfast",
                  "C taking supplements with foods that can dissolve them",
                  "D storing supplements in a cool, dry environment"
                ]
              },
              {
                id: 11,
                text: "The best time to stop drinking coffee is",
                options: [
                  "A mid-afternoon",
                  "B 10 p.m.",
                  "C only when feeling anxious",
                  "D after dinner"
                ]
              },
              {
                id: 12,
                text: "In the evening, we should",
                options: [
                  "A stay away from carbohydrates",
                  "B stop exercising",
                  "C eat as much as possible",
                  "D eat a light meal"
                ]
              },
              {
                id: 13,
                text: "Which of the following phrases best describes the main aim of Reading Passage 1?",
                options: [
                  "A to suggest healthier ways of eating, sleeping and exercising",
                  "B to describe how modern life has made chronobiology largely irrelevant",
                  "C to introduce chronobiology and describe some practical applications",
                  "D to plan a daily schedule that can alter our natural chronobiological rhythms"
                ]
              }
            ]
          }
        ]
      },
      {
        title: "The Triune Brain",
        text: `The first of our three brains to evolve is what scientists call the reptilian cortex. This brain sustains the elementary activities of animal survival such as respiration, adequate rest and a beating heart. We are not required to consciously "think" about these activities. The reptilian cortex also houses the "startle centre", a mechanism that facilitates swift reactions to unexpected occurrences in our surroundings. That panicked lurch you experience when a door slams shut somewhere in the house, or the heightened awareness you feel when a twig cracks in a nearby bush while out on an evening stroll are both examples of the reptilian cortex at work. When it comes to our interaction with others, the reptilian brain offers up only the most basic impulses: aggression, mating, and territorial defence. There is no great difference, in this sense, between a crocodile defending its spot along the river and a turf war between two urban gangs.

Although the lizard may stake a claim to its habitat, it exerts total indifference toward the well-being of its young. Listen to the anguished squeal of a dolphin separated from its pod or witness the sight of elephants mourning their dead, however, and it is clear that a new development is at play. Scientists have identified this as the limbic cortex. Unique to mammals, the limbic cortex impels creatures to nurture their offspring by delivering feelings of tenderness and warmth to the parent when children are nearby. These same sensations also cause mammals to develop various types of social relations and kinship networks. When we are with others of "our kind" – be it at soccer practice, church, school or a nightclub – we experience positive sensations of togetherness, solidarity and comfort. If we spend too long away from these networks, then loneliness sets in and encourages us to seek companionship.

Only human capabilities extend far beyond the scope of these two cortexes. Humans eat, sleep and play, but we also speak, plot, rationalise and debate finer points of morality. Our unique abilities are the result of an expansive third brain – the neocortex – which engages with logic, reason and ideas. The power of the neocortex comes from its ability to think beyond the present, concrete moment. While other mammals are mainly restricted to impulsive actions (although some, such as apes, can learn and remember simple lessons), humans can think about the "big picture". We can string together simple lessons (for example, an apple drops downwards from a tree; hurting others causes unhappiness) to develop complex theories of physical or social phenomena (such as the laws of gravity and a concern for human rights).

The neocortex is also responsible for the process by which we decide on and commit to particular courses of action. Strung together over time, these choices can accumulate into feats of progress unknown to other animals. Anticipating a better grade on the following morning's exam, a student can ignore the limbic urge to socialise and go to sleep early instead. Over three years, this ongoing sacrifice translates into a first class degree and a scholarship to graduate school; over a lifetime, it can mean ground-breaking contributions to human knowledge and development. The ability to sacrifice our drive for immediate satisfaction in order to benefit later is a product of the neocortex.

Understanding the triune brain can help us appreciate the different natures of brain damage and psychological disorders. The most devastating form of brain damage, for example, is a condition in which someone is understood to be brain dead. In this state a person appears merely unconscious – sleeping, perhaps – but this is illusory. Here, the reptilian brain is functioning on autopilot despite the permanent loss of other cortexes.

Disturbances to the limbic cortex are registered in a different manner. Pups with limbic damage can move around and feed themselves well enough but do not register the presence of their littermates. Scientists have observed how, after a limbic lobotomy, "one impaired monkey stepped on his outraged peers as if treading on a log or a rock". In our own species, limbic damage is closely related to sociopathic behaviour. Sociopaths in possession of fully-functioning neocortexes are often shrewd and emotionally intelligent people but lack any ability to relate to, empathise with or express concern for others.

One of the neurological wonders of history occurred when a railway worker named Phineas Gage survived an incident during which a metal rod skewered his skull, taking a considerable amount of his neocortex with it. Though Gage continued to live and work as before, his fellow employees observed a shift in the equilibrium of his personality. Gage's animal propensities were now sharply pronounced while his intellectual abilities suffered; garrulous or obscene jokes replaced his once quick wit. New findings suggest, however, that Gage managed to soften these abrupt changes over time and rediscover an appropriate social manner. This would indicate that reparative therapy has the potential to help patients with advanced brain trauma to gain an improved quality of life.`,
        questions: [
          {
            type: "classification",
            instructions: "Classify the following as typical of A The reptilian cortex, B The limbic cortex, C The neocortex. Write the correct letter, A, B or C, in boxes 14–22 on your answer sheet.",
            questions: [
              {
                id: 14,
                text: "Giving up short-term happiness for future gains",
                options: ["A", "B", "C"]
              },
              {
                id: 15,
                text: "Maintaining the bodily functions necessary for life",
                options: ["A", "B", "C"]
              },
              {
                id: 16,
                text: "Experiencing the pain of losing another",
                options: ["A", "B", "C"]
              },
              {
                id: 17,
                text: "Forming communities and social groups",
                options: ["A", "B", "C"]
              },
              {
                id: 18,
                text: "Making a decision and carrying it out",
                options: ["A", "B", "C"]
              },
              {
                id: 19,
                text: "Guarding areas of land",
                options: ["A", "B", "C"]
              },
              {
                id: 20,
                text: "Developing explanations for things",
                options: ["A", "B", "C"]
              },
              {
                id: 21,
                text: "Looking after one's young",
                options: ["A", "B", "C"]
              },
              {
                id: 22,
                text: "Responding quickly to sudden movement and noise",
                options: ["A", "B", "C"]
              }
            ]
          },
          {
            type: "sentence_completion",
            instructions: "Complete the sentences below. Write NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 23–26 on your answer sheet.",
            questions: [
              {
                id: 23,
                text: "A person with only a functioning reptilian cortex is known as",
                answer: ""
              },
              {
                id: 24,
                text: "in humans is associated with limbic disruption.",
                answer: ""
              },
              {
                id: 25,
                text: "An industrial accident caused Phineas Gage to lose part of his",
                answer: ""
              },
              {
                id: 26,
                text: "After his accident, co-workers noticed an imbalance between Gage's and higher-order thinking.",
                answer: ""
              }
            ]
          }
        ]
      },
      {
        title: "HELIUM'S FUTURE UP IN THE AIR",
        text: `A In recent years we have all been exposed to dire media reports concerning the impending demise of global coal and oil reserves, but the depletion of another key non-renewable resource continues without receiving much press at all. Helium – an inert, odourless, monatomic element known to lay people as the substance that makes balloons float and voices squeak when inhaled – could be gone from this planet within a generation.

B Helium itself is not rare; there is actually a plentiful supply of it in the cosmos. In fact, 24 per cent of our galaxy's elemental mass consists of helium, which makes it the second most abundant element in our universe. Because of its lightness, however, most helium vanished from our own planet many years ago. Consequently, only a miniscule proportion – 0.00052%, to be exact – remains in earth's atmosphere. Helium is the by-product of millennia of radioactive decay from the elements thorium and uranium. The helium is mostly trapped in subterranean natural gas bunkers and commercially extracted through a method known as fractional distillation.

C The loss of helium on Earth would affect society greatly. Defying the perception of it as a novelty substance for parties and gimmicks, the element actually has many vital applications in society. Probably the most well known commercial usage is in airships and blimps (non-flammable helium replaced hydrogen as the lifting gas du jour after the Hindenburg catastrophe in 1932, during which an airship burst into flames and crashed to the ground killing some passengers and crew). But helium is also instrumental in deep-sea diving, where it is blended with nitrogen to mitigate the dangers of inhaling ordinary air under high pressure; as a cleaning agent for rocket engines; and, in its most prevalent use, as a coolant for superconducting magnets in hospital MRI (magnetic resonance imaging) scanners.

D The possibility of losing helium forever poses the threat of a real crisis because its unique qualities are extraordinarily difficult, if not impossible to duplicate (certainly, no biosynthetic ersatz product is close to approaching the point of feasibility for helium, even as similar developments continue apace for oil and coal). Helium is even cheerfully derided as a "loner" element since it does not adhere to other molecules like its cousin, hydrogen. According to Dr. Lee Sobotka, helium is the "most noble of gases, meaning it's very stable and non-reactive for the most part ... it has a closed electronic configuration, a very tightly bound atom. It is this coveting of its own electrons that prevents combination with other elements'. Another important attribute is helium's unique boiling point, which is lower than that for any other element. The worsening global shortage could render millions of dollars of high-value, life-saving equipment totally useless. The dwindling supplies have already resulted in the postponement of research and development projects in physics laboratories and manufacturing plants around the world. There is an enormous supply and demand imbalance partly brought about by the expansion of high-tech manufacturing in Asia.

E The source of the problem is the Helium Privatisation Act (HPA), an American law passed in 1996 that requires the U.S. National Helium Reserve to liquidate its helium assets by 2015 regardless of the market price. Although intended to settle the original cost of the reserve by a U.S. Congress ignorant of its ramifications, the result of this fire sale is that global helium prices are so artificially deflated that few can be bothered recycling the substance or using it judiciously. Deflated values also mean that natural gas extractors see no reason to capture helium. Much is lost in the process of extraction. As Sobotka notes: "[t]he government had the good vision to store helium, and the question now is: Will the corporations have the vision to capture it when extracting natural gas, and consumers the wisdom to recycle? This takes long-term vision because present market forces are not sufficient to compel prudent practice". For Nobel-prize laureate Robert Richardson, the U.S. government must be prevailed upon to repeal its privatisation policy as the country supplies over 80 per cent of global helium, mostly from the National Helium Reserve. For Richardson, a twenty- to fifty-fold increase in prices would provide incentives to recycle.

F A number of steps need to be taken in order to avert a costly predicament in the coming decades. Firstly, all existing supplies of helium ought to be conserved and released only by permit, with medical uses receiving precedence over other commercial or recreational demands. Secondly, conservation should be obligatory and enforced by a regulatory agency. At the moment some users, such as hospitals, tend to recycle diligently while others, such as NASA, squander massive amounts of helium. Lastly, research into alternatives to helium must begin in earnest.`,
        questions: [
          {
            type: "paragraph_matching",
            instructions: "Reading Passage 3 has six paragraphs, A–F. Which paragraph contains the following information? Write the correct letter, A–F, in boxes 27–31 on your answer sheet.",
            questions: [
              {
                id: 27,
                text: "A use for helium which makes an activity safer",
                options: ["A", "B", "C", "D", "E", "F"]
              },
              {
                id: 28,
                text: "The possibility of creating an alternative to helium",
                options: ["A", "B", "C", "D", "E", "F"]
              },
              {
                id: 29,
                text: "A term which describes the process of how helium is taken out of the ground",
                options: ["A", "B", "C", "D", "E", "F"]
              },
              {
                id: 30,
                text: "A reason why users of helium do not make efforts to conserve it",
                options: ["A", "B", "C", "D", "E", "F"]
              },
              {
                id: 31,
                text: "A contrast between helium's chemical properties and how non-scientists think about it",
                options: ["A", "B", "C", "D", "E", "F"]
              }
            ]
          },
          {
            type: "true_false_not_given",
            instructions: "Do the following statements agree with the claims of the writer in Reading Passage 3? In boxes 32–35 on your answer sheet, write YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this",
            questions: [
              {
                id: 32,
                text: "Helium chooses to be on its own.",
                options: ["YES", "NO", "NOT GIVEN"]
              },
              {
                id: 33,
                text: "Helium is a very cold substance.",
                options: ["YES", "NO", "NOT GIVEN"]
              },
              {
                id: 34,
                text: "High-tech industries in Asia use more helium than laboratories and manufacturers in other parts of the world.",
                options: ["YES", "NO", "NOT GIVEN"]
              },
              {
                id: 35,
                text: "The US Congress understood the possible consequences of the HPA.",
                options: ["YES", "NO", "NOT GIVEN"]
              }
            ]
          },
          {
            type: "summary_completion",
            instructions: "Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 36–40 on your answer sheet.",
            questions: [
              {
                id: 36,
                text: "Sobotka argues that big business and users of helium need to help look after helium stocks because will not be encouraged through buying and selling alone.",
                answer: ""
              },
              {
                id: 37,
                text: "Richardson believes that the needs to be withdrawn, as the U.S. provides most of the world's helium.",
                answer: ""
              },
              {
                id: 38,
                text: "He argues that higher costs would mean people have to use the resource many times over.",
                answer: ""
              },
              {
                id: 39,
                text: "People should need a to access helium that we still have.",
                answer: ""
              },
              {
                id: 40,
                text: "Furthermore, a should ensure that helium is used carefully.",
                answer: ""
              }
            ]
          }
        ]
      }
    ]
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
          <h1 className="text-3xl font-bold mb-6">IELTS Reading Test Instructions</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <p className="text-gray-700">
              <strong>Duration:</strong> 60 minutes
            </p>
            <p className="text-gray-700">
              <strong>Questions:</strong> 40 questions
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold">Important Information:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You will be given three reading passages.</li>
                <li>Each passage will have different types of questions.</li>
                <li>Time will start automatically when you begin the test.</li>
                <li>Your answers will be automatically saved as you select them.</li>
                <li>You can navigate between passages using the buttons at the bottom.</li>
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
          <Timer duration={60} onTimeUp={handleTimeUp} />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">IELTS Reading Test</h2>
            <div className="mb-6">
              <p className="text-gray-700 mb-2">
                You should spend about 20 minutes on Questions {mockTest.passages[currentPassage].questions[0].questions[0].id}–{mockTest.passages[currentPassage].questions[mockTest.passages[currentPassage].questions.length - 1].questions[mockTest.passages[currentPassage].questions[mockTest.passages[currentPassage].questions.length - 1].questions.length - 1].id}, which are based on Reading Passage {currentPassage + 1} below.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{mockTest.passages[currentPassage].title}</h3>
                <div className="prose max-w-none">
                  {mockTest.passages[currentPassage].text.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                {mockTest.passages[currentPassage].questions.map((questionSet, index) => (
                  <div key={index} className="space-y-4">
                    <p className="text-gray-700 font-medium">{questionSet.instructions}</p>
                    <div className="space-y-6">
                      {questionSet.type === "classification" ? (
                        questionSet.questions.map((question) => (
                          <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-3 font-medium">{question.id}. {question.text}</p>
                            <div className="space-y-2">
                              {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className="flex items-center">
                                  <input
                                    type="radio"
                                    name={`q${question.id}`}
                                    value={option}
                                    className="mr-2"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : questionSet.type === "sentence_completion" ? (
                        questionSet.questions.map((question) => (
                          <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-3 font-medium">{question.id}. {question.text}</p>
                            <div className="flex items-center">
                              <input
                                type="text"
                                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1"
                                placeholder="Write your answer here"
                              />
                            </div>
                          </div>
                        ))
                      ) : questionSet.type === "paragraph_matching" ? (
                        questionSet.questions.map((question) => (
                          <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-3 font-medium">{question.id}. {question.text}</p>
                            <div className="space-y-2">
                              {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className="flex items-center">
                                  <input
                                    type="radio"
                                    name={`q${question.id}`}
                                    value={option}
                                    className="mr-2"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : questionSet.type === "summary_completion" ? (
                        questionSet.questions.map((question) => (
                          <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-3 font-medium">{question.id}. {question.text}</p>
                            <div className="flex items-center">
                              <input
                                type="text"
                                className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none px-2 py-1"
                                placeholder="Write your answer here"
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        questionSet.questions.map((question) => (
                          <div key={question.id} className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-3 font-medium">{question.id}. {question.text}</p>
                            <div className="space-y-2">
                              {question.options.map((option, optionIndex) => (
                                <label key={optionIndex} className="flex items-center">
                                  <input
                                    type="radio"
                                    name={`q${question.id}`}
                                    value={option}
                                    className="mr-2"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setCurrentPassage(prev => Math.max(0, prev - 1))}
                disabled={currentPassage === 0}
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous Passage
              </button>
              {currentPassage === mockTest.passages.length - 1 ? (
                <Link
                  to={`/mock-tests/${testId}/writing`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue to Writing Section
                </Link>
              ) : (
                <button
                  onClick={() => setCurrentPassage(prev => Math.min(mockTest.passages.length - 1, prev + 1))}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next Passage
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Reading; 