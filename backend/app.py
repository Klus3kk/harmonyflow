from flask import Flask, request, jsonify
import spotipy
from spotipy.oauth2 import SpotifyOAuth
import os
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load environment variables
load_dotenv()

sp_oauth = SpotifyOAuth(
    client_id=os.getenv("SPOTIPY_CLIENT_ID"),
    client_secret=os.getenv("SPOTIPY_CLIENT_SECRET"),
    redirect_uri=os.getenv("SPOTIPY_REDIRECT_URI"),
    scope="user-top-read user-library-read"
)

@app.route('/login')
def login():
    auth_url = sp_oauth.get_authorize_url()
    return jsonify({"auth_url": auth_url})

@app.route('/callback')
def callback():
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    sp = spotipy.Spotify(auth=token_info['access_token'])
    
    # Get both top tracks and top artists
    top_tracks = sp.current_user_top_tracks(limit=40)
    top_artists = sp.current_user_top_artists(limit=30)
    
    return jsonify({"tracks": top_tracks['items'], "artists": top_artists['items']})

@app.route('/recommendations')
def recommendations():
    token_info = sp_oauth.get_cached_token()
    if not token_info:
        return jsonify({"error": "User not authenticated"}), 401

    sp = spotipy.Spotify(auth=token_info['access_token'])
    user_top_tracks = sp.current_user_top_tracks(limit=5)

    seed_tracks = [track['id'] for track in user_top_tracks['items']]
    recommendations = sp.recommendations(seed_tracks=seed_tracks, limit=10)
    
    return jsonify({"recommendations": recommendations['tracks']})


if __name__ == "__main__":
    app.run(debug=True)
