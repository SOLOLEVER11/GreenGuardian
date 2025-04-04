
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
      size="icon" 
      onClick={toggleLanguage} 
      className="text-gray-600 dark:text-gray-300"
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};

export default LanguageSwitcher;
