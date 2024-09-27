'use client'; // Ensure it's a client-side component

import React, { useEffect, useState } from 'react';

interface Track {
  album: {
    images: { url: string }[];
    name: string;
  };
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
}

const SpotifyTopTracks: React.FC = () => {
  const [topTracks, setTopTracks] = useState<Track[]>([]);

  // Fetch top tracks from your Flask API
  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const res = await fetch('http://localhost:5000/callback/top-tracks');
        const data = await res.json();
        setTopTracks(data.items);
      } catch (err) {
        console.error('Error fetching top tracks:', err);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Your Top Spotify Tracks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topTracks.map((track, index) => (
          <a
            key={index}
            href={track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{track.name}</h3>
              <p className="text-gray-400">
                {track.artists.map((artist) => artist.name).join(', ')}
              </p>
              <p className="text-gray-500">{track.album.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpotifyTopTracks;
