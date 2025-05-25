import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '../../../public/GitHub-Logo.svg';
import LinkedinLogo from '../../../public/LinkedIn-Logo.svg';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Contact Info */}
        <section aria-labelledby="footer-contact" className="space-y-4">
          <h2 id="footer-contact" className="text-xl font-semibold text-white tracking-wide">Contact</h2>
          <div className="flex flex-col space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-indigo-400" />
              <a 
                href="mailto:kulsoomimran01@gmail.com" 
                className="hover:text-indigo-500 transition-colors duration-300 font-medium"
              >
                kulsoomimran1901@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-indigo-400" />
              <a 
                href="tel:+923331234567" 
                className="hover:text-indigo-500 transition-colors duration-300 font-medium"
              >
                +92 330 0821525
              </a>
            </div>
          </div>
        </section>

        {/* Spacer Section */}
        <div></div>

        {/* Social Logos at End */}
        <section className="flex justify-end items-end mt-4 md:mt-0 space-x-4">
          <Link 
            href="https://www.linkedin.com/in/kulsoom-imran-b89b0530a/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <div className="bg-white rounded-full p-1 hover:bg-indigo-100 transition-colors duration-300">
              <Image
                src={LinkedinLogo}
                alt="LinkedIn Logo"
                width={32}
                height={32}
                className="rounded-full"
                priority
              />
            </div>
          </Link>
          <Link 
            href="https://github.com/kulsoomimran" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <div className="bg-white rounded-full p-1 hover:bg-indigo-100 transition-colors duration-300">
              <Image
                src={GithubLogo}
                alt="GitHub Logo"
                width={32}
                height={32}
                className="rounded-full"
                priority
              />
            </div>
          </Link>
        </section>

      </div>

      {/* Divider */}
      <div className="border-t border-zinc-700 mt-12 pt-6 text-center text-sm text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Kulsoom Imran. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
