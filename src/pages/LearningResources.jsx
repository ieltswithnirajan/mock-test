import { motion } from 'framer-motion';
import { BookOpenIcon, AcademicCapIcon, DocumentTextIcon, SpeakerWaveIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const LearningResources = () => {
  const resources = [
    {
      title: "Listening Materials",
      icon: SpeakerWaveIcon,
      items: [
        {
          title: "Practice Tests",
          description: "Full-length listening tests with audio files and answer keys",
          link: "/listening-practice"
        },
        {
          title: "Common Topics",
          description: "Audio recordings of common IELTS listening topics",
          link: "/listening-topics"
        },
        {
          title: "Tips & Strategies",
          description: "Expert tips for improving listening skills",
          link: "/listening-tips"
        }
      ]
    },
    {
      title: "Reading Materials",
      icon: BookOpenIcon,
      items: [
        {
          title: "Practice Passages",
          description: "Academic and General Training reading passages",
          link: "/reading-practice"
        },
        {
          title: "Question Types",
          description: "Detailed explanations of different question types",
          link: "/reading-question-types"
        },
        {
          title: "Vocabulary Building",
          description: "Essential vocabulary for IELTS reading",
          link: "/reading-vocabulary"
        }
      ]
    },
    {
      title: "Writing Materials",
      icon: PencilSquareIcon,
      items: [
        {
          title: "Writing Samples",
          description: "Model answers with detailed band score analysis",
          link: "/writing-samples"
        },
        {
          title: "Writing Tips",
          description: "Expert strategies for improving your writing",
          link: "/writing-tips"
        },
        {
          title: "Common Topics",
          description: "Practice with frequently asked writing topics",
          link: "/writing-topics"
        }
      ]
    },
    {
      title: "Speaking Materials",
      icon: SpeakerWaveIcon,
      items: [
        {
          title: "Speaking Cards",
          description: "Practice with common IELTS speaking topics",
          link: "/speaking-cards"
        },
        {
          title: "Speaking Tips",
          description: "Expert strategies for improving your speaking",
          link: "/speaking-tips"
        },
        {
          title: "Common Topics",
          description: "Practice with frequently asked speaking topics",
          link: "/speaking-topics"
        }
      ]
    },
    {
      title: "Grammar & Vocabulary",
      icon: AcademicCapIcon,
      items: [
        {
          title: "Grammar Guide",
          description: "Essential grammar for IELTS",
          link: "/grammar-guide"
        },
        {
          title: "Vocabulary Lists",
          description: "Topic-specific vocabulary",
          link: "/vocabulary-lists"
        },
        {
          title: "Common Mistakes",
          description: "Common errors to avoid",
          link: "/common-mistakes"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive IELTS Learning Resources
          </h1>
          <p className="text-xl text-gray-600">
            Access high-quality materials to improve your IELTS skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-sky-600 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-sky-50 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </a>
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

export default LearningResources; 