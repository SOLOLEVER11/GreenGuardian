
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Leaf className="h-8 w-8 text-forest-600" />
                <span className="ml-2 text-xl font-bold text-forest-800 dark:text-forest-300">PlantGuard</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="border-transparent text-gray-600 hover:border-forest-500 hover:text-forest-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/diagnose" className="border-transparent text-gray-600 hover:border-forest-500 hover:text-forest-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Diagnose
              </Link>
              <Link to="/map" className="border-transparent text-gray-600 hover:border-forest-500 hover:text-forest-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Disease Map
              </Link>
              <Link to="/about" className="border-transparent text-gray-600 hover:border-forest-500 hover:text-forest-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode} 
              className="text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="flex sm:hidden ml-3">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-forest-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-forest-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link to="/" className="text-gray-600 hover:bg-forest-50 hover:text-forest-700 block pl-3 pr-4 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/diagnose" className="text-gray-600 hover:bg-forest-50 hover:text-forest-700 block pl-3 pr-4 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
            Diagnose
          </Link>
          <Link to="/map" className="text-gray-600 hover:bg-forest-50 hover:text-forest-700 block pl-3 pr-4 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
            Disease Map
          </Link>
          <Link to="/about" className="text-gray-600 hover:bg-forest-50 hover:text-forest-700 block pl-3 pr-4 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
