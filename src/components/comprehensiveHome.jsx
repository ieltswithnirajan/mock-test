import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  LightBulbIcon, 
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// Features Section with Dark Theme
const ComprehensiveLearningResources = () => {
  const features = [
    {
      name: "Grammar Mastery",
      description: "Unlock the foundations of language with our comprehensive grammar guides and interactive exercises.",
      icon: BookOpenIcon,
      path: '/grammar',
      color: 'from-blue-400 to-blue-600',
      hoverColor: 'group-hover:from-blue-500 group-hover:to-blue-700',
      borderColor: 'border-blue-700/30',
      iconBg: 'bg-blue-900/30'
    },
    {
      name: "Strategic Approaches",
      description: "Discover powerful techniques to conquer each IELTS module with confidence and precision.",
      icon: LightBulbIcon,
      path: '/strategies',
      color: 'from-amber-400 to-amber-600',
      hoverColor: 'group-hover:from-amber-500 group-hover:to-amber-700',
      borderColor: 'border-amber-700/30',
      iconBg: 'bg-amber-900/30'
    },
    {
      name: "Full Mock Exams",
      description: "Experience authentic test conditions with our meticulously crafted practice exams and detailed analysis.",
      icon: AcademicCapIcon,
      path: '/mock-tests',
      color: 'from-emerald-400 to-emerald-600',
      hoverColor: 'group-hover:from-emerald-500 group-hover:to-emerald-700',
      borderColor: 'border-emerald-700/30',
      iconBg: 'bg-emerald-900/30'
    },
    {
      name: "Speaking Excellence",
      description: "Perfect your speaking skills with our extensive library of cue cards and expert response frameworks.",
      icon: ChatBubbleLeftRightIcon,
      path: '/speaking-cards',
      color: 'from-purple-400 to-purple-600',
      hoverColor: 'group-hover:from-purple-500 group-hover:to-purple-700',
      borderColor: 'border-purple-700/30',
      iconBg: 'bg-purple-900/30'
    },
    {
      name: "Writing samples",
      description: "Transform your writing with professionally crafted model answers and personalized improvement strategies.",
      icon: PencilSquareIcon,
      path: '/writing-samples',
      color: 'from-rose-400 to-rose-600',
      hoverColor: 'group-hover:from-rose-500 group-hover:to-rose-700',
      borderColor: 'border-rose-700/30',
      iconBg: 'bg-rose-900/30'
    },
    {
      name: "Current Trends",
      description: "Stay ahead with our continuously updated database of recent IELTS topics and emerging question patterns.",
      icon: CalendarIcon,
      path: '/latest-topics',
      color: 'from-cyan-400 to-cyan-600',
      hoverColor: 'group-hover:from-cyan-500 group-hover:to-cyan-700',
      borderColor: 'border-cyan-700/30',
      iconBg: 'bg-cyan-900/30'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiMxZTI5M2IiLz48L2c+PC9zdmc+')] opacity-20 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium tracking-wider mb-5 border border-blue-700/30">
            COMPREHENSIVE RESOURCES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Unlock Your IELTS Potential
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Navigate through my carefully curated resources designed to elevate your performance across all IELTS modules
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={feature.path}
                className="block h-full p-1 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20"
              >
                <div className="h-full p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group">
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Glowing corner accent */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    {/* Icon container with gradient */}
                    <div className={`inline-flex p-3 rounded-xl ${feature.iconBg} border ${feature.borderColor} mb-6 relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} ${feature.hoverColor} opacity-30 transition-opacity duration-300`}></div>
                      <feature.icon className="w-8 h-8 text-white relative z-10" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:to-white group-hover:from-gray-300 transition-all duration-300">
                      {feature.name}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* Subtle indicator for interaction */}
                    <div className="mt-6 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:border-0 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveLearningResources;