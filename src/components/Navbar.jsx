import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Grammar', path: '/grammar' },
    { name: 'Strategies', path: '/strategies' },
    { name: 'Mock Tests', path: '/mock-tests' },
    { name: 'Speaking Cards', path: '/speaking-cards' },
    { name: 'Latest Topics', path: '/latest-topics' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:from-blue-600 hover:via-sky-500 hover:to-cyan-500 transition-all duration-300">
                IELTS with Nirajan
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-sky-600 bg-sky-50/80'
                    : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/60'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            {!location.pathname.includes('/mock-tests') && (
              <Link
                to="/mock-tests"
                className="px-6 py-2.5 bg-gradient-to-r from-sky-600 to-blue-500 text-white rounded-lg text-sm font-medium 
                         hover:from-sky-700 hover:to-blue-600 transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-md"
              >
                Take a Mock Test
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md shadow-lg rounded-b-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'text-sky-600 bg-sky-50/80'
                  : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50/60'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          {!location.pathname.includes('/mock-tests') && (
            <Link
              to="/mock-tests"
              className="block px-4 py-3 mt-4 bg-gradient-to-r from-sky-600 to-blue-500 text-white rounded-lg font-medium hover:from-sky-700 hover:to-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Take a Mock Test
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 