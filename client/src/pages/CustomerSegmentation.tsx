import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CustomerSegmentation from "@/components/CustomerSegmentation";
import BuyingBehaviorPatterns from "@/components/BuyingBehaviorPatterns";
import PersonalizationInsights from "@/components/PersonalizationInsights";
import { 
  Moon, 
  Sun, 
  Bell, 
  BellOff,
  ChevronLeft,
  RefreshCw,
  Users,
  UserRound,
  ShoppingBag,
  ChevronsLeft,
  Home
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const CustomerSegmentationPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : ""}`}>
      <Header />
      
      <main className={`flex-grow py-8 px-4 ${isDarkMode ? "bg-gray-900 text-white" : ""}`}>
        <div className="container mx-auto max-w-6xl">
          {/* Settings Bar with Dark Mode & Notifications Toggle */}
          <div className="flex justify-end mb-4 space-x-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="notifications" className="cursor-pointer">
                {notificationsEnabled ? <Bell size={18} /> : <BellOff size={18} />}
              </Label>
              <Switch 
                id="notifications" 
                checked={notificationsEnabled}
                onCheckedChange={setNotificationsEnabled}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Label htmlFor="darkmode" className="cursor-pointer">
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </Label>
              <Switch 
                id="darkmode" 
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
            </div>
          </div>
          
          {/* Navigation and Title */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <a href="/campaign/details" className="flex items-center text-blue-600 hover:text-blue-800">
                  <ChevronsLeft className="h-5 w-5" />
                  <span>Back to Campaign</span>
                </a>
                <span className="text-gray-500">|</span>
                <a href="/" className="flex items-center text-blue-600 hover:text-blue-800">
                  <Home className="h-4 w-4 mr-1" />
                  <span>Home</span>
                </a>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <RefreshCw size={16} className="mr-2" />
                Refresh Data
              </Button>
            </div>
            
            <div className="mt-4">
              <h1 className="text-3xl font-bold font-serif flex items-center">
                <Users className="mr-3 h-8 w-8 text-blue-600" />
                Customer Segmentation & Buying Behavior
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Detailed insights into customer clusters, buying patterns, and personalized strategies for the Summer Fashion Sale campaign
              </p>
            </div>
          </div>
          
          {/* Stats Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-blue-50"}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <UserRound className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Customers</p>
                    <p className="text-2xl font-bold">42,385</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <span className="inline-block w-0 h-0 border-l-4 border-l-transparent border-b-[6px] border-r-4 border-r-transparent mr-1"></span>
                      +12% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-green-50"}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShoppingBag className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Order Value</p>
                    <p className="text-2xl font-bold">₹1,450</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <span className="inline-block w-0 h-0 border-l-4 border-l-transparent border-b-[6px] border-r-4 border-r-transparent mr-1"></span>
                      +8% from last month
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-purple-50"}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Segments Identified</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-blue-100 text-blue-800">Teen</Badge>
                      <Badge className="bg-green-100 text-green-800">Minimalist</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Luxury</Badge>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Based on 24 behavioral signals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Insights Sections */}
          <CustomerSegmentation isDarkMode={isDarkMode} />
          <BuyingBehaviorPatterns isDarkMode={isDarkMode} />
          <PersonalizationInsights isDarkMode={isDarkMode} />
          
          {/* Report Actions */}
          <div className="mt-8 flex justify-between items-center">
            <Button variant="outline" className="border-dashed">
              Export Segmentation Report
            </Button>
            
            <div className="flex gap-3">
              <Button variant="outline">Save Insights</Button>
              <Button className="bg-blue-600">Apply Recommendations</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomerSegmentationPage;