
import React from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const LoadingState = () => {
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
};

export default LoadingState;
