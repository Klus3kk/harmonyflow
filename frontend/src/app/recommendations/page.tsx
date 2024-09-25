'use client'

import { MusicalNoteIcon, UserGroupIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'


interface Track {
  id: string
  name: string
  artists: { name: string }[]
}

interface Artist {
  id: string
  name: string
}

export default function RecommendationsPage() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [artists, setArtists] = useState<Artist[]>([])
  const [selectedOption, setSelectedOption] = useState('top-tracks')

  useEffect(() => {
    const fetchData = async () => {
      if (selectedOption === 'top-tracks') {
        const res = await fetch('http://localhost:5000/callback/top-tracks')
        const data = await res.json()
        setTracks(data.items)
      } else if (selectedOption === 'top-artists') {
        const res = await fetch('http://localhost:5000/callback/top-artists')
        const data = await res.json()
        setArtists(data.items)
      }
    }

    fetchData()
  }, [selectedOption])

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Your Spotify Recommendations</h1>
      <div className="mb-6">
      <button
        onClick={() => setSelectedOption('top-tracks')}
        className={`px-4 py-2 mr-4 flex items-center ${
          selectedOption === 'top-tracks' ? 'bg-blue-500' : 'bg-gray-300'
        } text-white font-bold rounded`}
      >
        <MusicalNoteIcon className="w-5 h-5 mr-2" />
        Top Tracks
      </button>
      <button
        onClick={() => setSelectedOption('top-artists')}
        className={`px-4 py-2 flex items-center ${
          selectedOption === 'top-artists' ? 'bg-blue-500' : 'bg-gray-300'
        } text-white font-bold rounded`}
      >
        <UserGroupIcon className="w-5 h-5 mr-2" />
        Top Artists
      </button>
      </div>
      
      {selectedOption === 'top-tracks' && (
        <ul className="space-y-4">
          {tracks.map((track) => (
            <li key={track.id} className="bg-white p-4 rounded shadow">
              {track.name} by {track.artists[0].name}
            </li>
          ))}
        </ul>
      )}

      {selectedOption === 'top-artists' && (
        <ul className="space-y-4">
          {artists.map((artist) => (
            <li key={artist.id} className="bg-white p-4 rounded shadow">
              {artist.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
