
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to protect your plants?</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with agricultural expertise to help you identify and manage plant diseases effectively.
          </p>
          <div className="mt-8">
            <a href="/diagnose" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-forest-600 hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500">
              Get Started Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
