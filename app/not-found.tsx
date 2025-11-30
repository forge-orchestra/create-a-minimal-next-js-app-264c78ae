import React from 'react';
import { AlertCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AlertCircle className="w-16 h-16 text-red-500" />
      <h1 className="mt-4 text-2xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;