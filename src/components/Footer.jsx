import { Link } from 'react-router-dom';
import { 
  ChatBubbleLeftIcon,
  VideoCameraIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: ChatBubbleLeftIcon,
      href: 'https://discord.gg/BU6qsGFs',
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">IELTS with Nirajan</h3>
            <p className="text-gray-600">
              Master the IELTS exam with expert-led strategies, real test simulations, and in-depth learning resources.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/grammar" className="text-gray-600 hover:text-primary-600">
                  Grammar
                </Link>
              </li>
              <li>
                <Link to="/strategies" className="text-gray-600 hover:text-primary-600">
                  Strategies
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-gray-600 hover:text-primary-600">
                  Mock Tests
                </Link>
              </li>
              <li>
                <Link to="/latest-topics" className="text-gray-600 hover:text-primary-600">
                  Latest Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} IELTS with Nirajan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 