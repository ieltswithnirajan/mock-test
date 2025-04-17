import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  TagIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  BookOpenIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const topics = [
  {
    id: 1,
    title: 'Speaking Part 1 Questions - April 2025',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions from IELTS speaking tests:

1. Do you like reading books? Why or why not?
2. What kind of books do you prefer to read?
3. How often do you read books?
4. Do you think reading is important? Why?
5. Did you read books when you were a child?

Tips for answering:
- Keep your answers natural and conversational
- Expand on your answers with reasons and examples
- Use a variety of vocabulary
- Maintain good pronunciation and intonation`,
    tags: ['Speaking', 'Part 1', 'April 2025'],
  },
  {
    id: 2,
    title: 'Writing Task 2 Topics - March 2025',
    date: 'March 28, 2025',
    category: 'Writing',
    icon: PencilSquareIcon,
    content: `Recent Writing Task 2 topics from IELTS tests:

1. Some people believe that technology has made our lives more complicated. Others argue that it has made our lives easier. Discuss both views and give your opinion.

2. Many people believe that social media has a negative impact on society. To what extent do you agree or disagree?

3. Some people think that governments should spend money on public transportation rather than building new roads. Do you agree or disagree?

Tips for writing:
- Plan your essay structure before writing
- Include clear topic sentences
- Support your ideas with examples
- Use appropriate linking words
- Check your grammar and vocabulary`,
    tags: ['Writing', 'Task 2', 'March 2025'],
  },
  {
    id: 3,
    title: 'Speaking Part 2 Cue Cards - March 2025',
    date: 'March 20, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 cue cards from IELTS speaking tests:

1. Describe a time when you helped someone
   - Who you helped
   - How you helped them
   - Why you helped them
   - How you felt about helping

2. Describe a piece of technology you use every day
   - What it is
   - How you use it
   - Why it is important to you
   - How it has changed your life

3. Describe a place you would like to visit
   - Where it is
   - What you know about it
   - Why you want to visit
   - What you would do there

Tips for speaking:
- Use the preparation time wisely
- Structure your answer using the points
- Include specific details and examples
- Keep track of time while speaking`,
    tags: ['Speaking', 'Part 2', 'March 2025'],
  },
  {
    id: 4,
    title: 'Reading Topics - February 2025',
    date: 'February 15, 2025',
    category: 'Reading',
    icon: BookOpenIcon,
    content: `Recent reading topics from IELTS tests:

1. The History of Coffee
2. Climate Change and Its Effects
3. The Development of Language
4. Renewable Energy Sources
5. The Impact of Social Media

Tips for reading:
- Skim the passage first
- Read questions carefully
- Look for keywords
- Manage your time effectively
- Check your answers carefully`,
    tags: ['Reading', 'February 2025'],
  },
  {
    id: 5,
    title: 'Speaking Part 1 Questions - April 2025 (Living)',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about where you live:

1. Where are you living now?
2. How long have you lived there?
3. What do you like most about the place where you live?
4. Do you think your city has changed much in recent years?
5. Do people of different age groups live in your area?
6. How's your neighborhood?
7. Are you friends with your neighbors?
8. What can be improved in the area where you live?
9. Do you know any famous people in the area where you live?
10. Do you intend to stay in this area in the future?

Tips for answering:
- Be specific about your living situation
- Share personal experiences about your area
- Compare past and present if talking about changes
- Mention both positive and negative aspects for balanced answers`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Living'],
  },
  {
    id: 6,
    title: 'Speaking Part 1 Questions - April 2025 (Hobbies)',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about hobbies:

1. Do you have any hobbies?
2. Did you have any hobbies when you were a child?
3. Do you have a hobby that you've had since childhood?
4. Do you have the same hobbies as your family members?

Tips for answering:
- Be honest about your hobbies
- Give examples of activities you enjoy
- Compare childhood and current hobbies if relevant
- Mention if hobbies are shared with family`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Hobbies'],
  },
  {
    id: 7,
    title: 'Speaking Part 1 Questions - April 2025 (Computers)',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about computers:

1. In what conditions would you use a computer?
2. When was the first time you used a computer?
3. What will your life be like without computers?
4. In what conditions would it be difficult for you to use a computer?

Tips for answering:
- Be specific about your computer usage
- Share your first experience with computers
- Imagine realistically life without computers
- Mention situations where computer use is challenging`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Technology'],
  },
  {
    id: 8,
    title: 'Speaking Part 1 Questions - April 2025 (Transport)',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about transport:

1. Do you own a car?
2. How often do you use the car?
3. Do you think it is necessary to learn how to drive?
4. Are there a lot of traffic jams in your city?

Tips for answering:
- Be honest about your transportation habits
- Mention frequency of car use if applicable
- Discuss pros and cons of driving
- Describe traffic conditions in your area`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Transport'],
  },
  {
    id: 9,
    title: 'Speaking Part 1 Questions - April 2025 (Friends)',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about friends:

1. Do you like making friends?
2. Did you make a lot of friends when you were a child?
3. Have you made any new friends recently?
4. What do you often talk about with your friends?

Tips for answering:
- Share your attitude toward making friends
- Compare childhood and current friendships
- Mention recent social interactions
- Describe common conversation topics`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Social'],
  },
  {
    id: 10,
    title: 'Speaking Part 1 Questions - April 2025 (Communication)',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about communication:

1. Do you like to talk with others?
2. Do you like to talk a lot with others?
3. Did you like to talk with others when you were a kid?

Tips for answering:
- Describe your communication style
- Compare your current and childhood talkativeness
- Give examples of when you enjoy talking
- Be honest about your preferences`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Communication'],
  },
  {
    id: 11,
    title: 'Speaking Part 2 Topics - April 2025',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topics from IELTS speaking tests:

1. Describe a person you know who has chosen a career in the medical field
   - Who he/she is
   - What he/she does
   - Why he/she chose this career
   - Explain how you feel about him/her

2. Describe an energetic person that you know
   - Who the person is
   - How you knew this person
   - Why you think this person is energetic
   - Explain how you feel about this person

3. Describe a friend you like to talk with
   - Who she is
   - What you like to talk about
   - Why you like to talk with her
   - Explain how you feel about her

4. Describe an occasion that you lost something in a public place
   - What you lost
   - When and where you lost it
   - What you did to find it
   - Explain how you felt about it

Tips for speaking:
- Use the full minute of preparation time
- Structure your answer clearly
- Include personal details and examples
- Speak for the full 2 minutes`,
    tags: ['Speaking', 'Part 2', 'April 2025'],
  },
  {
    id: 12,
    title: 'Speaking Part 3 Questions - April 2025',
    date: 'April 15, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions:

1. Medical Professionals:
   - Do you think doctors and nurses are very important?
   - Who plays a more important role, doctors or nurses?
   - Do you think that doctors and nurses are not paid enough?
   - Do you think it is necessary to learn first aid skills?

2. Energy and Work:
   - Do you think we need more energy nowadays?
   - What kinds of jobs require more physical energy?
   - Should jobs that require physical work be higher paid?
   - Do you think machines could replace all human workers in the future?

3. Social Interactions:
   - Where do young people like to meet?
   - What do young people talk about when they meet up?
   - Do you think people should be honest when talking with friends?
   - On what occasions do people talk with strangers?

4. Lost Items:
   - What kinds of things do people usually lose?
   - What do people often do when losing things?
   - Is it an effective way to use rewards to find lost things?
   - What kinds of people may lose things often?

Tips for answering:
- Develop your answers with explanations
- Give examples to support your points
- Compare different perspectives
- Use appropriate vocabulary for each topic`,
    tags: ['Speaking', 'Part 3', 'April 2025'],
  },
  {
    id: 13,
    title: 'Speaking Part 1 Questions - April 2025 (Home)',
    date: 'April 9, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about home:

1. Do you live in a house or a flat?
2. Which is your favorite room?
3. Can you describe it?
4. If you could improve one thing in your home, what would it be?
5. How long have you lived there?
6. What do you like the most about it?
7. Can you describe the view from your windows?
8. Do you plan to live there in the future?

Tips for answering:
- Be descriptive about your living space
- Explain why you chose your favorite room
- Be realistic about potential improvements
- Share your future living plans`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Home'],
  },
  {
    id: 14,
    title: 'Speaking Part 1 Questions - April 2025 (Friends)',
    date: 'April 9, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about friends:

1. Do you have many friends?
2. How important are friends to you?
3. Where do you often meet?
4. What do you usually do with your friends?

Tips for answering:
- Quantify your friendships if possible
- Explain the value of friendships in your life
- Describe common meeting places
- Share typical activities with friends`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Friends'],
  },
  {
    id: 15,
    title: 'Speaking Part 2 Topics - April 2025 (Special Cake)',
    date: 'April 9, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topic:

Describe a special cake you received from others.
- When it happened
- Who gave it to you
- What kind of cake it was
- Why it was special to you
- And explain why it's a special cake.

Tips for answering:
- Set the scene with time and place
- Describe the giver and your relationship
- Be specific about the cake details
- Explain the emotional significance`,
    tags: ['Speaking', 'Part 2', 'April 2025', 'Food'],
  },
  {
    id: 16,
    title: 'Speaking Part 3 Questions - April 2025 (Food)',
    date: 'April 9, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions about food:

1. Is any food in your country eaten at particular times or on special occasions?
2. What are the differences between exceptional food in your country and other countries?
3. Why are some people willing to spend a lot of money on meals on special days?
4. Do you think it's good to communicate when eating with your family?

Tips for answering:
- Give examples of traditional foods
- Compare cultural food practices
- Discuss the value of special meals
- Explain family dining customs`,
    tags: ['Speaking', 'Part 3', 'April 2025', 'Food'],
  },
  {
    id: 17,
    title: 'Speaking Part 1 Questions - April 2025 (Hometown)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about hometown:

1. Where is your hometown?
2. What do you like about your hometown?
3. Is it a good place for young people?
4. How long have you been living there?
5. Do you like living there?
6. Is there anything you dislike about it?

Tips for answering:
- Be specific about location
- Highlight positive aspects
- Assess suitability for youth
- Balance likes and dislikes`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Hometown'],
  },
  {
    id: 18,
    title: 'Speaking Part 1 Questions - April 2025 (Science)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 1 questions about science:

1. When did you start to learn science?
2. Is there any technology that you think is helpful in daily life?
3. Do you think science classes are necessary?
4. Which science subject is interesting to you?

Tips for answering:
- Recall your science education
- Give examples of useful technology
- Justify the importance of science
- Share your favorite science area`,
    tags: ['Speaking', 'Part 1', 'April 2025', 'Science'],
  },
  {
    id: 19,
    title: 'Speaking Part 2 Topics - April 2025 (Gift)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topic:

Describe a gift you would like to buy for your friend.
- What gift you would like to buy
- Who you would like to give it to
- Why you would like to buy a gift for your friend
- And explain why you choose that gift.

Tips for answering:
- Be specific about the gift
- Describe the recipient clearly
- Explain your motivation
- Justify your gift choice`,
    tags: ['Speaking', 'Part 2', 'April 2025', 'Gifts'],
  },
  {
    id: 20,
    title: 'Speaking Part 2 Topics - April 2025 (Reader)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topic:

Describe a person who likes to read a lot.
- Who he/she is
- How you knew he/she
- What does he/she read
- And explain why you think he/she likes to read a lot.

Tips for answering:
- Identify the person clearly
- Explain how you met
- Specify reading preferences
- Analyze their love for reading`,
    tags: ['Speaking', 'Part 2', 'April 2025', 'Reading'],
  },
  {
    id: 21,
    title: 'Speaking Part 2 Topics - April 2025 (Opinionated Person)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topic:

Describe a person who always has strong opinions.
- Who this person is
- How you knew him/her
- What kinds of strong opinions this person has
- And explain why you think he/she is a person who has strong opinions.

Tips for answering:
- Identify the person clearly
- Explain your relationship
- Give examples of their opinions
- Analyze their opinionated nature`,
    tags: ['Speaking', 'Part 2', 'April 2025', 'Personality'],
  },
  {
    id: 22,
    title: 'Speaking Part 2 Topics - April 2025 (Science)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topic:

Describe one area of science (medicine, physics, etc.) that interests you.
- What it is
- When you knew it
- How you knew it
- And explain why it sounds interesting to you.

Tips for answering:
- Choose a specific science field
- Recall when you discovered it
- Explain how you learned about it
- Share why it fascinates you`,
    tags: ['Speaking', 'Part 2', 'April 2025', 'Science'],
  },
  {
    id: 23,
    title: 'Speaking Part 3 Questions - April 2025 (Gifts)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions about gifts:

1. When do people usually send gifts to others?
2. Do people in your country give gifts at traditional festivals?
3. Is it hard to choose a gift?
4. Will people feel happy when receiving an expensive gift?

Tips for answering:
- Mention common gifting occasions
- Describe cultural gifting traditions
- Discuss the challenges of gift selection
- Analyze the value of expensive gifts`,
    tags: ['Speaking', 'Part 3', 'April 2025', 'Gifts'],
  },
  {
    id: 24,
    title: 'Speaking Part 3 Questions - April 2025 (Reading)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions about reading:

1. Why are many people so keen on reading?
2. Do you think parents should help their children develop reading habits from an early age?
3. Is reading for fun or work?
4. What reading topics are popular in your country?

Tips for answering:
- Explain the benefits of reading
- Discuss early reading development
- Compare recreational and professional reading
- Describe popular reading materials`,
    tags: ['Speaking', 'Part 3', 'April 2025', 'Reading'],
  },
  {
    id: 25,
    title: 'Speaking Part 3 Questions - April 2025 (Opinions)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions about opinions:

1. What do young people have strong opinions about?
2. What do old people have strong opinions about?
3. Are there many young people in our lives who have strong opinions?
4. Which is more important, listening to others or persuading others?

Tips for answering:
- Compare generational opinion topics
- Assess prevalence of strong opinions
- Balance the value of listening and persuading
- Give examples to support points`,
    tags: ['Speaking', 'Part 3', 'April 2025', 'Communication'],
  },
  {
    id: 26,
    title: 'Speaking Part 3 Questions - April 2025 (Science)',
    date: 'April 8, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions about science:

1. Why do some children not like learning science at school?
2. Should children be encouraged to learn science?
3. Should people be encouraged to learn science after graduation?
4. How do you get to know about scientific news?

Tips for answering:
- Analyze barriers to science education
- Justify the importance of science learning
- Discuss lifelong science education
- Share science information sources`,
    tags: ['Speaking', 'Part 3', 'April 2025', 'Science'],
  },
  {
    id: 27,
    title: 'Speaking Part 2 Topics - April 2025 (Returned Product)',
    date: 'April 2, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 2 topic:

Describe a product you bought but returned at the end.
- What it is
- When you bought it
- Why you returned it
- And explain how you felt about it.

Tips for answering:
- Identify the product clearly
- Set the time frame
- Explain the return reasons
- Share your emotional response`,
    tags: ['Speaking', 'Part 2', 'April 2025', 'Shopping'],
  },
  {
    id: 28,
    title: 'Speaking Part 3 Questions - April 2025 (Shopping)',
    date: 'April 2, 2025',
    category: 'Speaking',
    icon: ChatBubbleLeftRightIcon,
    content: `Recent Part 3 follow-up questions about shopping:

1. Why do many people like shopping online?
2. Do you think that advertisements should be strictly regulated?

Tips for answering:
- Analyze online shopping benefits
- Discuss advertising regulation pros and cons
- Give examples to support points
- Consider consumer protection aspects`,
    tags: ['Speaking', 'Part 3', 'April 2025', 'Shopping'],
  },
];

const LatestTopics = () => {
  const formatContent = (content) => {
    const sections = content.split('\n\n');
    const formattedSections = [];
    let currentSection = null;

    sections.forEach((section) => {
      if (section.includes('Tips for')) {
        const [title, ...tips] = section.split('\n');
        currentSection = {
          type: 'tips',
          title: title.replace(':', ''),
          content: tips.map(tip => tip.trim().replace('- ', ''))
        };
      } else if (section.match(/^\d+\./m)) {
        currentSection = {
          type: 'questions',
          content: section.split('\n').filter(line => line.match(/^\d+\./)).map(q => q.replace(/^\d+\.\s*/, '').trim())
        };
      } else if (section.trim()) {
        currentSection = {
          type: 'text',
          content: section.trim()
        };
      }
      
      if (currentSection) {
        formattedSections.push(currentSection);
        currentSection = null;
      }
    });

    return formattedSections;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            Latest Updates
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4"
          >
            IELTS Topics & Questions
          </motion.h1>
        </div>

        <div className="space-y-8">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Topic Header */}
              <div className={`px-6 py-4 border-b ${
                topic.category === 'Speaking' ? 'bg-purple-50' :
                topic.category === 'Writing' ? 'bg-rose-50' :
                'bg-blue-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <topic.icon className={`h-5 w-5 ${
                      topic.category === 'Speaking' ? 'text-purple-600' :
                      topic.category === 'Writing' ? 'text-rose-600' :
                      'text-blue-600'
                    } mr-3`} />
                    <h2 className="text-lg font-semibold text-gray-900">{topic.title}</h2>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    <span>{topic.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {formatContent(topic.content).map((section, index) => {
                  if (section.type === 'questions') {
                    return (
                      <div key={index} className="space-y-3">
                        {section.content.map((question, qIndex) => (
                          <motion.div 
                            key={qIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: qIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start group p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-medium mr-3">
                              {qIndex + 1}
                            </span>
                            <p className="text-gray-700 pt-1.5">{question}</p>
                          </motion.div>
                        ))}
                      </div>
                    );
                  } else if (section.type === 'tips') {
                    return (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6"
                      >
                        <div className="flex items-center mb-4">
                          <LightBulbIcon className="h-5 w-5 text-amber-500 mr-2" />
                          <h3 className="font-medium text-gray-900">{section.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {section.content.map((tip, tIndex) => (
                            <motion.div 
                              key={tIndex}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: tIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start bg-white/60 backdrop-blur-sm p-3 rounded-lg"
                            >
                              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700">{tip}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  } else {
                    return (
                      <div key={index} className="text-gray-600">
                        {section.content}
                      </div>
                    );
                  }
                })}

                <div className="flex flex-wrap gap-2 pt-4">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        topic.category === 'Speaking' ? 'bg-purple-100 text-purple-800' :
                        topic.category === 'Writing' ? 'bg-rose-100 text-rose-800' :
                        'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTopics; 