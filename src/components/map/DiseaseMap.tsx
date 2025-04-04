
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

interface DiseaseMapProps {
  location?: { lat: number; lng: number } | null;
}

const DiseaseMap: React.FC<DiseaseMapProps> = ({ location }) => {
  return (
    <div className="w-full h-[600px] relative">
      <Card className="w-full h-full flex flex-col">
        <CardHeader className="bg-gray-100 dark:bg-gray-800/50">
          <CardTitle className="text-gray-800 dark:text-gray-200">Plant Disease Heatmap</CardTitle>
          <CardDescription>Geographic distribution of plant disease occurrences</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-0 relative bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <AlertCircle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">Map Component Placeholder</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                This is a placeholder for the interactive disease heatmap. In the actual implementation, 
                this would be replaced with a map visualization using Google Maps or Leaflet.js.
              </p>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-md text-sm text-gray-600 dark:text-gray-400 text-left">
                <pre className="whitespace-pre-wrap">
{`// Implementation notes:
// 1. Import a mapping library (Google Maps or Leaflet.js)
// 2. Initialize map with disease data points
// 3. Generate heatmap based on disease concentration
// 4. Add interactive elements for filtering by disease type
// 5. Implement zoom controls and location search`}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiseaseMap;
