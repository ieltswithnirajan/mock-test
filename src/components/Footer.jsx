import { Link } from 'react-router-dom';
import { 
  ChatBubbleLeftIcon,
  VideoCameraIcon,
  PhotoIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: ChatBubbleLeftIcon,
      href: 'https://discord.gg/BU6qsGFs',
    },
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      text: 'contact@ieltswithnirajan.com',
      href: 'mailto:contact@ieltswithnirajan.com',
    },
    {
      icon: PhoneIcon,
      text: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPinIcon,
      text: 'Kathmandu, Nepal',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-sky-100 border-t border-blue-200">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent mb-4">
              IELTS with Nirajan
            </h3>
            <p className="text-gray-600 mb-6">
              Master the IELTS exam with expert-led strategies, real test simulations, and in-depth learning resources.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/grammar" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Grammar
                </Link>
              </li>
              <li>
                <Link to="/strategies" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Strategies
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link to="/latest-topics" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Latest Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 text-blue-600 mt-1 mr-3" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-600">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest IELTS tips and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg font-medium hover:from-blue-700 hover:to-sky-600 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} IELTS with Nirajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 