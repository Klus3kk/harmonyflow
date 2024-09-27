// /components/SpotifyTopArtists.tsx
import React from 'react';

interface Artist {
  name: string;
  external_urls: { spotify: string };
  images: { url: string }[];
}

const SpotifyTopArtists: React.FC<{ artists: Artist[] }> = ({ artists }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Your Top Spotify Artists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artists.map((artist, index) => (
          <a
            key={index}
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={artist.images[0]?.url}
              alt={artist.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{artist.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpotifyTopArtists;
