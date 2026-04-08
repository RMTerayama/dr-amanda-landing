import React from 'react';

const MainLayout = ({ children }) => {
  return (
    // The wrapper acts as the main scrollable container with snap physics
    <div className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory font-sans text-neutral bg-white scroll-smooth relative">
      <main className="w-full">
        {children}
      </main>
      {/* Footer you can add later here */}
    </div>
  );
};

export default MainLayout;
