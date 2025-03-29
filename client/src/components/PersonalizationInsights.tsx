import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, TrendingUp, BarChart2, ArrowRight } from "lucide-react";

interface PersonalizationInsightsProps {
  isDarkMode?: boolean;
}

export const PersonalizationInsights: React.FC<PersonalizationInsightsProps> = ({ 
  isDarkMode = false 
}) => {
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
            Personalization Insights & Actions
          </CardTitle>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Brain className="h-3 w-3 mr-1" />
            AI Generated
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50 to-blue-100">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <h4 className="font-medium text-lg">Teen Trendsetters</h4>
                </div>
                <Badge className="bg-blue-200 text-blue-800">High ROI Potential</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-medium flex items-center text-blue-800">
                    <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                    Strategy Recommendation
                  </h5>
                  <p className="text-sm mt-1">Launch a TikTok challenge with influencer collaborations featuring summer fashion items</p>
                  
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-blue-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Reach</span>
                      <span>250K+ viewers</span>
                    </div>
                    <div className="bg-blue-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Engagement</span>
                      <span>15% increase</span>
                    </div>
                    <div className="bg-blue-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Conversion</span>
                      <span>4.2% rate</span>
                    </div>
                    <div className="bg-blue-50 p-1 rounded text-center">
                      <span className="block font-medium">Implementation</span>
                      <span>2-3 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-medium">Top Product Recommendations</h5>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-blue-500">•</div>
                      <span>Create bundled offers for graphic tees & cargo pants with 30% discount</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-blue-500">•</div>
                      <span>Launch limited-time flash sales on platform sneakers during peak social media hours (6-9 PM)</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Implement TikTok Challenge Campaign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-green-100">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <h4 className="font-medium text-lg">Minimalists</h4>
                </div>
                <Badge className="bg-green-200 text-green-800">Quality Focused</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-medium flex items-center text-green-800">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                    Strategy Recommendation
                  </h5>
                  <p className="text-sm mt-1">Introduce a sustainable Capsule Collection with emphasis on versatility and ethical production</p>
                  
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-green-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Reach</span>
                      <span>85% of segment</span>
                    </div>
                    <div className="bg-green-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Order Value</span>
                      <span>+28% increase</span>
                    </div>
                    <div className="bg-green-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Loyalty</span>
                      <span>32% repeat rate</span>
                    </div>
                    <div className="bg-green-50 p-1 rounded text-center">
                      <span className="block font-medium">Implementation</span>
                      <span>4-6 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-medium">Top Product Recommendations</h5>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-green-500">•</div>
                      <span>Develop a 10-piece capsule wardrobe collection with mix-and-match capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-green-500">•</div>
                      <span>Create detailed product stories highlighting sustainable production methods and durability</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Develop Capsule Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-purple-500 bg-gradient-to-r from-purple-50 to-purple-100">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <h4 className="font-medium text-lg">Luxury Buyers</h4>
                </div>
                <Badge className="bg-purple-200 text-purple-800">Premium Value</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-medium flex items-center text-purple-800">
                    <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                    Strategy Recommendation
                  </h5>
                  <p className="text-sm mt-1">Establish an exclusive membership program offering pre-launch access and personalized shopping experiences</p>
                  
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    <div className="bg-purple-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Adoption</span>
                      <span>65% of segment</span>
                    </div>
                    <div className="bg-purple-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Spend</span>
                      <span>+45% per member</span>
                    </div>
                    <div className="bg-purple-50 p-1 rounded text-center">
                      <span className="block font-medium">Est. Retention</span>
                      <span>85% annual rate</span>
                    </div>
                    <div className="bg-purple-50 p-1 rounded text-center">
                      <span className="block font-medium">Implementation</span>
                      <span>6-8 weeks</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-medium">Top Product Recommendations</h5>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-purple-500">•</div>
                      <span>Create limited-number designer collaborations with personalization options</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 text-purple-500">•</div>
                      <span>Develop curated personal shopping experiences with stylist consultations</span>
                    </li>
                  </ul>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Launch Exclusive Membership Program
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium flex items-center">
              <Brain className="h-4 w-4 mr-2 text-yellow-600" />
              AI-Powered Cross-Segment Opportunity
            </h4>
            <p className="text-sm mt-2">Our analysis has identified an underserved micro-trend across all segments: sustainable accessory collections. Consider developing a limited "Green Essentials" line with price points suitable for each segment to test market receptivity before larger investment.</p>
            <Button variant="outline" className="mt-3 border-yellow-300 text-yellow-800 hover:bg-yellow-100">
              Explore This Opportunity
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalizationInsights;