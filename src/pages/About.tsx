
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Users, Database, Brain, Server } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">About PlantGuard Vision</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            An academic project focused on revolutionizing plant disease detection using artificial intelligence and machine learning technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-forest-700 dark:text-forest-400 mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                PlantGuard Vision aims to provide farmers, gardeners, and agricultural professionals with an 
                accessible tool to quickly identify plant diseases and receive treatment recommendations. 
                By leveraging cutting-edge AI and combining it with agricultural expertise, we hope to reduce 
                crop losses and promote sustainable farming practices worldwide.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-forest-700 dark:text-forest-400 mb-4">Academic Project</h2>
              <p className="text-gray-600 dark:text-gray-300">
                This application was developed as part of a 4-credit academic project by a team of 8 members. 
                The project demonstrates practical applications of machine learning in agriculture while 
                showcasing full-stack development skills including frontend design, backend development, 
                API integration, and deployment of machine learning models.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Key Components</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-forest-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Machine Learning Model</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Convolutional Neural Network trained on 10,000+ labeled images from the PlantVillage dataset and other sources, 
                capable of identifying 30+ plant diseases with high accuracy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Database className="h-8 w-8 text-forest-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Dataset & Training</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive dataset of plant disease images, manually curated and augmented to improve model generalization 
                and performance across different lighting conditions and environments.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Server className="h-8 w-8 text-forest-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Backend Infrastructure</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Robust API built with Node.js/Express to handle image processing, communicate with the ML model, and 
                integrate with external weather data providers for contextual analysis.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Technical Overview</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Component</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Technology</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Frontend</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">React, TypeScript, Tailwind CSS</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Responsive user interface with image upload, result display, weather data, and interactive map</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Backend</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Node.js, Express</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">RESTful API for handling image processing, ML model integration, and data storage</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">ML Model</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">TensorFlow/PyTorch, ResNet/MobileNet</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Deep learning model trained on 10,000+ plant disease images</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Weather Data</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">OpenWeatherMap API</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Real-time weather data integration for disease risk assessment</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Mapping</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">Leaflet.js/Google Maps API</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Interactive heatmap showing disease spread and hotspots</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">Deployment</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">VS Code</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">Local development environment with potential for cloud deployment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Project Team</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-forest-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">8-Member Academic Team</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This project was developed by a team of 8 members with diverse technical backgrounds and expertise areas. 
                The modular architecture allowed us to distribute work effectively across frontend, backend, ML model 
                development, API integration, UI/UX design, and deployment.
              </p>
              
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                  <span>Frontend specialists focused on creating an intuitive user interface</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                  <span>Backend developers designed the API architecture and database schema</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                  <span>Machine learning engineers developed and trained the plant disease detection model</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                  <span>Data scientists curated and processed the image dataset for training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                  <span>UI/UX designers ensured a cohesive and accessible user experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-forest-500 mr-2 flex-shrink-0" />
                  <span>Integration specialists connected external APIs and services</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
