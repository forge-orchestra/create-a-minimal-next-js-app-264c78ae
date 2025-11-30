import { FC } from 'react';
import { AlertCircle } from 'lucide-react';

const ErrorPage: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h1>
        <p className="text-gray-600">An unexpected error has occurred. Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;