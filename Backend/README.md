# Delta BTC Options Bot Dashboard

A full-stack dashboard and automated trading bot for managing BTC options positions.

---

## Frontend

- Built with React
- Features:
  - Dashboard overview
  - Trade table
  - Bot configuration editor
  - User authentication
- API calls via `src/api/api.js`
- Styling in `src/styles/main.css`

### Setup

```sh
cd frontend
npm install
npm start
```

---

## Backend

- Built with Node.js, Express, MongoDB (Mongoose)
- Features:
  - REST API for trades, config, and authentication
  - Modular bot logic in `bot/bot.js`
  - Models: Trade, Config, User
  - JWT-based authentication (`routes/auth.js`, `middleware/auth.js`)
- Configuration via `.env`

### Setup

```sh
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT_SECRET
npm run dev
```

---

## API Endpoints

- `GET /api/trades` — List all trades
- `POST /api/trades` — Place a new trade
- `GET /api/config` — Get bot configuration
- `PUT /api/config` — Update bot configuration
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT

---

## Example Environment (`.env.example`)
See `.env.example` for required environment variables.

---

## License

MIT
