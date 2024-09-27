import React, { useState, useEffect } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Link } from 'lucide-react';

interface HeaderProps {
  handleLogin: () => void;
  handleLogout: () => void; // Add a logout handler
  isLoggedIn: boolean; // Add a prop to track login status
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleLogin, handleLogout, isLoggedIn, activeTab, setActiveTab, toggleSidebar }) => {
  return (
    <header className="bg-purple-900 text-white p-4 flex justify-between items-center">
      <MaxWidthWrapper>
        
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <button
              onClick={toggleSidebar}
              className="py-2 px-4 mr-2 bg-red-700 text-white rounded"
            >
              Menu
            </button>
          <div className="h-full flex items-center space-x-4">
            <button
              onClick={() => setActiveTab('recommendations')}
              className={`py-2 px-4 mr-2 rounded ${activeTab === 'recommendations' ? 'bg-yellow-500' : 'bg-gray-600'}`}
            >
              Recommendations
            </button>
            <button
              onClick={() => setActiveTab('tracks')}
              className={`py-2 px-4 mr-2 rounded ${activeTab === 'tracks' ? 'bg-blue-500' : 'bg-gray-600'}`}
            >
              Top Tracks
            </button>
            <button
              onClick={() => setActiveTab('artists')}
              className={`py-2 px-4 mr-2 rounded ${activeTab === 'artists' ? 'bg-blue-500' : 'bg-gray-600'}`}
            >
              Top Artists
            </button>
            
            <button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={isLoggedIn ? handleLogout : handleLogin} 
            >
              {isLoggedIn ? 'Sign Out' : 'Login with Spotify'} 
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
