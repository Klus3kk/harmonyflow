'use client'  // This marks the component as a Client Component

import { useState } from 'react'

export default function HomePage() {
  const [authUrl, setAuthUrl] = useState<string>('')

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/login')
    const data = await res.json()
    setAuthUrl(data.auth_url)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login with Spotify
      </button>
      {authUrl && (
        <a href={authUrl} target="_blank" rel="noopener noreferrer">
          Authorize Spotify
        </a>
      )}
    </div>
  )
}
