import React from 'react';

export const Container = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`mx-auto max-w-[1320px] px-4 md:px-6 w-full ${className}`}>
      {children}
    </div>
  );
};
