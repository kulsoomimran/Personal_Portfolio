import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from "../public/GitHub-Logo.svg"
import LinkedinLogo from "../public/LinkedIn-Logo.svg"

const Footer = () => {
  return (
    <footer id='accounts' className="flex justify-center items-center p-4 bg-zinc-300 text-white ">
    <div className='flex space-x-4'>
        <Link href="https://github.com/kulsoomimran" target="_blank" rel="noopener noreferrer">
        <Image
          src={GithubLogo}
          alt="GitHub Logo"
          width={55}
          height={55}
          className="hover:opacity-75 transition-opacity duration-400"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/kulsoom-imran-b89b0530a/" target="_blank" rel="noopener noreferrer">
        <Image
          src={LinkedinLogo}
          alt="LinkedIUn Logo"
          width={55}
          height={55}
          className="hover:opacity-75 transition-opacity duration-400"
        />
      </Link> 
    </div>

    </footer>
  );
};

export default Footer;