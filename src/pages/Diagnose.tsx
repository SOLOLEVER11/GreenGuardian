
import React from 'react';
import Layout from '@/components/layout/Layout';
import ResultsDisplay from '@/components/diagnose/ResultsDisplay';
import DiagnoseHeader from '@/components/diagnose/DiagnoseHeader';
import ImageSection from '@/components/diagnose/ImageSection';
import RightSidebar from '@/components/diagnose/RightSidebar';
import { useDiagnoseLogic } from '@/hooks/useDiagnoseLogic';

const Diagnose = () => {
  const {
    selectedImage,
    selectedImageUrl,
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
  } = useDiagnoseLogic();

  return (
    <Layout>
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DiagnoseHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <ImageSection 
              onImageSelect={handleImageSelect}
              onTestImageSelect={handleTestImageSelect}
              handleAnalysis={analyzePlant}
              selectedImage={selectedImage}
              selectedImageUrl={selectedImageUrl}
              isAnalyzing={isAnalyzing}
              isModelLoading={isModelLoading}
            />
            
            {(result || isAnalyzing || error) && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {result ? 'Results' : isAnalyzing ? 'Analyzing' : 'Error'}
                </h2>
                <ResultsDisplay result={result} isLoading={isAnalyzing} error={error} />
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
            <RightSidebar 
              weatherData={weatherData} 
              isLoadingWeather={isLoadingWeather} 
              weatherError={weatherError} 
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Diagnose;
