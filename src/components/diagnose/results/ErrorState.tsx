
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface ErrorStateProps {
  error: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
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
};

export default ErrorState;
