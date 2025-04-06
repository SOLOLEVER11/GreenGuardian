
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import WeatherData, { WeatherInfo } from '@/components/weather/WeatherData';
import Chatbot from '@/components/diagnose/Chatbot';

interface RightSidebarProps {
  weatherData: WeatherInfo | null;
  isLoadingWeather: boolean;
  weatherError: string | null;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ weatherData, isLoadingWeather, weatherError }) => {
  const { t } = useLanguage();
  
  return (
    <div className="sticky top-8 space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('diagnose.weather')}</h2>
      <WeatherData weatherData={weatherData} isLoading={isLoadingWeather} error={weatherError} />
      
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow">
        <Chatbot />
      </div>
      
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('diagnose.tips')}</h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
          <li className="flex items-start">
            <span className="text-forest-500 mr-2">•</span>
            {t('diagnose.tips.clear')}
          </li>
          <li className="flex items-start">
            <span className="text-forest-500 mr-2">•</span>
            {t('diagnose.tips.focus')}
          </li>
          <li className="flex items-start">
            <span className="text-forest-500 mr-2">•</span>
            {t('diagnose.tips.compare')}
          </li>
          <li className="flex items-start">
            <span className="text-forest-500 mr-2">•</span>
            {t('diagnose.tips.weather')}
          </li>
          <li className="flex items-start">
            <span className="text-forest-500 mr-2">•</span>
            {t('diagnose.tips.consult')}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
