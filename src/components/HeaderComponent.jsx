import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      <nav className="bg-black py-4 px-6 shadow-lg">
        <div className="flex-grow container mx-auto">
          <a 
            href="/" 
            className="text-white text-xl font-semibold tracking-tight hover:text-gray-300 transition-colors"
          >
            Employee Management System
          </a>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;