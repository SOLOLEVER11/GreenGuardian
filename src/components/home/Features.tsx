
import React from 'react';
import { Camera, CloudRain, Map, Cpu, AlertTriangle, Award } from 'lucide-react';

const features = [
  {
    name: 'AI-Powered Detection',
    description:
      'Our advanced machine learning algorithms can identify over 30 different plant diseases with high accuracy.',
    icon: Cpu,
  },
  {
    name: 'Instant Analysis',
    description:
      'Upload an image of your plant and receive an immediate diagnosis along with treatment recommendations.',
    icon: Camera,
  },
  {
    name: 'Weather Integration',
    description:
      'Get weather data relevant to plant health and see how climate conditions affect disease development.',
    icon: CloudRain,
  },
  {
    name: 'Disease Mapping',
    description:
      'View geographical spread of plant diseases through interactive heatmaps and track outbreaks.',
    icon: Map,
  },
  {
    name: 'Early Warning System',
    description:
      'Receive alerts about potential disease outbreaks in your area based on weather and reported cases.',
    icon: AlertTriangle,
  },
  {
    name: 'Research-Backed',
    description:
      'Built on a dataset of over 10,000 curated plant disease images and validated by agricultural experts.',
    icon: Award,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-forest-600 dark:text-forest-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Smart Plant Disease Detection
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
            Our platform combines cutting-edge AI with agricultural science to help you identify and manage plant diseases effectively.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative card-hover p-6 rounded-lg bg-white dark:bg-gray-800 shadow">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-forest-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
