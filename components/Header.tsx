import React from 'react';
import Link from 'next/link';
import { Home, User, Settings } from 'lucide-react';

interface HeaderProps {
  links: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a aria-label="Home" className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Home className="w-6 h-6" />
            </a>
          </Link>
          <Link href="/profile">
            <a aria-label="Profile" className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <User className="w-6 h-6" />
            </a>
          </Link>
          <Link href="/settings">
            <a aria-label="Settings" className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Settings className="w-6 h-6" />
            </a>
          </Link>
        </div>
        <div className="flex space-x-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;