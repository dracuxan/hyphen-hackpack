import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, User2, Target, Award } from "lucide-react";

interface CustomerSegmentationProps {
  isDarkMode?: boolean;
}

export const CustomerSegmentation: React.FC<CustomerSegmentationProps> = ({ 
  isDarkMode = false 
}) => {
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""} mb-6`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Users className="mr-2 h-5 w-5 text-indigo-500" />
          Customer Clusters
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="h-[300px] flex items-center justify-center">
              <PieChart />
            </div>
            <div className="mt-4 flex justify-center space-x-2 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                <span>Teen Trendsetters (40%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                <span>Minimalists (25%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-1"></div>
                <span>Luxury Buyers (35%)</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-base font-medium mb-2">In-Depth Customer Segment Data</h3>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-lg">Teen Trendsetters</h4>
                      <p className="text-sm text-gray-600">Age range: 16-24 years</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">40% of customer base</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <h5 className="text-sm font-medium">Top 3 Purchased Items</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        <li>Graphic Tees & Crop Tops</li>
                        <li>Baggy Jeans & Cargo Pants</li>
                        <li>Platform Sneakers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Spending Behavior</h5>
                      <p className="text-sm text-gray-600 mt-1">Price-conscious, influenced by social media trends, responsive to flash sales</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Discount Response Rate</h5>
                      <p className="text-sm text-gray-600 mt-1">3x more purchases at 40%+ discounts</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Buying Frequency</h5>
                      <p className="text-sm text-gray-600 mt-1">4-5 purchases per month</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <h5 className="text-sm font-medium flex items-center">
                      <Target className="h-4 w-4 mr-1 text-blue-500" />
                      Predicted Future Trend
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">Likely to shift towards sustainable and upcycled fashion</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-lg">Minimalists</h4>
                      <p className="text-sm text-gray-600">Age range: 25-35 years</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">25% of customer base</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <h5 className="text-sm font-medium">Top 3 Purchased Items</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        <li>Neutral Color Tees</li>
                        <li>Oversized Blazers</li>
                        <li>Loafers & Classic Sneakers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Spending Behavior</h5>
                      <p className="text-sm text-gray-600 mt-1">Prefers quality over discounts, buys premium brands, values durability</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Discount Response Rate</h5>
                      <p className="text-sm text-gray-600 mt-1">Rarely buys from discounts, prefers limited-edition collections</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Buying Frequency</h5>
                      <p className="text-sm text-gray-600 mt-1">1-2 purchases per month</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <h5 className="text-sm font-medium flex items-center">
                      <Target className="h-4 w-4 mr-1 text-green-500" />
                      Predicted Future Trend
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">Likely to shift towards Capsule Wardrobes and ethical fashion</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-lg">Luxury Buyers</h4>
                      <p className="text-sm text-gray-600">Age range: 30-55 years</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">35% of customer base</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div>
                      <h5 className="text-sm font-medium">Top 3 Purchased Items</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                        <li>Designer Handbags & Accessories</li>
                        <li>Premium Formal Wear</li>
                        <li>Luxury Footwear</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Spending Behavior</h5>
                      <p className="text-sm text-gray-600 mt-1">Willing to pay premium prices, values exclusivity and brand reputation</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Discount Response Rate</h5>
                      <p className="text-sm text-gray-600 mt-1">Minimal response to discounts, values early access to collections</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">Buying Frequency</h5>
                      <p className="text-sm text-gray-600 mt-1">2-3 premium purchases per month</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <h5 className="text-sm font-medium flex items-center">
                      <Target className="h-4 w-4 mr-1 text-purple-500" />
                      Predicted Future Trend
                    </h5>
                    <p className="text-sm text-gray-600 mt-1">Increasing interest in sustainable luxury and personalized experiences</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerSegmentation;