
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// These would be replaced with your actual test images after downloading from Kaggle
// Sample structure from the New Plant Diseases Dataset
const testImageCategories = [
  {
    name: "Apple - Apple Scab",
    description: "Fungal disease causing dark, scabby lesions on apple leaves and fruit",
    thumbnailUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Tomato - Late Blight",
    description: "Causes water-soaked lesions on leaves that eventually turn brown",
    thumbnailUrl: "https://images.unsplash.com/photo-1592393316318-fca5a83ddb95?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Corn - Common Rust",
    description: "Characterized by small, rusty-colored pustules on corn leaves",
    thumbnailUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Grape - Black Rot",
    description: "Causes brown circular lesions on leaves and black, shriveled fruit",
    thumbnailUrl: "https://images.unsplash.com/photo-1602330102257-04c00af50c1a?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Potato - Early Blight",
    description: "Causes small, dark spots with concentric rings on potato leaves",
    thumbnailUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Healthy Plant",
    description: "Example of a healthy plant leaf for comparison",
    thumbnailUrl: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?q=80&w=300&auto=format&fit=crop",
  }
];

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
