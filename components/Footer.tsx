import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FooterProps {
  siteName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ siteName, year }) => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {year} {siteName}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-400">
            <LucideIcon name="twitter" size={24} />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-400">
            <LucideIcon name="facebook" size={24} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-400">
            <LucideIcon name="instagram" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;