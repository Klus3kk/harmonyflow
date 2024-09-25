import { useEffect, useState } from 'react'

interface Track {
  id: string
  name: string
  artists: { name: string }[]
}

export default function RecommendationsPage() {
  const [tracks, setTracks] = useState<Track[]>([])

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('http://localhost:5000/callback')
      const data = await res.json()
      setTracks(data.items)
    }

    fetchTracks()
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Your Top Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  )
}
