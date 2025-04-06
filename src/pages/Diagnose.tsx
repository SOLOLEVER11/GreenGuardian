
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ImageUploader from '@/components/diagnose/ImageUploader';
import ResultsDisplay, { DiagnoseResult } from '@/components/diagnose/ResultsDisplay';
import WeatherData, { WeatherInfo } from '@/components/weather/WeatherData';
import TestImages from '@/components/diagnose/TestImages';
import Chatbot from '@/components/diagnose/Chatbot';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { testImageCategories } from "@/utils/testImageData";
import { useLanguage } from '@/contexts/LanguageContext';
import { modelService } from '@/utils/modelService';

const Diagnose = () => {
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

  return (
    <Layout>
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t('diagnose.title')}</h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            {t('diagnose.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="upload">{t('diagnose.upload')}</TabsTrigger>
                  <TabsTrigger value="sample">{t('diagnose.sample')}</TabsTrigger>
                </TabsList>
                <TabsContent value="upload">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('diagnose.upload')}</h2>
                  <ImageUploader onImageSelect={handleImageSelect} />
                </TabsContent>
                <TabsContent value="sample">
                  <TestImages onSelectTestImage={handleTestImageSelect} />
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 text-center">
                <Button 
                  onClick={analyzePlant}
                  disabled={(!selectedImage && !selectedImageUrl) || isAnalyzing}
                  className="w-full sm:w-auto"
                >
                  {isModelLoading ? t('diagnose.loading_model') : isAnalyzing ? t('diagnose.analyzing') : t('diagnose.analyze')}
                </Button>
              </div>
            </div>
            
            {(result || isAnalyzing || error) && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('diagnose.results')}</h2>
                <ResultsDisplay result={result} isLoading={isAnalyzing} error={error} />
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Diagnose;
