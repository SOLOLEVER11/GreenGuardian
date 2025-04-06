
import { useState } from 'react';
import { DiagnoseResult } from '@/components/diagnose/ResultsDisplay';
import { WeatherInfo } from '@/components/weather/WeatherData';
import { testImageCategories } from "@/utils/testImageData";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';
import { modelService } from '@/utils/modelService';

export const useDiagnoseLogic = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [selectedDiseaseName, setSelectedDiseaseName] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DiagnoseResult | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherInfo | null>(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);
  const { toast } = useToast();

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setSelectedImageUrl(URL.createObjectURL(file));
    setSelectedDiseaseName(null);
    setResult(null);
    setError(null);
  };

  const handleTestImageSelect = (imageUrl: string, diseaseName: string) => {
    setSelectedImageUrl(imageUrl);
    setSelectedDiseaseName(diseaseName);
    setSelectedImage(null);
    setResult(null);
    setError(null);
    
    toast({
      title: t('diagnose.test_image_selected'),
      description: `${t('diagnose.using')} ${diseaseName} ${t('diagnose.for_testing')}`,
    });
  };

  const analyzePlant = async () => {
    if (!selectedImage && !selectedImageUrl) {
      setError(t('diagnose.select_image_error'));
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setIsModelLoading(true);

    try {
      let resultData: DiagnoseResult;
      
      // Load model first
      await modelService.loadModel();
      
      if (selectedDiseaseName) {
        // If using a test image, we still use the model for prediction
        // but we know the expected disease category
        const selectedCategory = testImageCategories.find(category => 
          category.name === selectedDiseaseName
        );
        
        // Predict using the model
        const prediction = await modelService.predictDisease(selectedImageUrl!);
        
        resultData = {
          diseaseName: prediction.diseaseName,
          confidence: prediction.confidence,
          description: prediction.description,
          treatment: prediction.treatment,
          imageUrl: selectedImageUrl || undefined,
          recommendedProducts: selectedCategory?.products || []
        };
      } else {
        // For user-uploaded images
        const prediction = await modelService.predictDisease(selectedImageUrl!);
        
        // Search for products that might be related to this plant/disease
        const relatedCategory = testImageCategories.find(category => 
          prediction.diseaseName.toLowerCase().includes(category.name.toLowerCase())
        );
        
        resultData = {
          diseaseName: prediction.diseaseName,
          confidence: prediction.confidence,
          description: prediction.description,
          treatment: prediction.treatment,
          imageUrl: selectedImageUrl || undefined,
          recommendedProducts: relatedCategory?.products || []
        };
      }
      
      setResult(resultData);
      setIsAnalyzing(false);
      fetchWeatherData();
      
    } catch (error) {
      console.error('Error analyzing plant:', error);
      setError(t('diagnose.analysis_error'));
      setIsAnalyzing(false);
    } finally {
      setIsModelLoading(false);
    }
  };

  const fetchWeatherData = () => {
    setIsLoadingWeather(true);
    setWeatherError(null);

    // Mock weather data fetch
    // In a real implementation, this would call a weather API like OpenWeatherMap
    setTimeout(() => {
      // Simulate a successful response
      const mockWeatherData: WeatherInfo = {
        location: "Sample Location",
        temperature: 27,
        humidity: 75,
        windSpeed: 12,
        conditions: "Partly Cloudy",
        precipitationChance: 35,
        icon: "cloud"
      };
      
      setWeatherData(mockWeatherData);
      setIsLoadingWeather(false);
    }, 1500);
  };

  return {
    selectedImage,
    selectedImageUrl,
    selectedDiseaseName,
    isAnalyzing,
    error,
    result,
    weatherData,
    isLoadingWeather,
    weatherError,
    isModelLoading,
    handleImageSelect,
    handleTestImageSelect,
    analyzePlant,
  };
};
