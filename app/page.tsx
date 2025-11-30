import React from 'react';
import { LucideIcon } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Forge-app</h1>
        <p className="text-lg text-gray-700 mb-8">A minimalistic Next.js application for a modern web experience.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Get Started</button>
      </div>
    </div>
  );
};

const FeatureShowcase: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <LucideIcon name="activity" className="h-12 w-12 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Dynamic Dashboard</h3>
          <p className="text-gray-600">Manage your items with ease using our dynamic dashboard.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <LucideIcon name="code" className="h-12 w-12 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Robust API</h3>
          <p className="text-gray-600">Seamlessly integrate with our robust API for efficient data management.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <LucideIcon name="shield" className="h-12 w-12 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
          <p className="text-gray-600">Experience a secure and reliable platform for all your needs.</p>
        </div>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeatureShowcase />
    </div>
  );
};

export default Page;