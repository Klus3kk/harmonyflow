'use client'

import { useState } from 'react'

export default function HomePage() {
  const [authUrl, setAuthUrl] = useState<string>('')

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login')
    const data = await res.json()
    setAuthUrl(data.auth_url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Harmonyflow</h1>
      <p className="mb-8 text-lg">
        Discover your personalized Spotify music recommendations.
      </p>
      <button
        onClick={handleLogin}
        className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition duration-300"
      >
        Login with Spotify
      </button>
      {authUrl && (
        <a
          href={authUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-lg underline"
        >
          Authorize Spotify
        </a>
      )}
    </div>
  )
}
