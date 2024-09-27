"use client"
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RecommendationGrid from './components/RecommendationGrid';
import SpotifyTopArtists from './components/SpotifyTopArtists';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('tracks');
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login');
    const data = await res.json();
    window.location.href = data.auth_url; // Redirect to Spotify login
  };

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/callback');
    const data = await res.json();
    setTopTracks(data.tracks);
    setTopArtists(data.artists);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (activeTab === 'tracks') {
      return <RecommendationGrid tracks={topTracks} />;
    } else if (activeTab === 'artists') {
      return <SpotifyTopArtists artists={topArtists} />;
    }
  };

  return (
    <div>
      <Header handleLogin={handleLogin} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-6">Your Recommendations</h2>
        {renderContent()}
      </main>
    </div>
  );
}
