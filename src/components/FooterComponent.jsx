import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="w-full text-center bg-gray-900 text-white py-6 ">
       <div className="container mx-auto px-4">
        <p className="text-center text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()} Employee Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;