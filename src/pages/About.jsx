import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About IELTS with Nirajan
          </h1>
          <p className="text-xl text-gray-600">
            Your comprehensive IELTS preparation platform
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              IELTS with Nirajan is dedicated to providing high-quality IELTS preparation materials and resources to help students achieve their desired band scores. Our platform offers comprehensive practice materials, expert tips, and personalized guidance to ensure your success in the IELTS examination.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Comprehensive practice tests for all IELTS sections</li>
              <li>Detailed model answers with band score analysis</li>
              <li>Interactive speaking practice cards</li>
              <li>Expert tips and strategies</li>
              <li>Regular updates with latest IELTS topics</li>
              <li>Personalized learning resources</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-700 mb-6">
              We believe in a holistic approach to IELTS preparation, focusing not just on test-taking strategies but also on developing the fundamental language skills needed for success. Our materials are designed to help you improve your English proficiency while familiarizing you with the IELTS test format.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Expert-created content by experienced IELTS trainers</li>
              <li>Regularly updated materials reflecting current test trends</li>
              <li>User-friendly interface for easy navigation</li>
              <li>Comprehensive coverage of all IELTS sections</li>
              <li>Practical tips and strategies for test success</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 