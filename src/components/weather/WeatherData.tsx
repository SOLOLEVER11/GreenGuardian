
import React from 'react';
import { Cloud, Droplets, Wind, Thermometer, CloudLightning, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export interface WeatherInfo {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  conditions: string;
  precipitationChance: number;
  icon: string;
}

interface WeatherDataProps {
  weatherData: WeatherInfo | null;
  isLoading: boolean;
  error: string | null;
}

const WeatherData: React.FC<WeatherDataProps> = ({ weatherData, isLoading, error }) => {
  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-gray-700 dark:text-gray-300">Loading Weather Data...</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={60} className="w-full" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
            <AlertCircle className="mr-2 h-5 w-5" />
            Weather Data Unavailable
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!weatherData) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Weather Information</CardTitle>
          <CardDescription>No weather data available yet</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">
            Please allow location access or enter a location to view weather data relevant to plant health.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Get appropriate risk level based on conditions
  const getDiseaseRisk = () => {
    let risk = 'Low';
    let color = 'text-green-600 dark:text-green-400';
    
    if (weatherData.humidity > 80 && weatherData.temperature > 25) {
      risk = 'High';
      color = 'text-red-600 dark:text-red-400';
    } else if (weatherData.humidity > 70 || weatherData.temperature > 30) {
      risk = 'Medium';
      color = 'text-yellow-600 dark:text-yellow-400';
    }
    
    return { risk, color };
  };
  
  const riskAssessment = getDiseaseRisk();

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-b border-blue-100 dark:border-blue-800/30">
        <CardTitle className="flex justify-between items-center">
          <span className="text-blue-700 dark:text-blue-300">Weather Conditions</span>
          <span className="text-gray-700 dark:text-gray-300">{weatherData.location}</span>
        </CardTitle>
        <CardDescription className="text-blue-600/70 dark:text-blue-400/70">
          Weather factors affecting plant health
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <Thermometer className="h-7 w-7 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{weatherData.temperature}°C</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Droplets className="h-7 w-7 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{weatherData.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Wind className="h-7 w-7 text-gray-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{weatherData.windSpeed} km/h</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Cloud className="h-7 w-7 text-indigo-500" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Conditions</p>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">{weatherData.conditions}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Precipitation Chance</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{weatherData.precipitationChance}%</span>
          </div>
          <Progress value={weatherData.precipitationChance} className="w-full" />
        </div>
        
        <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CloudLightning className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Disease Risk Assessment</span>
            </div>
            <span className={`text-sm font-bold ${riskAssessment.color}`}>{riskAssessment.risk}</span>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Current conditions {riskAssessment.risk === 'High' ? 'are favorable' : 'are not highly favorable'} for plant disease development.
            {riskAssessment.risk === 'High' && ' Consider preventive measures.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherData;
