
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ImageUploader from '@/components/diagnose/ImageUploader';
import ResultsDisplay, { DiagnoseResult } from '@/components/diagnose/ResultsDisplay';
import WeatherData, { WeatherInfo } from '@/components/weather/WeatherData';
import { Button } from '@/components/ui/button';

const Diagnose = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DiagnoseResult | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherInfo | null>(null);
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setResult(null);
    setError(null);
  };

  const analyzePlant = () => {
    if (!selectedImage) {
      setError("Please select an image first");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    // Mock API call for demonstration purposes
    // In a real implementation, this would be a call to your ML backend
    setTimeout(() => {
      // Simulate a successful response
      const mockResult: DiagnoseResult = {
        diseaseName: "Tomato Late Blight",
        confidence: 92,
        description: "Late blight is a potentially devastating disease of tomato and potato, infecting leaves, stems, and fruits. The disease spreads quickly in cool, wet weather.",
        treatment: "Remove and destroy infected plant parts. Apply copper-based fungicide as a preventative measure. Ensure good air circulation by proper spacing between plants. Water at the base of plants to keep foliage dry.",
        imageUrl: "https://placeholder-image-url.com/late-blight.jpg"
      };
      
      setResult(mockResult);
      setIsAnalyzing(false);
      fetchWeatherData();
    }, 2500);
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Plant Disease Diagnosis</h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Upload a photo of your plant to identify diseases and get treatment recommendations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Upload Plant Image</h2>
              <ImageUploader onImageSelect={handleImageSelect} />
              
              <div className="mt-6 text-center">
                <Button 
                  onClick={analyzePlant}
                  disabled={!selectedImage || isAnalyzing}
                  className="w-full sm:w-auto"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Plant'}
                </Button>
              </div>
            </div>
            
            {(result || isAnalyzing || error) && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Analysis Results</h2>
                <ResultsDisplay result={result} isLoading={isAnalyzing} error={error} />
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Weather Conditions</h2>
              <WeatherData weatherData={weatherData} isLoading={isLoadingWeather} error={weatherError} />
              
              <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Tips</h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    Use clear, well-lit images for best results
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    Focus on the affected area of the plant
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    Include both healthy and diseased parts for comparison
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    Weather conditions can influence disease development
                  </li>
                  <li className="flex items-start">
                    <span className="text-forest-500 mr-2">•</span>
                    For critical cases, consult with a plant pathologist
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
