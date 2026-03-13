import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">

      {/* Divider */}
      <div className="border-t border-zinc-700 mt-12 pt-6 text-center text-sm text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Kulsoom Imran. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
