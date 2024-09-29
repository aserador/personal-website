"use client";

import React from 'react';

const ContentArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 w-full">
      {children}
    </div>
  );
};

export default ContentArea;