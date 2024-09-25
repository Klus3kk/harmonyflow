# Harmonyflow 🎵

**Harmonyflow** is a personalized Spotify recommendation system built using Flask, Next.js, and Tailwind CSS. The platform allows users to discover new music tailored to their listening habits, leveraging Spotify's Web API and machine learning to provide intelligent song and artist recommendations.

## Key Features

- Spotify OAuth authentication for secure user login.
- Personalized music recommendations based on your listening history.
- Real-time data visualization of your listening trends using Chart.js.
- Progressive Web App (PWA) support for offline access.
- Responsive and modern UI designed with Tailwind CSS.
- Backend API built with Flask and powered by Spotipy and PostgreSQL.
- Deployed with Vercel (frontend) and Heroku (backend).

## Technologies

- **Flask** (backend API)
- **Next.js** (React frontend)
- **Tailwind CSS** (styling)
- **Spotipy** (Spotify API wrapper)
- **PostgreSQL** (database)
- **Redis** (caching)
- **Machine Learning** (scikit-learn)
- **Docker** (containerization)
- **GitHub Actions** (CI/CD)

## Getting Started

1. Clone the repo:

```bash
git clone https://github.com/Klus3kk/harmonyflow.git
```

2. Set up the Flask backend:

- Install dependencies:

```bash
cd backend && pip install -r requirements.txt
```

- Create a `.env` file with your Spotify API credentials.

3. Set up the Next.js frontend:

```bash
cd frontend && npm install
```

4. Run the app:

```bash
docker-compose up --build
```

## Contributing

Feel free to submit pull requests or open issues for any bugs or feature requests.
