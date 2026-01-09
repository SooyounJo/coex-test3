import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-400 p-4 flex flex-col items-center justify-between">
      {children}
    </div>
  );
};

export default Layout;
