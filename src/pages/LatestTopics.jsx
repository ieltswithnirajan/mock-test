import { motion } from 'framer-motion';
import {
  CalendarIcon,
  TagIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  BookOpenIcon,
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


const getCategoryStyle = (category) => {
  switch (category) {
    case 'Speaking':
      return 'bg-purple-100 text-purple-600';
    case 'Writing':
      return 'bg-rose-100 text-rose-600';
    case 'Reading':
      return 'bg-blue-100 text-blue-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const getTipStyle = (category) => {
  switch (category) {
    case 'Speaking':
      return 'bg-purple-200 text-purple-800';
    case 'Writing':
      return 'bg-rose-200 text-rose-800';
    case 'Reading':
      return 'bg-blue-200 text-blue-800';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};

const LatestTopics = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Latest IELTS Topics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Stay updated with the most recent IELTS topics and questions
          </motion.p>
        </div>

        <div className="space-y-8">
          {topics.map(({ id, title, date, category, icon: Icon, content, tags }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${getCategoryStyle(category)}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-semibold text-white ml-4">{title}</h2>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">{date}</span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none mb-6">
                  {content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('Tips for answering:')) {
                      return (
                        <div
                          key={idx}
                          className={`p-4 rounded-lg ${getTipStyle(category)} mb-4`}
                        >
                          <strong>Tips for answering:</strong>
                          <p className="mt-2">{paragraph.replace('Tips for answering:', '').trim()}</p>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-gray-300 whitespace-pre-line">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-300"
                    >
                      <TagIcon className="h-4 w-4 mr-1" />
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