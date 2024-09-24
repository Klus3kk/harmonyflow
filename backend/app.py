from flask import Flask, redirect, request, session, url_for, jsonify
from flask_cors import CORS
import spotipy
from spotipy.oauth2 import SpotifyOAuth

app = Flask(__name__)
app.secret_key = 'some_random_secret_key'
CORS(app)

# Replace these with your own Spotify app credentials
CLIENT_ID = 'your_id_client'
CLIENT_SECRET = 'your_client_secret'
REDIRECT_URI = 'http://localhost:5000/callback'
SCOPE = 'user-top-read user-library-read'

sp_oauth = SpotifyOAuth(client_id=CLIENT_ID, client_secret=CLIENT_SECRET, redirect_uri=REDIRECT_URI, scope=SCOPE)

@app.route('/')
def index():
    if not sp_oauth.get_cached_token():
        return redirect(url_for('login'))
    return 'Logged in. Go to /recommend for recommendations.'

@app.route('/login')
def login():
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)

@app.route('/callback')
def callback():
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session['token_info'] = token_info
    return redirect(url_for('recommend'))

@app.route('/recommend', methods=['GET'])
def recommend():
    token_info = session.get('token_info')
    if not token_info:
        return redirect(url_for('login'))

    sp = spotipy.Spotify(auth=token_info['access_token'])

    # Get user's top artists
    top_artists = sp.current_user_top_artists(limit=1)['items']
    if top_artists:
        seed_artists = [artist['id'] for artist in top_artists]
    else:
        return jsonify({'error': 'No top artists found.'})

    # Get recommendations based on top artists
    recommendations = sp.recommendations(seed_artists=seed_artists, limit=10)
    track_data = [
        {
            'name': track['name'],
            'artist': track['artists'][0]['name'],
            'album': track['album']['name'],
            'image': track['album']['images'][0]['url']
        }
        for track in recommendations['tracks']
    ]
    return jsonify(track_data)

if __name__ == '__main__':
    app.run(debug=True)