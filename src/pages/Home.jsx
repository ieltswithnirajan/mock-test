import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ComprehensiveLearningResources from '../components/comprehensiveHome';
import { 
  BookOpenIcon, 
  LightBulbIcon, 
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CalendarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import pic from '../../img/pic.jpg';

const Home = () => {
  const features = [
    {
      name: 'Grammar',
      description: 'Master essential grammar concepts with detailed explanations and examples.',
      icon: BookOpenIcon,
      path: '/grammar',
      color: 'from-blue-600 to-sky-500',
      bgLight: 'bg-blue-50',
    },
    {
      name: 'Strategies',
      description: 'Learn proven strategies for all four IELTS modules.',
      icon: LightBulbIcon,
      path: '/strategies',
      color: 'from-amber-600 to-amber-500',
      bgLight: 'bg-amber-50',
    },
    {
      name: 'Mock Tests',
      description: 'Practice with full-length mock tests under real exam conditions.',
      icon: AcademicCapIcon,
      path: '/mock-tests',
      color: 'from-emerald-600 to-emerald-500',
      bgLight: 'bg-emerald-50',
    },
    {
      name: 'Speaking Cards',
      description: 'Access a collection of speaking cue cards with sample answers.',
      icon: ChatBubbleLeftRightIcon,
      path: '/speaking-cards',
      color: 'from-purple-600 to-purple-500',
      bgLight: 'bg-purple-50',
    },
    {
      name: 'Writing',
      description: 'Improve your writing skills with model answers and feedback.',
      icon: PencilSquareIcon,
      path: '/writing',
      color: 'from-rose-600 to-rose-500',
      bgLight: 'bg-rose-50',
    },
    {
      name: 'Latest Topics',
      description: 'Stay updated with the latest IELTS topics and questions.',
      icon: CalendarIcon,
      path: '/latest-topics',
      color: 'from-cyan-600 to-cyan-500',
      bgLight: 'bg-cyan-50',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-sky-100">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiM4Y2JkZmYiLz48L2c+PC9zdmc+')] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-8"
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              Expert IELTS Preparation
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Master IELTS with
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent"> Expert Guidance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Achieve your target band score with our comprehensive IELTS preparation resources, expert strategies, and real test simulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/mock-tests" 
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Take a Mock Test
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="#"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Community
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
      <ComprehensiveLearningResources features={features} />
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Nirajan</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  With over 2 years of dedicated experience in IELTS instruction, I've had the privilege of guiding hundreds of students toward achieving their desired band scores.
                </p>
                <p>
                  My journey spans across multiple international projects, allowing me to work within diverse cultures and adapt to varied communication styles. This exposure has not only broadened my perspective but also enhanced my ability to connect with learners from all backgrounds.
                </p>
                <p>
                  Teaching IELTS is more than a profession-it's a passion. I find genuine joy in breaking down complex ideas into simple, practical strategies that empower students to grow in confidence and capability.
                </p>
                <p>
                  Every learner is unique, and I believe in a personalized approach rooted in clarity, consistency, and continuous progress.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center items-center"
            >
              <div className="w-full max-w-md h-auto rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={pic}
                  alt="Nirajan teaching"
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;