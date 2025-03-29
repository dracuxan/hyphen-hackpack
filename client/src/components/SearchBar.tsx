import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      handleSearchClick();
    }
  };

  return (
    <div className="relative mx-auto max-w-2xl bg-gray-100 rounded-lg shadow-sm mb-8 flex">
      <div className="flex items-center pl-4">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search the State name..."
        className="py-3 px-2 bg-gray-100 flex-grow focus:outline-none rounded-l-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <div className="flex items-center">
        <Button 
          className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition"
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
