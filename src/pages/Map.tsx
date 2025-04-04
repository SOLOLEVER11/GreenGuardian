
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import DiseaseMap from '@/components/map/DiseaseMap';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, ChevronDown, Filter, MapPin, AlertTriangle } from 'lucide-react';

const diseases = [
  { id: 'all', name: 'All Diseases' },
  { id: 'late-blight', name: 'Late Blight' },
  { id: 'early-blight', name: 'Early Blight' },
  { id: 'powdery-mildew', name: 'Powdery Mildew' },
  { id: 'leaf-spot', name: 'Leaf Spot' },
  { id: 'rust', name: 'Rust' },
];

const MapPage = () => {
  const [selectedDisease, setSelectedDisease] = useState('all');
  const [timeRange, setTimeRange] = useState('month');

  return (
    <Layout>
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Plant Disease Map</h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Track the geographical spread of plant diseases and identify risk areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-3 items-center justify-between">
                  <div className="flex items-center">
                    <Filter className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Filter:</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Select value={selectedDisease} onValueChange={setSelectedDisease}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Disease" />
                      </SelectTrigger>
                      <SelectContent>
                        {diseases.map(disease => (
                          <SelectItem key={disease.id} value={disease.id}>
                            {disease.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Tabs value={timeRange} onValueChange={setTimeRange} className="w-auto">
                      <TabsList>
                        <TabsTrigger value="week" className="text-xs">
                          Week
                        </TabsTrigger>
                        <TabsTrigger value="month" className="text-xs">
                          Month
                        </TabsTrigger>
                        <TabsTrigger value="year" className="text-xs">
                          Year
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                    
                    <Button variant="outline" className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Date Range</span>
                      <ChevronDown className="h-4 w-4 ml-2" />
                    </Button>
                    
                    <Button variant="ghost" className="flex items-center" title="Use my current location">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>My Location</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
              
            <DiseaseMap />
          </div>
          
          <div>
            <Card>
              <CardContent className="p-4 space-y-4">
                <h3 className="font-medium text-lg text-gray-900 dark:text-gray-100">Map Legend</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">High Incidence</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Moderate Incidence</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Low Incidence</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Disease Statistics</h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <p>Total cases reported: <span className="font-medium text-gray-900 dark:text-gray-100">1,245</span></p>
                    <p>New cases this month: <span className="font-medium text-gray-900 dark:text-gray-100">78</span></p>
                    <p>Most affected crop: <span className="font-medium text-gray-900 dark:text-gray-100">Tomato</span></p>
                    <p>Highest risk areas: <span className="font-medium text-gray-900 dark:text-gray-100">Midwest Region</span></p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex items-start bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-md">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                    <p className="text-xs text-yellow-800 dark:text-yellow-200">
                      Disease risk is higher in areas with recent rain and warm temperatures. Check the weather forecast for your location.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MapPage;
