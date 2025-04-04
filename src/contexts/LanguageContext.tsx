
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi';

type Translations = {
  [key: string]: {
    en: string;
    hi: string;
  };
};

// Basic translations for common UI elements
const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    hi: 'होम'
  },
  'nav.diagnose': {
    en: 'Diagnose',
    hi: 'निदान'
  },
  'nav.map': {
    en: 'Disease Map',
    hi: 'रोग नक्शा'
  },
  'nav.about': {
    en: 'About',
    hi: 'परिचय'
  },
  
  // Diagnose page
  'diagnose.title': {
    en: 'Plant Disease Diagnosis',
    hi: 'पौधे का रोग निदान'
  },
  'diagnose.subtitle': {
    en: 'Upload a photo of your plant or select a test image to identify diseases and get treatment recommendations',
    hi: 'अपने पौधे की तस्वीर अपलोड करें या रोगों की पहचान करने और उपचार सिफारिशें प्राप्त करने के लिए एक परीक्षण छवि का चयन करें'
  },
  'diagnose.upload': {
    en: 'Upload Image',
    hi: 'छवि अपलोड करें'
  },
  'diagnose.sample': {
    en: 'Sample Images',
    hi: 'नमूना छवियां'
  },
  'diagnose.analyze': {
    en: 'Analyze Plant',
    hi: 'पौधे का विश्लेषण करें'
  },
  'diagnose.analyzing': {
    en: 'Analyzing...',
    hi: 'विश्लेषण कर रहा है...'
  },
  'diagnose.results': {
    en: 'Analysis Results',
    hi: 'विश्लेषण परिणाम'
  },
  'diagnose.weather': {
    en: 'Weather Conditions',
    hi: 'मौसम की स्थिति'
  },
  'diagnose.tips': {
    en: 'Tips',
    hi: 'सुझाव'
  },
  
  // Sample Test Images
  'test.title': {
    en: 'Sample Test Images',
    hi: 'नमूना परीक्षण छवियां'
  },
  'test.description': {
    en: 'Select one of these sample images to test the disease prediction functionality. These samples represent common plant diseases from the New Plant Diseases Dataset.',
    hi: 'रोग पूर्वानुमान कार्यक्षमता का परीक्षण करने के लिए इनमें से एक नमूना छवि का चयन करें। ये नमूने नए पौधों की बीमारी डेटासेट से सामान्य पौधों की बीमारियों का प्रतिनिधित्व करते हैं।'
  },
  'test.use': {
    en: 'Use this image',
    hi: 'इस छवि का उपयोग करें'
  },
  'test.note': {
    en: 'Note: These are placeholder images. For the full dataset, download from',
    hi: 'नोट: ये प्लेसहोल्डर छवियां हैं। पूर्ण डेटासेट के लिए, डाउनलोड करें'
  },
  
  // Chatbot
  'chatbot.title': {
    en: 'Farmer Assistant',
    hi: 'किसान सहायक'
  },
  'chatbot.placeholder': {
    en: 'Ask about plant diseases, treatments...',
    hi: 'पौधों की बीमारियों, उपचार के बारे में पूछें...'
  },
  'chatbot.greeting': {
    en: "Hello! I'm your plant disease assistant. How can I help you today?",
    hi: "नमस्ते! मैं आपका पौधा रोग सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?"
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
