import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart } from "@/components/ui/chart";
import { Award, ArrowUpRight, ArrowDownRight, Target } from "lucide-react";

interface CompetitorBenchmarkingProps {
  isDarkMode?: boolean;
}

export const CompetitorBenchmarking: React.FC<CompetitorBenchmarkingProps> = ({ 
  isDarkMode = false 
}) => {
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Target className="mr-2 h-5 w-5 text-indigo-500" />
          Competitor Benchmarking
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium mb-2 flex items-center">
              <Award className="h-4 w-4 mr-2 text-yellow-500" />
              Industry Performance Ranking
            </h3>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">CTR Ranking</p>
                <p className="text-xl font-bold">#2</p>
                <p className="text-xs text-gray-600">Top 15%</p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">Conversion Ranking</p>
                <p className="text-xl font-bold">#1</p>
                <p className="text-xs text-gray-600">Top 5%</p>
              </div>
              <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <p className="text-xs text-gray-600 mb-1">ROI Ranking</p>
                <p className="text-xl font-bold">#3</p>
                <p className="text-xs text-gray-600">Top 20%</p>
              </div>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Your Campaign vs. Industry Average</h4>
                <p className="text-xs bg-indigo-200 px-2 py-0.5 rounded">Fashion Retail</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <p className="text-sm">Click-Through Rate</p>
                      <div className="ml-2 flex items-center text-green-600 text-xs">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        +1.8%
                      </div>
                    </div>
                    <div className="text-sm font-medium flex items-center">
                      <span>4.28%</span>
                      <span className="text-gray-400 mx-1">vs</span>
                      <span>2.5%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded" style={{ width: '171%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">71% above industry average</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <p className="text-sm">Conversion Rate</p>
                      <div className="ml-2 flex items-center text-green-600 text-xs">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        +3.2%
                      </div>
                    </div>
                    <div className="text-sm font-medium flex items-center">
                      <span>8.5%</span>
                      <span className="text-gray-400 mx-1">vs</span>
                      <span>3.2%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded" style={{ width: '265%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">165% above industry average</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <p className="text-sm">Average Order Value</p>
                      <div className="ml-2 flex items-center text-red-600 text-xs">
                        <ArrowDownRight className="h-3 w-3 mr-1" />
                        -12%
                      </div>
                    </div>
                    <div className="text-sm font-medium flex items-center">
                      <span>₹1,250</span>
                      <span className="text-gray-400 mx-1">vs</span>
                      <span>₹1,420</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded" style={{ width: '88%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">12% below industry average</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <p className="text-sm">Return on Ad Spend</p>
                      <div className="ml-2 flex items-center text-green-600 text-xs">
                        <ArrowUpRight className="h-3 w-3 mr-1" />
                        +62%
                      </div>
                    </div>
                    <div className="text-sm font-medium flex items-center">
                      <span>287%</span>
                      <span className="text-gray-400 mx-1">vs</span>
                      <span>177%</span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded" style={{ width: '162%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">62% above industry average</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-2">Competitive Landscape</h3>
            <div className="h-[200px]">
              <BarChart />
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2 bg-indigo-50 rounded">
                <span className="font-medium block">Brand A</span>
                <span className="text-gray-600">Major competitor</span>
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <span className="font-medium block">Brand B</span>
                <span className="text-gray-600">Fast-growing</span>
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <span className="font-medium block">Brand C</span>
                <span className="text-gray-600">Premium segment</span>
              </div>
              <div className="p-2 bg-indigo-50 rounded">
                <span className="font-medium block">Brand D</span>
                <span className="text-gray-600">Budget segment</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
            <h4 className="text-sm font-medium flex items-center">
              <Award className="h-4 w-4 mr-2 text-yellow-600" />
              Competitive Edge
            </h4>
            <p className="text-sm mt-1">Your campaign's conversion rate is industry-leading. Consider highlighting this achievement in your marketing materials to build credibility.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorBenchmarking;