import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  TagIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const LatestTopics = () => {
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
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Latest Topics</h1>
          <p className="section-subtitle">
            Stay updated with recent IELTS topics and questions
          </p>
        </div>

        <div className="space-y-8">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary-100 rounded-lg mr-4">
                      <topic.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {topic.title}
                    </h3>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CalendarIcon className="h-5 w-5 mr-1" />
                    <span>{topic.date}</span>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none mb-6">
                  {topic.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {topic.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-600"
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

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Check back regularly for updates on the latest IELTS topics and questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatestTopics; 