import React, { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-purple-900 text-black p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button onClick={toggleSidebar} className="text-black text-lg">✖</button>
      <nav className="mt-10">
        <a href="#" className="block py-2 px-4 hover:bg-purple-700">Home</a>
        <a href="#" className="block py-2 px-4 hover:bg-purple-700">Your Tracks</a>
        <a href="#" className="block py-2 px-4 hover:bg-purple-700">Your Artists</a>
        <a href="#" className="block py-2 px-4 hover:bg-purple-700">AI Recommendations</a>
      </nav>
    </div>
  );
};

export default Sidebar;
