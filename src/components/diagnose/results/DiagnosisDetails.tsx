
import React from 'react';
import { DiagnoseResult } from '../ResultsDisplay';

interface DiagnosisDetailsProps {
  result: DiagnoseResult;
}

const DiagnosisDetails: React.FC<DiagnosisDetailsProps> = ({ result }) => {
  return (
    <>
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
    </>
  );
};

export default DiagnosisDetails;
