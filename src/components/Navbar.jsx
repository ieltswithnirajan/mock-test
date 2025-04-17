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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-sky-600 group-hover:to-cyan-500 transition-all duration-500">
                IELTS with Nirajan
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white bg-gradient-to-r from-blue-600 to-sky-500 shadow-lg shadow-blue-500/20'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            {!location.pathname.includes('/mock-tests') && (
              <Link
                to="/mock-tests"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl text-sm font-medium 
                         hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg shadow-purple-500/20
                         hover:shadow-xl hover:-translate-y-0.5 animate-pulse"
              >
                Take a Mock Test
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/90 backdrop-blur-lg shadow-lg rounded-b-2xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`block px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-white bg-gradient-to-r from-blue-600 to-sky-500 shadow-lg shadow-blue-500/20'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          {!location.pathname.includes('/mock-tests') && (
            <Link
              to="/mock-tests"
              className="block px-5 py-4 mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-xl font-medium 
                       hover:from-purple-700 hover:via-pink-600 hover:to-red-600 shadow-lg shadow-purple-500/20 animate-pulse"
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