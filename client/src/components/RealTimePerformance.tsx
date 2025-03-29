import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { LineChart } from "@/components/ui/chart";
import { Timer, Activity, BarChart2, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react";

interface RealTimePerformanceProps {
  isDarkMode?: boolean;
}

export const RealTimePerformance: React.FC<RealTimePerformanceProps> = ({ 
  isDarkMode = false 
}) => {
  const [metrics, setMetrics] = useState({
    impressions: 3215624,
    ctr: 4.28,
    conversions: 52398,
    revenue: 7582450,
    lastUpdated: new Date()
  });
  
  const [updating, setUpdating] = useState(false);
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdating(true);
      
      setTimeout(() => {
        setMetrics(prev => {
          const randomFactor = Math.random() * 0.02 - 0.01; // Random number between -0.01 and 0.01
          return {
            impressions: Math.floor(prev.impressions * (1 + randomFactor)),
            ctr: +(prev.ctr * (1 + randomFactor * 0.5)).toFixed(2),
            conversions: Math.floor(prev.conversions * (1 + randomFactor)),
            revenue: Math.floor(prev.revenue * (1 + randomFactor)),
            lastUpdated: new Date()
          };
        });
        setUpdating(false);
      }, 800);
    }, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Format large numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  
  return (
    <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center">
            <Timer className="mr-2 h-5 w-5 text-blue-500" />
            Real-Time Performance
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className={`flex items-center ${updating ? 'animate-pulse bg-green-100' : ''}`}>
              <div className={`h-2 w-2 rounded-full mr-2 ${updating ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              {updating ? 'Updating...' : `Last updated: ${formatTime(metrics.lastUpdated)}`}
            </Badge>
            <RefreshCw className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-blue-50"}`}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">Impressions</p>
              <Activity className="h-4 w-4 text-blue-500" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(metrics.impressions)}</p>
            <div className="flex items-center text-green-600 text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +1.2% today
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-green-50"}`}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">Click-Through Rate</p>
              <BarChart2 className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold">{metrics.ctr}%</p>
            <div className="flex items-center text-green-600 text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +0.8% today
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-purple-50"}`}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">Conversions</p>
              <Timer className="h-4 w-4 text-purple-500" />
            </div>
            <p className="text-2xl font-bold">{formatNumber(metrics.conversions)}</p>
            <div className="flex items-center text-red-600 text-xs mt-1">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              -0.3% today
            </div>
          </div>
          
          <div className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-amber-50"}`}>
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-gray-600">Revenue</p>
              <Timer className="h-4 w-4 text-amber-500" />
            </div>
            <p className="text-2xl font-bold">₹{formatNumber(metrics.revenue)}</p>
            <div className="flex items-center text-green-600 text-xs mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +2.1% today
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium mb-2">24-Hour Trend</h3>
          <div className="h-[200px]">
            <LineChart />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium mb-3">Platform Performance (Live)</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Instagram</p>
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200 mr-2">Active</Badge>
                    <p className="text-sm font-medium">42%</p>
                  </div>
                </div>
                <Progress value={42} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Facebook</p>
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200 mr-2">Active</Badge>
                    <p className="text-sm font-medium">28%</p>
                  </div>
                </div>
                <Progress value={28} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Google Ads</p>
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200 mr-2">Active</Badge>
                    <p className="text-sm font-medium">18%</p>
                  </div>
                </div>
                <Progress value={18} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">TikTok</p>
                  <div className="flex items-center">
                    <Badge variant="outline" className="text-yellow-600 bg-yellow-50 border-yellow-200 mr-2">Paused</Badge>
                    <p className="text-sm font-medium">12%</p>
                  </div>
                </div>
                <Progress value={12} className="h-2" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-3">Current Activity</h3>
            <div className="space-y-3 max-h-[160px] overflow-y-auto pr-2">
              <div className="flex items-start gap-3 p-2 bg-blue-50 rounded">
                <div className="h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">252 new site visitors in the last 10 minutes</p>
                  <p className="text-xs text-gray-500">Primary source: Instagram</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 bg-green-50 rounded">
                <div className="h-8 w-8 bg-green-200 rounded-full flex items-center justify-center text-green-700">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">18 conversions in the last 5 minutes</p>
                  <p className="text-xs text-gray-500">Revenue: ₹27,540</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 bg-yellow-50 rounded">
                <div className="h-8 w-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700">
                  <Timer className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Campaign budget 75% utilized</p>
                  <p className="text-xs text-gray-500">Expected to last 6 more days</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-2 bg-purple-50 rounded">
                <div className="h-8 w-8 bg-purple-200 rounded-full flex items-center justify-center text-purple-700">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Swimwear product page traffic up 32%</p>
                  <p className="text-xs text-gray-500">Since promotion began at 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimePerformance;