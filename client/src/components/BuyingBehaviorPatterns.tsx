import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, TrendingUp, BarChart2, Percent, Calendar, Tag } from "lucide-react";

interface BuyingBehaviorPatternsProps {
  isDarkMode?: boolean;
}

export const BuyingBehaviorPatterns: React.FC<BuyingBehaviorPatternsProps> = ({ 
  isDarkMode = false 
}) => {
  const [productFilter, setProductFilter] = useState("all");
  const [genderFilter, setGenderFilter] = useState("all");
  const [frequencyFilter, setFrequencyFilter] = useState("all");
  
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""} mb-6`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <ShoppingBag className="mr-2 h-5 w-5 text-orange-500" />
          Buying Behavior Patterns
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Interactive Bar Graph - Most Purchased Items Per Segment */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-medium flex items-center">
                <BarChart2 className="h-4 w-4 mr-2 text-orange-500" />
                Most Purchased Items Per Segment
              </h3>
              <div className="flex space-x-2">
                <Button 
                  variant={genderFilter === "all" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setGenderFilter("all")}
                >
                  All Genders
                </Button>
                <Button 
                  variant={genderFilter === "female" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setGenderFilter("female")}
                >
                  Female
                </Button>
                <Button 
                  variant={genderFilter === "male" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setGenderFilter("male")}
                >
                  Male
                </Button>
                <Button 
                  variant={genderFilter === "unisex" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setGenderFilter("unisex")}
                >
                  Unisex
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <Badge 
                variant={productFilter === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setProductFilter("all")}
              >
                All Categories
              </Badge>
              <Badge 
                variant={productFilter === "clothing" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setProductFilter("clothing")}
              >
                Clothing
              </Badge>
              <Badge 
                variant={productFilter === "shoes" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setProductFilter("shoes")}
              >
                Shoes
              </Badge>
              <Badge 
                variant={productFilter === "outerwear" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setProductFilter("outerwear")}
              >
                Outerwear
              </Badge>
              <Badge 
                variant={productFilter === "accessories" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setProductFilter("accessories")}
              >
                Accessories
              </Badge>
            </div>
            
            <div className="flex space-x-2 mb-4">
              <Badge 
                variant={frequencyFilter === "all" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setFrequencyFilter("all")}
              >
                <Calendar className="h-3 w-3 mr-1" />
                All Frequencies
              </Badge>
              <Badge 
                variant={frequencyFilter === "weekly" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setFrequencyFilter("weekly")}
              >
                <Calendar className="h-3 w-3 mr-1" />
                Weekly
              </Badge>
              <Badge 
                variant={frequencyFilter === "monthly" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setFrequencyFilter("monthly")}
              >
                <Calendar className="h-3 w-3 mr-1" />
                Monthly
              </Badge>
              <Badge 
                variant={frequencyFilter === "seasonal" ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setFrequencyFilter("seasonal")}
              >
                <Calendar className="h-3 w-3 mr-1" />
                Seasonal
              </Badge>
            </div>
            
            <div className="h-[400px] bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
              <BarChart />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <h4 className="font-medium">Teen Trendsetters</h4>
                  </div>
                  <ul className="mt-2 text-sm">
                    <li className="flex justify-between">
                      <span>Graphic Tees</span>
                      <span className="font-medium">68%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Baggy Jeans</span>
                      <span className="font-medium">62%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Platform Sneakers</span>
                      <span className="font-medium">54%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <h4 className="font-medium">Minimalists</h4>
                  </div>
                  <ul className="mt-2 text-sm">
                    <li className="flex justify-between">
                      <span>Neutral Tees</span>
                      <span className="font-medium">75%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Oversized Blazers</span>
                      <span className="font-medium">58%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Loafers</span>
                      <span className="font-medium">42%</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded shadow-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <h4 className="font-medium">Luxury Buyers</h4>
                  </div>
                  <ul className="mt-2 text-sm">
                    <li className="flex justify-between">
                      <span>Designer Handbags</span>
                      <span className="font-medium">82%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Premium Formal Wear</span>
                      <span className="font-medium">68%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Luxury Footwear</span>
                      <span className="font-medium">65%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Discount & Promotion Response Insights */}
          <div>
            <h3 className="text-base font-medium flex items-center mb-4">
              <Percent className="h-4 w-4 mr-2 text-orange-500" />
              Discount & Promotion Response Insights
            </h3>
            
            <Tabs defaultValue="linegraph" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="linegraph">Discount Response</TabsTrigger>
                <TabsTrigger value="heatmap">Promotion Effectiveness</TabsTrigger>
              </TabsList>
              
              <TabsContent value="linegraph" className="space-y-4">
                <div className="h-[300px] bg-white p-4 rounded-lg border">
                  <LineChart />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <h4 className="font-medium">Teen Trendsetters</h4>
                    </div>
                    <p className="text-sm mt-2">Buy 3x more when discounts reach 40% off</p>
                    <p className="text-sm mt-1 text-gray-600">Highly responsive to flash sales</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <h4 className="font-medium">Minimalists</h4>
                    </div>
                    <p className="text-sm mt-2">Rarely buy from discounts</p>
                    <p className="text-sm mt-1 text-gray-600">Prefer limited-edition collections</p>
                  </div>
                  
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                      <h4 className="font-medium">Luxury Buyers</h4>
                    </div>
                    <p className="text-sm mt-2">Low response to general discounts</p>
                    <p className="text-sm mt-1 text-gray-600">Prefer exclusive member offers</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="heatmap" className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="p-2 border bg-gray-50">Promotion Type</th>
                        <th className="p-2 border bg-blue-50">Teen Trendsetters</th>
                        <th className="p-2 border bg-green-50">Minimalists</th>
                        <th className="p-2 border bg-purple-50">Luxury Buyers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border font-medium">Flash Sales</td>
                        <td className="p-2 border bg-green-300 text-center">High</td>
                        <td className="p-2 border bg-red-200 text-center">Low</td>
                        <td className="p-2 border bg-red-300 text-center">Very Low</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-medium">Limited Edition</td>
                        <td className="p-2 border bg-yellow-200 text-center">Medium</td>
                        <td className="p-2 border bg-green-300 text-center">High</td>
                        <td className="p-2 border bg-green-400 text-center">Very High</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-medium">BOGO Deals</td>
                        <td className="p-2 border bg-green-400 text-center">Very High</td>
                        <td className="p-2 border bg-yellow-200 text-center">Medium</td>
                        <td className="p-2 border bg-red-200 text-center">Low</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-medium">Loyalty Points</td>
                        <td className="p-2 border bg-yellow-200 text-center">Medium</td>
                        <td className="p-2 border bg-yellow-200 text-center">Medium</td>
                        <td className="p-2 border bg-green-300 text-center">High</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-medium">Free Shipping</td>
                        <td className="p-2 border bg-green-300 text-center">High</td>
                        <td className="p-2 border bg-green-200 text-center">Medium-High</td>
                        <td className="p-2 border bg-yellow-100 text-center">Low-Medium</td>
                      </tr>
                      <tr>
                        <td className="p-2 border font-medium">Early Access</td>
                        <td className="p-2 border bg-yellow-200 text-center">Medium</td>
                        <td className="p-2 border bg-green-200 text-center">Medium-High</td>
                        <td className="p-2 border bg-green-400 text-center">Very High</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-5 gap-1 mt-2 text-xs text-center">
                  <div className="p-1 bg-red-300">Very Low</div>
                  <div className="p-1 bg-red-200">Low</div>
                  <div className="p-1 bg-yellow-200">Medium</div>
                  <div className="p-1 bg-green-300">High</div>
                  <div className="p-1 bg-green-400">Very High</div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuyingBehaviorPatterns;