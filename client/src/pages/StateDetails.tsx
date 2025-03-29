import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AreaChart, BarChart, LineChart, PieChart } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";

import RealTimePerformance from "@/components/RealTimePerformance";
import AutomatedRecommendations from "@/components/AutomatedRecommendations";
import PredictiveAnalytics from "@/components/PredictiveAnalytics";
import AudienceInsights from "@/components/AudienceInsights";
import CompetitorBenchmarking from "@/components/CompetitorBenchmarking";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  ChevronRight, 
  BarChart2, 
  LineChart as LineChartIcon, 
  PieChart as PieChartIcon,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  BellOff,
  Calendar,
  Filter,
  Eye,
  Moon,
  Sun,
  Lightbulb,
  ArrowRight,
  RefreshCw,
  Smartphone,
  Brain,
  BarChart4,
  AreaChart as AreaChartIcon,
  Users,
  UserRound,
  Target,
  Award,
  Timer,
  Activity,
  Radar,
  Home
} from "lucide-react";

import maharashtraStatePng from "../assets/maharashtra-state.png";
import maharashtraDistrictsPng from "../assets/maharashtra-districts-map.png";
import sentimentChartSvg from "../assets/sentiment-chart.svg";
import trendTimelineSvg from "../assets/trend-timeline.svg";
import trendEvolutionSvg from "../assets/trend-evolution.svg";
import audienceDemographicsSvg from "../assets/audience-demographics.svg";
import engagementMetricsSvg from "../assets/engagement-metrics.svg";

