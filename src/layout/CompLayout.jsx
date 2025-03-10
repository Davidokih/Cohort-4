import React from "react";

const CompLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[89%]">{children}</div>
    </div>
  );
};

export default CompLayout;
