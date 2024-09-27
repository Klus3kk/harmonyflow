// /components/TrackCard.tsx
import React from 'react';

const TrackCard: React.FC<{ track: any }> = ({ track }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-lg hover:bg-gray-700 transition">
      <img src={track.album.images[0].url} alt={track.name} className="rounded mb-4" />
      <h2 className="text-lg font-bold">{track.name}</h2>
      <p>{track.artists.map((artist: any) => artist.name).join(', ')}</p>
    </div>
  );
};

export default TrackCard;
