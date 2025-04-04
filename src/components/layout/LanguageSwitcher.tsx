
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Languages } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLanguage} 
      className="text-gray-600 dark:text-gray-300 flex items-center gap-1"
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
      <span className="ml-1 text-xs font-medium">{language === 'en' ? 'EN' : 'हि'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
