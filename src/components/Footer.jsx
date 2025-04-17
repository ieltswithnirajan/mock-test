import { Link } from 'react-router-dom';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: ChatBubbleLeftIcon,
      href: 'https://discord.gg/BU6qsGFs',
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent mb-4">
              IELTS with Nirajan
            </h3>
            <p className="text-gray-400 mb-6">
              Master the IELTS exam with strategies, real test simulations, and in-depth learning resources.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
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
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/grammar" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Grammar
                </Link>
              </li>
              <li>
                <Link to="/strategies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Strategies
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link to="/latest-topics" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Latest Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Placeholder for additional content */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">About Us</h3>
            <p className="text-gray-400">
              Join  community and take your IELTS preparation to the next level. Learn, practice, and succeed with us.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} IELTS with Nirajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;