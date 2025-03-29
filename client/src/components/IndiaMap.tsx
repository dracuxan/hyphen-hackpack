import React from "react";
import { useLocation } from "wouter";
import indiaMapPng from "../assets/india-map.png";

const IndiaMap: React.FC = () => {
  const [, setLocation] = useLocation();

  const handleMapClick = () => {
    setLocation("/campaign/details");
  };

  return (
    <div className="flex justify-center mb-8 relative">
      <div className="bg-black p-4 rounded-lg">
        <img 
          src={indiaMapPng} 
          alt="India Map" 
          className="max-w-full h-auto cursor-pointer w-[500px]"
          onClick={handleMapClick}
        />
      </div>
      
      {/* Instructions Text */}
      <div className="absolute top-0 right-0 text-sm text-gray-500 p-2 bg-white bg-opacity-80 rounded">
        (Click here to move to the next Page)
      </div>
    </div>
  );
};

export default IndiaMap;
