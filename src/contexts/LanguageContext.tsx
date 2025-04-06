
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (language: 'en' | 'hi') => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navbar items
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
    hi: 'रोग मानचित्र'
  },
  'nav.about': {
    en: 'About Us',
    hi: 'हमारे बारे में'
  },
  
  // Diagnose Page
  'diagnose.title': {
    en: 'Plant Disease Diagnosis',
    hi: 'पौधों का रोग निदान'
  },
  'diagnose.subtitle': {
    en: 'Upload a photo of your plant and our AI will analyze it for diseases',
    hi: 'अपने पौधे की एक तस्वीर अपलोड करें और हमारा AI इसका रोगों के लिए विश्लेषण करेगा'
  },
  'diagnose.upload': {
    en: 'Upload Photo',
    hi: 'फोटो अपलोड करें'
  },
  'diagnose.sample': {
    en: 'Sample Images',
    hi: 'नमूना चित्र'
  },
  'diagnose.analyze': {
    en: 'Analyze Plant',
    hi: 'पौधे का विश्लेषण करें'
  },
  'diagnose.analyzing': {
    en: 'Analyzing...',
    hi: 'विश्लेषण हो रहा है...'
  },
  'diagnose.results': {
    en: 'Results',
    hi: 'परिणाम'
  },
  'diagnose.weather': {
    en: 'Local Weather',
    hi: 'स्थानीय मौसम'
  },
  'diagnose.tips': {
    en: 'Tips',
    hi: 'सुझाव'
  },
  'diagnose.tips.clear': {
    en: 'Use clear, well-lit images for best results',
    hi: 'सर्वोत्तम परिणामों के लिए स्पष्ट, अच्छी तरह से प्रकाशित छवियों का उपयोग करें'
  },
  'diagnose.tips.focus': {
    en: 'Focus on the affected area of the plant',
    hi: 'पौधे के प्रभावित क्षेत्र पर ध्यान केंद्रित करें'
  },
  'diagnose.tips.compare': {
    en: 'Include both healthy and diseased parts for comparison',
    hi: 'तुलना के लिए स्वस्थ और रोगग्रस्त दोनों भागों को शामिल करें'
  },
  'diagnose.tips.weather': {
    en: 'Weather conditions can influence disease development',
    hi: 'मौसम की स्थिति रोग विकास को प्रभावित कर सकती है'
  },
  'diagnose.tips.consult': {
    en: 'For critical cases, consult with a plant pathologist',
    hi: 'गंभीर मामलों के लिए, पौधे के रोगविज्ञानी से परामर्श करें'
  },
  
  // Sample Test Images
  'test.title': {
    en: 'Sample Test Images',
    hi: 'नमूना परीक्षण छवियाँ'
  },
  'test.description': {
    en: 'Select one of these sample images to test the disease detection system',
    hi: 'रोग का पता लगाने वाली प्रणाली का परीक्षण करने के लिए इनमें से किसी एक नमूना छवि का चयन करें'
  },
  'test.use': {
    en: 'Use this image',
    hi: 'इस छवि का उपयोग करें'
  },
  'test.note': {
    en: 'Image source:',
    hi: 'छवि स्रोत:'
  },
  
  // New Model Related Texts
  'diagnose.loading_model': {
    en: 'Loading Model...',
    hi: 'मॉडल लोड हो रहा है...'
  },
  'diagnose.select_image_error': {
    en: 'Please select an image first',
    hi: 'कृपया पहले एक छवि का चयन करें'
  },
  'diagnose.analysis_error': {
    en: 'Error analyzing the image. Please try again.',
    hi: 'छवि का विश्लेषण करने में त्रुटि। कृपया पुनः प्रयास करें।'
  },
  'diagnose.test_image_selected': {
    en: 'Test Image Selected',
    hi: 'परीक्षण छवि चयनित'
  },
  'diagnose.using': {
    en: 'Using',
    hi: 'उपयोग कर रहा है'
  },
  'diagnose.for_testing': {
    en: 'image for testing',
    hi: 'परीक्षण के लिए छवि'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  
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

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
