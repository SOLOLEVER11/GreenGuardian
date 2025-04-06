
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const DiagnoseHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('diagnose.title')}</h1>
      <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
        {t('diagnose.subtitle')}
      </p>
    </div>
  );
};

export default DiagnoseHeader;
