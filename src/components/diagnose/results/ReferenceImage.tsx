
import React from 'react';

interface ReferenceImageProps {
  imageUrl: string;
  diseaseName: string;
}

const ReferenceImage: React.FC<ReferenceImageProps> = ({ imageUrl, diseaseName }) => {
  if (!imageUrl) return null;
  
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Reference Image</h3>
      <div className="mt-2 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <img 
          src={imageUrl} 
          alt={`Reference image for ${diseaseName}`} 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default ReferenceImage;
