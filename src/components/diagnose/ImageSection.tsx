
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import ImageUploader from './ImageUploader';
import TestImages from './TestImages';

interface ImageSectionProps {
  onImageSelect: (file: File) => void;
  onTestImageSelect: (imageUrl: string, diseaseName: string) => void;
  handleAnalysis: () => void;
  selectedImage: File | null;
  selectedImageUrl: string | null;
  isAnalyzing: boolean;
  isModelLoading: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  onImageSelect,
  onTestImageSelect,
  handleAnalysis,
  selectedImage,
  selectedImageUrl,
  isAnalyzing,
  isModelLoading
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="upload">{t('diagnose.upload')}</TabsTrigger>
          <TabsTrigger value="sample">{t('diagnose.sample')}</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{t('diagnose.upload')}</h2>
          <ImageUploader onImageSelect={onImageSelect} />
        </TabsContent>
        <TabsContent value="sample">
          <TestImages onSelectTestImage={onTestImageSelect} />
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 text-center">
        <Button 
          onClick={handleAnalysis}
          disabled={(!selectedImage && !selectedImageUrl) || isAnalyzing}
          className="w-full sm:w-auto"
        >
          {isModelLoading ? t('diagnose.loading_model') : isAnalyzing ? t('diagnose.analyzing') : t('diagnose.analyze')}
        </Button>
      </div>
    </div>
  );
};

export default ImageSection;
