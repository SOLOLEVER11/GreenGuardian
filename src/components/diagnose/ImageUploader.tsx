
import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageSelect }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      console.error('File must be an image');
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      console.error('File size should be less than 5MB');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onImageSelect(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeImage = () => {
    setPreview(null);
    setFileName(null);
  };

  return (
    <div className="w-full">
      <div 
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
          isDragging 
            ? 'border-forest-500 bg-forest-50 dark:bg-forest-900/20' 
            : 'border-gray-300 dark:border-gray-700 hover:border-forest-400 dark:hover:border-forest-600'
        } ${preview ? 'bg-gray-50 dark:bg-gray-800/50' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="space-y-3">
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-80 object-contain mx-auto rounded"
              />
              <button 
                onClick={removeImage}
                className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 truncate">
                {fileName}
              </p>
            </div>
          ) : (
            <>
              <div className="mx-auto flex justify-center">
                <Upload className="h-10 w-10 text-gray-400 dark:text-gray-500" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  Drag and drop your plant image here
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  or click to browse from your device
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Supports: JPG, PNG, WEBP (Max size: 5MB)
                </p>
              </div>
              <Button variant="outline" className="mt-4">
                <ImageIcon className="mr-2 h-4 w-4" />
                Browse Image
              </Button>
            </>
          )}
        </div>
        <input 
          type="file" 
          className="hidden" 
          accept="image/*" 
          onChange={handleChange}
          id="image-upload" 
        />
      </div>
      {preview && (
        <div className="mt-4">
          <Button 
            onClick={removeImage} 
            variant="outline" 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mr-2"
          >
            Change Image
          </Button>
        </div>
      )}
      <label htmlFor="image-upload" className="hidden">Upload image</label>
    </div>
  );
};

export default ImageUploader;
