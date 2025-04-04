
import React from 'react';
import { Github, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-forest-700 dark:text-forest-300">PlantGuard Vision</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Protecting plants with AI-powered disease detection</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mt-4 md:mt-0">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-forest-600 dark:text-gray-400 dark:hover:text-forest-400">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-forest-600 dark:text-gray-400 dark:hover:text-forest-400">API Reference</a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-forest-600 dark:text-gray-400 dark:hover:text-forest-400">Tutorials</a>
                </li>
              </ul>
            </div>
            
            <div className="mt-4 md:mt-0">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <a href="mailto:team@plantguard.edu" className="text-sm text-gray-500 hover:text-forest-600 dark:text-gray-400 dark:hover:text-forest-400">team@plantguard.edu</a>
                </li>
                <li className="flex items-center">
                  <Github className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <a href="https://github.com/plantguard" className="text-sm text-gray-500 hover:text-forest-600 dark:text-gray-400 dark:hover:text-forest-400">github.com/plantguard</a>
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                  <a href="#" className="text-sm text-gray-500 hover:text-forest-600 dark:text-gray-400 dark:hover:text-forest-400">Academic Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-4">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} PlantGuard Vision - Academic Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
