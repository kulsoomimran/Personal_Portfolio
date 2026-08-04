import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-portfolioBg text-portfolioBody px-6 py-12">
      {/* Divider */}
      <div className="border-t border-portfolioMuted/15 mt-12 pt-6 text-center text-sm text-portfolioMuted select-none">
        &copy; {new Date().getFullYear()} Kulsoom Imran. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
