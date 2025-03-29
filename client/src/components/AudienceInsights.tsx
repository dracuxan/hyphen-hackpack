import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, BarChart } from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Users, UserRound, Map } from "lucide-react";

interface AudienceInsightsProps {
  isDarkMode?: boolean;
}

export const AudienceInsights: React.FC<AudienceInsightsProps> = ({ 
  isDarkMode = false 
}) => {
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Users className="mr-2 h-5 w-5 text-blue-500" />
          Audience Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="demographics" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="interests">Interests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demographics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Age Distribution</h3>
                <div className="h-[200px]">
                  <PieChart />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="text-center">
                    <p className="text-sm font-medium mb-1">Top Age Group</p>
                    <p className="text-xl font-bold">25-34</p>
                    <p className="text-xs text-gray-500">42% of audience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium mb-1">Gender Ratio</p>
                    <p className="text-xl font-bold">68:32</p>
                    <p className="text-xs text-gray-500">Female:Male</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Location Insights</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Mumbai</p>
                      <p className="text-sm font-medium">32%</p>
                    </div>
                    <Progress value={32} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Pune</p>
                      <p className="text-sm font-medium">24%</p>
                    </div>
                    <Progress value={24} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Nagpur</p>
                      <p className="text-sm font-medium">18%</p>
                    </div>
                    <Progress value={18} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Thane</p>
                      <p className="text-sm font-medium">14%</p>
                    </div>
                    <Progress value={14} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Other</p>
                      <p className="text-sm font-medium">12%</p>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center">
                    <UserRound className="h-4 w-4 mr-2 text-blue-500" />
                    <h4 className="text-sm font-medium">Key Audience Segments</h4>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Working Professionals</div>
                    <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">College Students</div>
                    <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Young Parents</div>
                    <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Fashion Enthusiasts</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="behavior">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Device Usage</h3>
                <div className="h-[200px]">
                  <PieChart />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500">Mobile</p>
                    <p className="font-medium">72%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Desktop</p>
                    <p className="font-medium">24%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Tablet</p>
                    <p className="font-medium">4%</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Shopping Behavior</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <div>
                      <p className="font-medium">Frequent Shoppers</p>
                      <p className="text-xs text-gray-600">Shop at least once a month</p>
                    </div>
                    <p className="font-medium">38%</p>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <div>
                      <p className="font-medium">Seasonal Shoppers</p>
                      <p className="text-xs text-gray-600">Shop during sales</p>
                    </div>
                    <p className="font-medium">42%</p>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded">
                    <div>
                      <p className="font-medium">One-time Shoppers</p>
                      <p className="text-xs text-gray-600">Single purchase</p>
                    </div>
                    <p className="font-medium">20%</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-sm font-medium mb-2">Peak Shopping Hours</h3>
                  <div className="h-[100px]">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="interests">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Top Interest Categories</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Fashion & Style</p>
                      <p className="text-sm font-medium">78%</p>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Beauty & Cosmetics</p>
                      <p className="text-sm font-medium">64%</p>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Travel & Lifestyle</p>
                      <p className="text-sm font-medium">52%</p>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Health & Fitness</p>
                      <p className="text-sm font-medium">45%</p>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm">Food & Dining</p>
                      <p className="text-sm font-medium">38%</p>
                    </div>
                    <Progress value={38} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Affinity Brands</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center p-2 bg-blue-50 rounded">
                    <div className="h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                      <span className="font-medium text-xs">Z</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Zara</p>
                      <p className="text-xs text-gray-600">72% affinity</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-blue-50 rounded">
                    <div className="h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                      <span className="font-medium text-xs">H</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">H&M</p>
                      <p className="text-xs text-gray-600">68% affinity</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-blue-50 rounded">
                    <div className="h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                      <span className="font-medium text-xs">N</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Nike</p>
                      <p className="text-xs text-gray-600">62% affinity</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 bg-blue-50 rounded">
                    <div className="h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                      <span className="font-medium text-xs">A</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">Adidas</p>
                      <p className="text-xs text-gray-600">58% affinity</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="text-sm font-medium mb-1 flex items-center">
                    <Map className="h-4 w-4 mr-2 text-yellow-600" />
                    Geo-based Interest Insight
                  </h4>
                  <p className="text-sm">Mumbai audiences show 34% higher interest in premium designer brands compared to other regions.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AudienceInsights;