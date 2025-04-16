import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  LightBulbIcon, 
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import pic from '../../img/pic.jpg';

const Home = () => {
  const features = [
    {
      name: 'Grammar',
      description: 'Master essential grammar concepts with detailed explanations and examples.',
      icon: BookOpenIcon,
      path: '/grammar',
      color: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
    },
    {
      name: 'Strategies',
      description: 'Learn proven strategies for all four IELTS modules.',
      icon: LightBulbIcon,
      path: '/strategies',
      color: 'from-amber-500 to-amber-600',
      bgLight: 'bg-amber-50',
    },
    {
      name: 'Mock Tests',
      description: 'Practice with full-length mock tests under real exam conditions.',
      icon: AcademicCapIcon,
      path: '/mock-tests',
      color: 'from-emerald-500 to-emerald-600',
      bgLight: 'bg-emerald-50',
    },
    {
      name: 'Speaking Cards',
      description: 'Access a collection of speaking cue cards with sample answers.',
      icon: ChatBubbleLeftRightIcon,
      path: '/speaking-cards',
      color: 'from-purple-500 to-purple-600',
      bgLight: 'bg-purple-50',
    },
    {
      name: 'Writing',
      description: 'Improve your writing skills with model answers and feedback.',
      icon: PencilSquareIcon,
      path: '/writing',
      color: 'from-rose-500 to-rose-600',
      bgLight: 'bg-rose-50',
    },
    {
      name: 'Latest Topics',
      description: 'Stay updated with the latest IELTS topics and questions.',
      icon: CalendarIcon,
      path: '/latest-topics',
      color: 'from-cyan-500 to-cyan-600',
      bgLight: 'bg-cyan-50',
    },
  ];

  return (
    <div className="min-h-screen mt-20 relative">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
  
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Master IELTS with
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Expert Guidance</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Achieve your target band score with our comprehensive IELTS preparation resources, expert strategies, and real test simulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/mock-tests" 
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Take a Mock Test
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <a
              href="#"
              className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transform hover:-translate-y-0.5 transition-all duration-300"
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
  
    {/* About Section */}
    <div className="min-h-screen mt-20 relative">


  {/* About Section */}
  {/* About Section */}
<section className="py-20 bg-white">
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
            With over 2 years of dedicated IELTS teaching experience, I've helped hundreds of students achieve their dream scores.
          </p>
          <p>
            My teaching philosophy focuses on personalized learning, practical strategies, and continuous improvement. I believe in making complex concepts simple and helping students build confidence through practice.
          </p>
          <p>
            Whether you're aiming for Band 7 or higher, I'm here to guide you through every step of your IELTS journey.
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
    <div className="w-[1/4] max-w-xs h-auto">
  <img
    src={pic}
    alt="Nirajan teaching"
    className="object-cover w-full h-full"
  />
</div>

      </motion.div>
    </div>
  </div>
</section>
</div>
  </div>
  );
};

export default Home;