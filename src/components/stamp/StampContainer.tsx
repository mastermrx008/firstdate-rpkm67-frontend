import React from 'react';

interface StampContainerProps {
  children: React.ReactNode;
}

const StampContainer: React.FC<StampContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center space-x-8">{children}</div>
  );
};

export default StampContainer;
