
import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Import our new components
import LoadingState from './results/LoadingState';
import ErrorState from './results/ErrorState';
import DiagnosisDetails from './results/DiagnosisDetails';
import ProductsList from './results/ProductsList';
import ReferenceImage from './results/ReferenceImage';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export interface DiagnoseResult {
  diseaseName: string;
  confidence: number;
  description: string;
  treatment: string;
  imageUrl?: string;
  recommendedProducts?: Product[];
}

interface ResultsDisplayProps {
  result: DiagnoseResult | null;
  isLoading: boolean;
  error: string | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, isLoading, error }) => {
  if (isLoading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!result) {
    return null;
  }

  const handleBuyProduct = (product: Product) => {
    // Here we would integrate with an e-commerce system
    // For now, we'll just alert
    alert(`Added ${product.name} to cart - $${product.price}`);
  };

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
          <DiagnosisDetails result={result} />
          
          {result.recommendedProducts && (
            <ProductsList 
              products={result.recommendedProducts} 
              onBuyProduct={handleBuyProduct} 
            />
          )}

          {result.imageUrl && (
            <ReferenceImage 
              imageUrl={result.imageUrl} 
              diseaseName={result.diseaseName} 
            />
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
