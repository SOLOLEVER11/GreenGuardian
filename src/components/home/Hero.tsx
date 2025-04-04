
import React from 'react';
import { ArrowRight, Leaf, CloudSun, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-forest-50 to-forest-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Protect your plants with</span>
                <span className="block text-forest-600 dark:text-forest-400 xl:inline"> AI-powered detection</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Upload images of your plants and get instant disease detection and treatment recommendations using our advanced machine learning algorithms.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/diagnose">
                    <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-forest-600 hover:bg-forest-700">
                      Diagnose Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/map">
                    <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-forest-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:text-forest-300 dark:hover:bg-gray-700 border-forest-200 dark:border-gray-700">
                      View Disease Map
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-forest-200 dark:bg-gray-700 flex items-center justify-center">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4 space-x-6">
              <div className="flex flex-col items-center">
                <Leaf className="h-10 w-10 text-forest-600 dark:text-forest-400 animate-pulse-light" />
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Disease Detection</span>
              </div>
              <div className="flex flex-col items-center">
                <CloudSun className="h-10 w-10 text-forest-600 dark:text-forest-400 animate-pulse-light delay-150" />
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Weather Impact</span>
              </div>
              <div className="flex flex-col items-center">
                <Map className="h-10 w-10 text-forest-600 dark:text-forest-400 animate-pulse-light delay-300" />
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Spread Mapping</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Plant image placeholder - Replace with actual plant disease imagery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
