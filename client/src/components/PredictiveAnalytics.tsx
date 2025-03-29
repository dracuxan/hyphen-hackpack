import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, AreaChart } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Brain, 
  ArrowUpRight, 
  LineChart as LineChartIcon, 
  Zap,
  Calendar,
  ArrowRight
} from "lucide-react";

interface PredictiveAnalyticsProps {
  isDarkMode?: boolean;
}

export const PredictiveAnalytics: React.FC<PredictiveAnalyticsProps> = ({ 
  isDarkMode = false 
}) => {
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Brain className="mr-2 h-5 w-5 text-teal-500" />
            Predictive Analytics
          </CardTitle>
          <Badge variant="outline" className="bg-teal-50 text-teal-700 border-teal-200">
            AI Powered
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="forecast" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="forecast">Performance Forecast</TabsTrigger>
            <TabsTrigger value="scenario">Scenario Analysis</TabsTrigger>
            <TabsTrigger value="anomaly">Anomaly Detection</TabsTrigger>
          </TabsList>
          
          <TabsContent value="forecast" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-medium">30-Day Forecast</h3>
              <div className="flex space-x-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Calendar className="h-3 w-3 mr-1" />
                  30 Days
                </Badge>
                <Badge variant="outline">
                  <Calendar className="h-3 w-3 mr-1" />
                  90 Days
                </Badge>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="text-sm text-gray-600">Projected CTR</p>
                  <div className="flex items-center mt-1">
                    <p className="text-xl font-bold">4.62%</p>
                    <span className="ml-2 text-green-600 text-xs flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +7.9%
                    </span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="text-sm text-gray-600">Est. Conversions</p>
                  <div className="flex items-center mt-1">
                    <p className="text-xl font-bold">71.2K</p>
                    <span className="ml-2 text-green-600 text-xs flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +35.8%
                    </span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="text-sm text-gray-600">Proj. Revenue</p>
                  <div className="flex items-center mt-1">
                    <p className="text-xl font-bold">₹10.8M</p>
                    <span className="ml-2 text-green-600 text-xs flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +42.4%
                    </span>
                  </div>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <p className="text-sm text-gray-600">Est. ROI</p>
                  <div className="flex items-center mt-1">
                    <p className="text-xl font-bold">312%</p>
                    <span className="ml-2 text-green-600 text-xs flex items-center">
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                      +8.7%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="h-[200px] bg-white p-4 rounded shadow-sm">
                <LineChart />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center col-span-2">
                  <div className="p-2 bg-teal-100 rounded-full mr-3">
                    <Zap className="h-4 w-4 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">AI-Generated Insight</h4>
                    <p className="text-sm text-gray-600">Based on current trends, your campaign is projected to exceed revenue targets by 18% if current engagement levels are maintained.</p>
                  </div>
                </div>
                <div>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Adjust Forecast Parameters
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="scenario" className="space-y-4">
            <div>
              <h3 className="text-base font-medium mb-3">What-If Scenarios</h3>
              <div className="space-y-4">
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">Scenario 1: Increased Ad Spend</h4>
                    <Badge className="bg-teal-100 text-teal-800">Recommended</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span>Current daily budget:</span>
                      <span className="font-medium">₹35,000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Proposed daily budget:</span>
                      <span className="font-medium">₹50,000 (+42.8%)</span>
                    </div>
                    <div className="h-[100px]">
                      <AreaChart />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Projected outcome:</span>
                      <span className="font-medium text-green-600">+68% Conversions, +52% Revenue</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Detailed Projection
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
                
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium mb-3">Scenario 2: Demographic Targeting Shift</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-sm">
                      <span>Current primary audience:</span>
                      <span className="font-medium">Ages 18-24 (62% of budget)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Proposed audience shift:</span>
                      <span className="font-medium">Add Ages 35-44 (+25% of budget)</span>
                    </div>
                    <div className="h-[100px]">
                      <AreaChart />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Projected outcome:</span>
                      <span className="font-medium text-amber-600">+35% AOV, -12% CTR, +18% Revenue</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Detailed Projection
                    <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="anomaly" className="space-y-4">
            <div>
              <h3 className="text-base font-medium mb-3">Anomaly Detection & Prevention</h3>
              <div className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
                <h4 className="font-medium mb-2">Detected Patterns</h4>
                <div className="h-[180px]">
                  <LineChart />
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  AI has detected abnormal engagement drop patterns on weekend evenings (8PM-11PM)
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                  <h4 className="font-medium flex items-center text-red-800">
                    <TrendingUp className="h-4 w-4 mr-2 text-red-600" />
                    Detected Risk Pattern
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-red-500">•</div>
                      <span>Instagram ad performance drops by average 28% on Sunday evenings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-red-500">•</div>
                      <span>Competitive ad saturation increases by 47% during these times</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-red-500">•</div>
                      <span>Historical data shows consistent pattern over 4 consecutive weeks</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                  <h4 className="font-medium flex items-center text-green-800">
                    <Brain className="h-4 w-4 mr-2 text-green-600" />
                    Preventive Recommendations
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-green-500">•</div>
                      <span>Reduce Instagram budget allocation by 20% during 8PM-11PM on Sundays</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-green-500">•</div>
                      <span>Increase bid adjustments for Monday morning (8AM-11AM) by 15%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-green-500">•</div>
                      <span>Test alternative creative sets during high competition periods</span>
                    </li>
                  </ul>
                  <Button className="mt-3 bg-green-600 hover:bg-green-700 text-white">
                    Apply Recommendations
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PredictiveAnalytics;