
import React from 'react';
import { AlertCircle, ThumbsUp, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export interface DiagnoseResult {
  diseaseName: string;
  confidence: number;
  description: string;
  treatment: string;
  imageUrl?: string;
}

interface ResultsDisplayProps {
  result: DiagnoseResult | null;
  isLoading: boolean;
  error: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, isLoading, error }) => {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center text-gray-700 dark:text-gray-300">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Analyzing your plant image...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">Please wait while our AI analyzes your plant image.</p>
            <Progress value={75} className="w-full" />
            <p className="text-sm text-gray-500 dark:text-gray-500">This may take a few seconds</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full border-red-200 dark:border-red-900">
        <CardHeader>
          <CardTitle className="flex items-center text-red-600 dark:text-red-400">
            <AlertCircle className="mr-2 h-5 w-5" />
            Error
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-800 dark:text-gray-200">{error}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-600 dark:text-gray-400">Please try again with a different image or check your connection.</p>
        </CardFooter>
      </Card>
    );
  }

  if (!result) {
    return null;
  }

  return (
    <Card className="w-full border-forest-200 dark:border-forest-900/50 animate-fade-in">
      <CardHeader className="bg-forest-50 dark:bg-forest-900/20 border-b border-forest-100 dark:border-forest-800">
        <CardTitle className="text-forest-700 dark:text-forest-300 flex items-center">
          <ThumbsUp className="mr-2 h-5 w-5" />
          Diagnosis Results
        </CardTitle>
        <CardDescription>
          Our AI-powered analysis of your plant image
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Detected Issue</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-lg font-semibold text-forest-600 dark:text-forest-400">
                {result.diseaseName}
              </p>
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                  Confidence:
                </span>
                <span className={`text-sm font-semibold ${
                  result.confidence > 80 
                    ? 'text-green-600 dark:text-green-400' 
                    : result.confidence > 60 
                    ? 'text-yellow-600 dark:text-yellow-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {result.confidence}%
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Description</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {result.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recommended Treatment</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {result.treatment}
            </p>
          </div>

          {result.imageUrl && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Reference Image</h3>
              <div className="mt-2 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <img 
                  src={result.imageUrl} 
                  alt={`Reference image for ${result.diseaseName}`} 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is an AI-based prediction. For critical cases, please consult with a plant pathologist.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ResultsDisplay;
