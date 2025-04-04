
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { testImageCategories } from "@/utils/testImageData";

interface TestImagesProps {
  onSelectTestImage: (imageUrl: string, diseaseName: string) => void;
}

const TestImages: React.FC<TestImagesProps> = ({ onSelectTestImage }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Sample Test Images</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Select one of these sample images to test the disease prediction functionality.
        These samples represent common plant diseases from the New Plant Diseases Dataset.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {testImageCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40">
              <img 
                src={category.thumbnailUrl} 
                alt={category.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-3">
              <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100">{category.name}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">{category.description}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-2 text-forest-600 hover:text-forest-700 hover:bg-forest-50 dark:text-forest-400 dark:hover:bg-forest-900/20"
                onClick={() => onSelectTestImage(category.thumbnailUrl, category.name)}
              >
                Use this image
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-500">
        <p>
          <strong>Note:</strong> These are placeholder images. For the full dataset, download from 
          <a href="https://www.kaggle.com/datasets/vipoooool/new-plant-diseases-dataset" target="_blank" rel="noopener noreferrer" className="text-forest-600 dark:text-forest-400 ml-1 hover:underline">
            Kaggle: New Plant Diseases Dataset
          </a>
        </p>
      </div>
    </div>
  );
};

export default TestImages;
