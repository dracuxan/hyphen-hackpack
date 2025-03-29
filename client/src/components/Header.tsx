import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Header: React.FC = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Logo />
          <div className="ml-3">
            <h1 className="text-xl font-bold">Hackpack</h1>
            <p className="text-sm text-gray-700">Digital Marketing Analytics</p>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex">
          <div className="bg-primary border border-black rounded-full py-1 px-2">
            <ul className="flex space-x-2">
              <li><a href="/" className="px-3 py-1 text-black hover:underline">Home</a></li>
              <li><a href="#about" className="px-3 py-1 text-black hover:underline">About Us</a></li>
              <li><a href="#resources" className="px-3 py-1 text-black hover:underline">Resources</a></li>
              <li><a href="/contact" className="px-3 py-1 text-black hover:underline">Contact</a></li>
            </ul>
          </div>
        </nav>
        
        {/* Help & Support Button */}
        <div className="mt-4 md:mt-0">
          <a href="/contact">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Help & Support
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
