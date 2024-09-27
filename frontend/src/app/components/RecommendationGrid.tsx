import React from 'react';
import TrackCard from './TrackCard';

const RecommendationGrid: React.FC<{ tracks: any[] }> = ({ tracks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tracks.map((track, index) => (
        <TrackCard key={index} track={track} />
      ))}
    </div>
  );
};

export default RecommendationGrid;
