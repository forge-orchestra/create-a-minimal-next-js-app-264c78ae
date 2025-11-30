'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { User, fetchUserData } from '../../lib/api';
import { Loader, AlertCircle } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (err) {
        setError('Failed to load user data.');
      } finally {
        setLoading(false);
      }
    };
    loadUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin w-10 h-10 text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 flex items-center">
          <AlertCircle className="w-6 h-6 mr-2" />
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userData?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Your Items</h2>
          <ul>
            {userData?.items.map(item => (
              <li key={item.id} className="border-b py-2">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <button
            onClick={() => router.push('/settings')}
            className="text-blue-500 hover:underline"
          >
            Go to Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;