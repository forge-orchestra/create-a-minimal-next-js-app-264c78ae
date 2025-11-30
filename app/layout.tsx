import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LucideReactProvider } from 'lucide-react';
import 'tailwindcss/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Forge-app',
  description: 'A minimalistic Next.js 15 application with a modern web experience.',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'UTF-8',
  themeColor: '#ffffff',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content={metadata.viewport} />
        <meta charSet={metadata.charset} />
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content={metadata.themeColor} />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <LucideReactProvider>
          <header className="bg-white shadow">
            <nav className="container mx-auto flex justify-between items-center p-4">
              <div className="text-lg font-semibold">Forge-app</div>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-blue-500">Home</a></li>
                <li><a href="/dashboard" className="hover:text-blue-500">Dashboard</a></li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-white shadow mt-8">
            <div className="container mx-auto p-4 text-center">
              <p>&copy; {new Date().getFullYear()} Forge-app. All rights reserved.</p>
            </div>
          </footer>
        </LucideReactProvider>
      </body>
    </html>
  );
};

export default Layout;