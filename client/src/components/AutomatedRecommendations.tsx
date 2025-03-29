import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  ChevronRight, 
  ArrowUpRight, 
  Target, 
  BarChart2, 
  ArrowRight, 
  Users, 
  Calendar
} from "lucide-react";

interface AutomatedRecommendationsProps {
  isDarkMode?: boolean;
}

export const AutomatedRecommendations: React.FC<AutomatedRecommendationsProps> = ({ 
  isDarkMode = false 
}) => {
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Brain className="mr-2 h-5 w-5 text-purple-500" />
            AI-Powered Recommendations
          </CardTitle>
          <Badge variant="outline" className="font-normal">
            5 New Suggestions
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-medium flex items-center">
                <Target className="h-4 w-4 mr-2 text-purple-600" />
                High-Impact Opportunities
              </h3>
              <Badge className="bg-purple-200 text-purple-800 hover:bg-purple-300">
                Priority
              </Badge>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="flex justify-between">
                  <h4 className="font-medium">Increase Budget for Instagram Stories</h4>
                  <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +32% ROI Potential
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Instagram Stories are generating 32% higher engagement than other ad placements. Reallocating 15% of your budget from Facebook feed ads could yield ~₹125,000 additional revenue.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-1"></div>
                    <span className="text-xs text-gray-500">98% Confidence</span>
                  </div>
                  <Button variant="link" size="sm" className="text-purple-600 p-0">
                    Apply Recommendation <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="flex justify-between">
                  <h4 className="font-medium">Optimize for Mobile Conversion</h4>
                  <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +24% Conversion Potential
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Mobile checkout has a 34% higher abandonment rate than desktop. Implementing a streamlined mobile checkout could recover an estimated 1,200+ lost conversions.
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-1"></div>
                    <span className="text-xs text-gray-500">92% Confidence</span>
                  </div>
                  <Button variant="link" size="sm" className="text-purple-600 p-0">
                    View Details <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-base font-medium flex items-center mb-3">
                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                Timing Optimizations
              </h3>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-sm">Best Time to Post</h4>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex">
                      <Badge className="bg-blue-100 text-blue-800 mr-1">
                        Wed
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 mr-1">
                        Thu
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800">
                        Sat
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">6PM - 8PM</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Posts during these times have 28% higher engagement
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-sm">Ad Schedule Recommendation</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Increase bid adjustments during peak shopping hours
                  </p>
                  <Progress value={65} className="h-1 mt-2" />
                  <div className="flex justify-between text-xs mt-1">
                    <span>Weekdays: 7PM-11PM</span>
                    <span>+65% Budget</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-base font-medium flex items-center mb-3">
                <BarChart2 className="h-4 w-4 mr-2 text-green-600" />
                Creative Optimizations
              </h3>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-sm">Top Performing Ad Copy</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">
                      "Limited Time"
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      "Exclusive"
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      "Free Shipping"
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Ads containing these phrases convert 47% better
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-sm">Image Content Analysis</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Product images with models outperform flat lays by 62%
                  </p>
                  <Button variant="link" size="sm" className="text-green-600 p-0 mt-2">
                    View Creative Report <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-base font-medium flex items-center mb-3">
              <Users className="h-4 w-4 mr-2 text-gray-600" />
              Audience Insights & Recommendations
            </h3>
            
            <div className="space-y-3">
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="flex justify-between">
                  <h4 className="font-medium">Untapped Audience Segment</h4>
                  <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-200">
                    Market Opportunity
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  College students (18-22) in Mumbai are showing high interest but low conversion. Creating targeted messaging for this segment could unlock ~₹85,000 additional revenue.
                </p>
                <Button variant="outline" size="sm" className="mt-2">
                  Create Segment
                </Button>
              </div>
              
              <div className="bg-white p-3 rounded shadow-sm">
                <div className="flex justify-between">
                  <h4 className="font-medium">Loyalty Program Suggestion</h4>
                  <Badge variant="outline" className="text-purple-600 bg-purple-50 border-purple-200">
                    Customer Retention
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  32% of customers make a second purchase within 30 days. A loyalty discount could increase this to ~45% based on industry benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutomatedRecommendations;