import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const WritingSamples = () => {
  const samples = [
    {
      id: 1,
      task: "Task 1",
      type: "Academic",
      title: "Line Graph - Population Growth",
      question: "The graph below shows the population growth in three different countries from 1950 to 2050. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
      answer: `The line graph illustrates the population growth trends in three countries - India, China, and the USA - from 1950 to 2050 (projected).

In 1950, China had the largest population at approximately 550 million, followed by India with 350 million, and the USA with 150 million. Over the next 50 years, all three countries experienced steady growth, with China maintaining its lead until around 2020.

However, the most significant change occurred after 2020, when India's population surpassed China's. By 2050, India is projected to have the largest population at about 1.6 billion, while China's population is expected to stabilize at around 1.4 billion. The USA's population, though growing steadily, remains significantly smaller, reaching approximately 400 million by 2050.

Overall, while all three countries show population growth, India is expected to become the most populous country by 2050, with China's growth rate slowing down significantly.`,
      bandScore: 8,
      analysis: [
        "Task Achievement: The response fully addresses the task, clearly presenting the main trends and making relevant comparisons.",
        "Coherence and Cohesion: The answer is well-organized with clear paragraphing and appropriate linking words.",
        "Lexical Resource: Uses a good range of vocabulary to describe trends and make comparisons.",
        "Grammatical Range and Accuracy: Demonstrates good control of grammar with a variety of sentence structures."
      ]
    },
    {
      id: 2,
      task: "Task 2",
      type: "Academic",
      title: "Technology and Education",
      question: "Some people believe that technology has made education more accessible, while others argue that it has created more problems than it has solved. Discuss both views and give your own opinion.",
      answer: `The impact of technology on education has been a subject of debate in recent years. While some argue that technological advancements have democratized education, others believe they have introduced new challenges. This essay will examine both perspectives before presenting a balanced view.

On the one hand, technology has undoubtedly made education more accessible. Online learning platforms and digital resources have broken down geographical barriers, allowing students from remote areas to access quality education. For instance, massive open online courses (MOOCs) enable learners worldwide to study courses from prestigious universities. Additionally, digital tools like educational apps and interactive software have made learning more engaging and personalized.

On the other hand, critics argue that technology has created significant challenges. The digital divide means that students without access to reliable internet or devices are at a disadvantage. Moreover, the over-reliance on technology can lead to reduced face-to-face interaction and critical thinking skills. The prevalence of online distractions and the potential for academic dishonesty are additional concerns.

In my opinion, while technology has revolutionized education, its benefits can only be fully realized when accompanied by proper infrastructure and digital literacy programs. Governments and educational institutions must work together to ensure equitable access to technology while maintaining the essential human elements of education.`,
      bandScore: 8.5,
      analysis: [
        "Task Response: The essay fully addresses the prompt, presenting both views and a clear opinion.",
        "Coherence and Cohesion: Well-structured with clear progression of ideas and effective linking devices.",
        "Lexical Resource: Demonstrates a wide range of vocabulary with precise word choice.",
        "Grammatical Range and Accuracy: Shows excellent control of complex sentence structures and grammar."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/learning-resources"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Learning Resources
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IELTS Writing Samples
          </h1>
          <p className="text-xl text-gray-600">
            Model answers with detailed band score analysis
          </p>
        </motion.div>

        <div className="space-y-12">
          {samples.map((sample, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {sample.task} - {sample.title}
                  </h2>
                  <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Band {sample.bandScore}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{sample.question}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Model Answer
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-line">
                    {sample.answer}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Band Score Analysis
                </h3>
                <ul className="space-y-3">
                  {sample.analysis.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center justify-center mt-0.5">
                        {pointIndex + 1}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WritingSamples; 