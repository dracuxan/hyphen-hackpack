import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="text-black font-bold text-3xl flex items-center">
      <svg
        className="w-8 h-8 mr-2"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 6V12C4 17.5 7.5 22 12 22C16.5 22 20 17.5 20 12V6L12 2Z"
          fill="#dd2b0c"
          stroke="#000"
          strokeWidth="1"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Hackpack
    </div>
  );
};

export default Logo;
