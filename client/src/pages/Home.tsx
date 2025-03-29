import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotificationBadge from "@/components/NotificationBadge";
import SearchBar from "@/components/SearchBar";
import IndiaMap from "@/components/IndiaMap";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <NotificationBadge />
          
          {/* Search and Filter Section */}
          <div className="mb-6">
            <SearchBar />
            
            <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                  <Select defaultValue="week">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select time period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Demographic</label>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select demographic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Demographics</SelectItem>
                      <SelectItem value="18-24">Age 18-24</SelectItem>
                      <SelectItem value="25-34">Age 25-34</SelectItem>
                      <SelectItem value="35-44">Age 35-44</SelectItem>
                      <SelectItem value="45+">Age 45+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Type</label>
                <Select defaultValue="fashion">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select campaign type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fashion">Fashion</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="home">Home & Decor</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <IndiaMap />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
