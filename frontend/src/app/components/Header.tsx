import React from 'react';

interface HeaderProps {
  handleLogin: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleLogin, activeTab, setActiveTab }) => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Harmonyflow</h1>
      <div>
        <button 
          onClick={() => setActiveTab('tracks')} 
          className={`py-2 px-4 mr-2 rounded ${activeTab === 'tracks' ? 'bg-blue-500' : 'bg-gray-200'}`}>
          Top Tracks
        </button>
        <button 
          onClick={() => setActiveTab('artists')} 
          className={`py-2 px-4 rounded ${activeTab === 'artists' ? 'bg-blue-500' : 'bg-gray-200'}`}>
          Top Artists
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login with Spotify
        </button>
      </div>
    </header>
  );
};

export default Header;
