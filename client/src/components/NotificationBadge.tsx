import React from "react";

const NotificationBadge: React.FC = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex items-center rounded-full bg-red-500 text-white px-4 py-1">
        <span className="text-xs font-bold mr-2 bg-white text-red-500 px-1 rounded">NEW</span>
        <span>Latest policies have been updated</span>
      </div>
    </div>
  );
};

export default NotificationBadge;
