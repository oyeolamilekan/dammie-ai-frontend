import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-geometric font-medium">
              Built by <span className="font-bold">Oye Olalekan Johnson</span>
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {currentYear} CryptoChat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;