const StateDetails: React.FC = () => {
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
          {/* Campaign Title and Navigation */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg mb-1">Campaign Name :</p>
                <h1 className="text-4xl font-serif font-bold">Summer Fashion Sale 2025</h1>
              </div>
              <div className="flex items-center space-x-3">
                <a href="/campaign/customer-segmentation" className="text-blue-600 hover:text-blue-800 flex items-center px-3 py-1.5 border border-blue-300 rounded-md bg-blue-50 hover:bg-blue-100">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Customer Segmentation</span>
                </a>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <RefreshCw size={16} className="mr-2" />
                  Refresh Data
                </Button>
              </div>
            </div>
            
            {/* Secondary Navigation */}
            <div className="mt-4 bg-gray-100 p-2 rounded-md flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <a href="/" className="px-3 py-1 rounded-md hover:bg-gray-200 text-sm flex items-center">
                  <Home className="h-3 w-3 mr-1" />
                  <span>Home</span>
                </a>
                <span className="text-gray-400">|</span>
                <a href="/campaign/details" className="px-3 py-1 bg-blue-100 rounded-md text-sm">Campaign Dashboard</a>
                <span className="text-gray-400">|</span>
                <a href="/campaign/customer-segmentation" className="px-3 py-1 rounded-md hover:bg-gray-200 text-sm flex items-center">
                  <Users className="h-3 w-3 mr-1" />
                  <span>Customer Segmentation</span>
                </a>
              </div>
              <div className="text-xs text-gray-500">Last updated: March 29, 2025</div>
            </div>
          </div>
          
          {/* Key Metrics Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Click-Through Rate</span>
                  <span className="text-green-500 flex items-center text-sm font-normal">
                    <ArrowUpRight size={16} className="mr-1" /> +2.4%
                  </span>
                </CardTitle>
                <CardDescription>Compared to previous period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">4.28%</div>
                <Progress value={42.8} className="h-2" />
              </CardContent>
            </Card>
            
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Conversion Rate</span>
                  <span className="text-green-500 flex items-center text-sm font-normal">
                    <ArrowUpRight size={16} className="mr-1" /> +1.7%
                  </span>
                </CardTitle>
                <CardDescription>Compared to previous period</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">8.5%</div>
                <Progress value={85} className="h-2" />
              </CardContent>
            </Card>
            
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>ROI</span>
                  <span className="text-red-500 flex items-center text-sm font-normal">
                    <ArrowDownRight size={16} className="mr-1" /> -0.8%
                  </span>
                </CardTitle>
                <CardDescription>Compared to target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">287%</div>
                <Progress value={72} className="h-2" />
              </CardContent>
            </Card>
          </div>
          
          {/* AI Insights Card */}
          <div className="mb-4">
            <Card className={`border-l-4 border-l-blue-500 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-blue-50"}`}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-blue-500" />
                  AI-Powered Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 text-blue-500">•</div>
                    <span>Your campaign engagement is <strong>32% higher</strong> on weekends compared to weekdays. Consider shifting more budget to weekend ad placements.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 text-blue-500">•</div>
                    <span>The "Floral Maxi Dress" content has the highest conversion rate. Creating more content featuring this product could improve overall campaign performance.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-0.5 h-5 w-5 text-blue-500">•</div>
                    <span>Users from Mumbai show 18% higher average order value than other regions. Consider targeted premium product promotions for this segment.</span>
                  </li>
                </ul>
                <Button variant="link" className="mt-2 p-0 text-blue-500">
                  View all 8 insights <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Customer Segmentation CTA */}
          <div className="mb-6">
            <Card className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white`}>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <Users className="h-10 w-10 mr-4 bg-white text-blue-600 p-2 rounded-full" />
                    <div>
                      <h3 className="text-xl font-bold">Explore Customer Segmentation</h3>
                      <p className="text-blue-100">Dive deeper into customer behavior patterns and demographic insights</p>
                    </div>
                  </div>
                  <a 
                    href="/campaign/customer-segmentation" 
                    className="px-4 py-2 bg-white text-blue-600 rounded-md font-medium flex items-center hover:bg-blue-50"
                  >
                    View Customer Insights
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Region Focus */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Regional Focus</h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Map Image */}
              <div className="md:w-1/3">
                <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
                  <CardContent className="p-4">
                    <img 
                      src={maharashtraStatePng} 
                      alt="Maharashtra State Map" 
                      className="w-full h-auto"
                    />
                    <p className="text-sm text-center mt-2 text-gray-600">Primary target region</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Campaign Overview */}
              <div className="md:w-2/3">
                <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
                  <CardHeader className="pb-2">
                    <CardTitle>Campaign Overview</CardTitle>
                    <CardDescription>Summer fashion sale campaign performance metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">This summer fashion sale campaign focused on the Maharashtra region achieved excellent results with high conversion rates and strong engagement metrics across multiple social media platforms. The campaign successfully promoted our latest apparel and accessory collections.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className={`p-3 rounded ${isDarkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <p className="text-sm text-gray-600">Impressions</p>
                        <p className="text-2xl font-bold">3.2M</p>
                      </div>
                      <div className={`p-3 rounded ${isDarkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <p className="text-sm text-gray-600">Engagement</p>
                        <p className="text-2xl font-bold">428K</p>
                      </div>
                      <div className={`p-3 rounded ${isDarkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <p className="text-sm text-gray-600">Conversions</p>
                        <p className="text-2xl font-bold">52.3K</p>
                      </div>
                      <div className={`p-3 rounded ${isDarkMode ? "bg-gray-700" : "bg-blue-50"}`}>
                        <p className="text-sm text-gray-600">ROI</p>
                        <p className="text-2xl font-bold">287%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Filter Section */}
          <div className="mb-6">
            <div className="flex flex-col md:flex-row justify-between bg-blue-50 p-4 rounded-lg">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold mb-2">Time Period</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md">Week</button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-md">Month</button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-md">Year</button>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Target Demographics</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-md">All</button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-md">18-24</button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-md">25-34</button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded-md">35+</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Data Visualization Section with Tabs */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Interactive Analytics</h2>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
                <Button size="sm" variant="outline" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
                <Button size="sm" variant="outline" className="flex items-center">
                  <Eye className="h-4 w-4 mr-2" />
                  Comparison
                </Button>
              </div>
            </div>
            
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
              <CardContent className="p-6">
                <Tabs defaultValue="engagement" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-4">
                    <TabsTrigger value="engagement">Engagement</TabsTrigger>
                    <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
                    <TabsTrigger value="demographics">Demographics</TabsTrigger>
                    <TabsTrigger value="funnel">Conversion Funnel</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="engagement" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Time-based Engagement Trend</h3>
                        <div className="h-[300px] relative overflow-hidden rounded-lg border">
                          <img 
                            src={trendTimelineSvg} 
                            alt="Time-based Trend Analysis" 
                            className="w-full h-auto"
                          />
                          <div className="absolute bottom-2 right-2 bg-white p-1 rounded text-xs text-gray-500">
                            Hover for details
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Platform Performance</h3>
                        <div className="h-[300px] relative overflow-hidden rounded-lg border">
                          <img 
                            src={engagementMetricsSvg} 
                            alt="Engagement Metrics by Platform" 
                            className="w-full h-auto"
                          />
                          <div className="absolute bottom-2 right-2 bg-white p-1 rounded text-xs text-gray-500">
                            Click to filter
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="sentiment" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Sentiment Analysis</h3>
                        <div className="h-[300px] relative overflow-hidden rounded-lg border">
                          <img 
                            src={sentimentChartSvg} 
                            alt="Sentiment Score Analysis" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Sentiment Evolution</h3>
                        <div className="h-[300px] relative overflow-hidden rounded-lg border">
                          <img 
                            src={trendEvolutionSvg} 
                            alt="Trend Evolution Analysis" 
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Customer Feedback Highlights</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 border border-green-100 p-3 rounded">
                          <blockquote className="text-sm italic">"Love the new linen collection. The colors are perfect for summer!"</blockquote>
                          <div className="mt-2 text-xs text-green-700 font-medium">Positive Sentiment (92%)</div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-100 p-3 rounded">
                          <blockquote className="text-sm italic">"The maxi dress is beautiful but shipping took longer than expected."</blockquote>
                          <div className="mt-2 text-xs text-yellow-700 font-medium">Neutral Sentiment (65%)</div>
                        </div>
                        <div className="bg-red-50 border border-red-100 p-3 rounded">
                          <blockquote className="text-sm italic">"Disappointed with the swimwear sizing. Runs much smaller than expected."</blockquote>
                          <div className="mt-2 text-xs text-red-700 font-medium">Negative Sentiment (78%)</div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="demographics">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Audience Demographics</h3>
                      <div className="h-[350px] relative overflow-hidden rounded-lg border flex items-center justify-center">
                        <img 
                          src={audienceDemographicsSvg} 
                          alt="Audience Demographics" 
                          className="w-auto h-full max-w-full p-2"
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="funnel">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Conversion Funnel Analysis</h3>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="flex flex-col items-center justify-center space-y-3 max-w-lg mx-auto">
                          <div className="w-[90%] h-12 bg-blue-600 rounded-sm flex items-center justify-center text-white">
                            <span className="font-medium">Visits: 327,489</span>
                            <span className="text-xs ml-2">(100%)</span>
                          </div>
                          <div className="w-[80%] h-12 bg-blue-500 rounded-sm flex items-center justify-center text-white">
                            <span className="font-medium">Product Views: 245,617</span>
                            <span className="text-xs ml-2">(75%)</span>
                          </div>
                          <div className="w-[50%] h-12 bg-blue-400 rounded-sm flex items-center justify-center text-white">
                            <span className="font-medium">Add to Cart: 98,245</span>
                            <span className="text-xs ml-2">(30%)</span>
                          </div>
                          <div className="w-[35%] h-12 bg-blue-300 rounded-sm flex items-center justify-center text-white">
                            <span className="font-medium">Checkout Started: 78,597</span>
                            <span className="text-xs ml-2">(24%)</span>
                          </div>
                          <div className="w-[20%] h-12 bg-blue-200 rounded-sm flex items-center justify-center text-blue-800">
                            <span className="font-medium">Purchases: 52,398</span>
                            <span className="text-xs ml-2">(16%)</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="bg-red-50 p-3 rounded border border-red-100">
                            <h4 className="font-medium text-sm mb-1">Highest Drop-off</h4>
                            <p className="text-sm text-gray-600">Add to Cart → Checkout (50% drop)</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded border border-green-100">
                            <h4 className="font-medium text-sm mb-1">Best Conversion</h4>
                            <p className="text-sm text-gray-600">Checkout → Purchase (67% convert)</p>
                          </div>
                          <div className="bg-blue-50 p-3 rounded border border-blue-100">
                            <h4 className="font-medium text-sm mb-1">Improvement Area</h4>
                            <p className="text-sm text-gray-600">Product View → Add to Cart</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Top Performing Content */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Top Performing Content</h2>
              <a href="/campaign/customer-segmentation" className="flex items-center text-blue-600 hover:text-blue-800">
                <Users className="h-4 w-4 mr-2" />
                <span>View Customer Segmentation & Behavior</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="bg-emerald-50 rounded-lg overflow-hidden shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[60px]">Rank</TableHead>
                    <TableHead>Content Title</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead className="text-right">Engagement Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>"Summer Linen Collection Showcase"</TableCell>
                    <TableCell>Instagram</TableCell>
                    <TableCell className="text-right">8.7%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">2</TableCell>
                    <TableCell>"5 Ways to Style Our Floral Maxi Dress"</TableCell>
                    <TableCell>Facebook</TableCell>
                    <TableCell className="text-right">6.2%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">3</TableCell>
                    <TableCell>"Behind the Scenes: Designer Handbags Collection"</TableCell>
                    <TableCell>TikTok</TableCell>
                    <TableCell className="text-right">5.9%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">4</TableCell>
                    <TableCell>"Summer Footwear Essentials - New Arrivals"</TableCell>
                    <TableCell>Instagram</TableCell>
                    <TableCell className="text-right">5.3%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">5</TableCell>
                    <TableCell>"Sustainable Swimwear Collection Launch"</TableCell>
                    <TableCell>YouTube</TableCell>
                    <TableCell className="text-right">4.8%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Heat Map & Geographical Breakdown */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Geographical Performance Breakdown</h2>
              <Select defaultValue="engagement">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Engagement Rate</SelectItem>
                  <SelectItem value="conversion">Conversion Rate</SelectItem>
                  <SelectItem value="roi">ROI</SelectItem>
                  <SelectItem value="sentiment">Sentiment Score</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Card className={`${isDarkMode ? "bg-gray-800 border-gray-700" : ""}`}>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Regional Heatmap</h3>
                    <div className="relative overflow-hidden rounded-lg border">
                      <img 
                        src={maharashtraDistrictsPng} 
                        alt="Maharashtra Districts Performance Map" 
                        className="w-full h-auto max-h-[350px]"
                      />
                      <div className="absolute bottom-4 right-4 bg-white shadow-md rounded p-2">
                        <div className="text-xs font-medium mb-1">Engagement Level</div>
                        <div className="flex items-center space-x-1">
                          <span className="block w-4 h-4 bg-blue-200"></span>
                          <span className="block w-4 h-4 bg-blue-300"></span>
                          <span className="block w-4 h-4 bg-blue-400"></span>
                          <span className="block w-4 h-4 bg-blue-500"></span>
                          <span className="block w-4 h-4 bg-blue-600"></span>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>Low</span>
                          <span>High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Top Performing Districts</h3>
                    <div className="space-y-4 h-[350px] overflow-auto pr-2">
                      <div className="bg-white rounded-lg shadow-sm p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Mumbai City</h4>
                            <p className="text-sm text-gray-600">8.9% engagement rate</p>
                          </div>
                          <span className="text-green-500 text-sm font-medium">+12%</span>
                        </div>
                        <div className="mt-2">
                          <Progress value={89} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Pune</h4>
                            <p className="text-sm text-gray-600">7.6% engagement rate</p>
                          </div>
                          <span className="text-green-500 text-sm font-medium">+8%</span>
                        </div>
                        <div className="mt-2">
                          <Progress value={76} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Nagpur</h4>
                            <p className="text-sm text-gray-600">6.4% engagement rate</p>
                          </div>
                          <span className="text-green-500 text-sm font-medium">+5%</span>
                        </div>
                        <div className="mt-2">
                          <Progress value={64} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Thane</h4>
                            <p className="text-sm text-gray-600">5.8% engagement rate</p>
                          </div>
                          <span className="text-red-500 text-sm font-medium">-2%</span>
                        </div>
                        <div className="mt-2">
                          <Progress value={58} className="h-2" />
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg shadow-sm p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">Nashik</h4>
                            <p className="text-sm text-gray-600">5.2% engagement rate</p>
                          </div>
                          <span className="text-green-500 text-sm font-medium">+3%</span>
                        </div>
                        <div className="mt-2">
                          <Progress value={52} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* New Advanced Dashboard Components */}
          <div className="space-y-8 mb-8">
            
            {/* Real-time Performance Tracking */}
            <div>
              <h2 className="text-xl font-bold mb-4">Real-time Performance Tracking</h2>
              <RealTimePerformance isDarkMode={isDarkMode} />
            </div>
            
            {/* Automated Recommendations */}
            <div>
              <h2 className="text-xl font-bold mb-4">Automated Recommendations</h2>
              <AutomatedRecommendations isDarkMode={isDarkMode} />
            </div>
            
            {/* Predictive Analytics */}
            <div>
              <h2 className="text-xl font-bold mb-4">Predictive Analytics</h2>
              <PredictiveAnalytics isDarkMode={isDarkMode} />
            </div>
            
            {/* Audience Insights */}
            <div>
              <h2 className="text-xl font-bold mb-4">Audience Insights</h2>
              <AudienceInsights isDarkMode={isDarkMode} />
            </div>
            
            {/* Competitor Benchmarking */}
            <div>
              <h2 className="text-xl font-bold mb-4">Competitor Benchmarking</h2>
              <CompetitorBenchmarking isDarkMode={isDarkMode} />
            </div>
            
            {/* Real-time Alerts & Notifications */}
            <div>
              <h2 className="text-xl font-bold mb-4">Real-time Alerts</h2>
              <Card className={`border-l-4 border-l-amber-500 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-amber-50"}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="mr-2 h-5 w-5 text-amber-500" />
                    Real-time Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-green-100 p-2 rounded-full">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">Milestone Achieved</h4>
                        <p className="text-sm text-gray-600">Campaign has reached 50,000 conversions milestone</p>
                      </div>
                      <div className="text-xs text-gray-500">2h ago</div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <AlertCircle className="h-5 w-5 text-amber-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">Budget Alert</h4>
                        <p className="text-sm text-gray-600">Campaign has used 75% of allocated budget</p>
                      </div>
                      <div className="text-xs text-gray-500">6h ago</div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-red-100 p-2 rounded-full">
                        <TrendingDown className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-medium">Performance Drop</h4>
                        <p className="text-sm text-gray-600">Conversion rate for "Swimwear Collection" dropped by 15%</p>
                      </div>
                      <div className="text-xs text-gray-500">1d ago</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <Button variant="outline" size="sm" className="text-amber-600">
                      Configure Alerts
                    </Button>
                    <Button variant="outline" size="sm">
                      View All Notifications
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StateDetails;