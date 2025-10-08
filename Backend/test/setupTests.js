// Setup for Jest tests (backend)
// You can extend this for global mocks, etc.

beforeAll(() => {
  process.env.MONGO_URI = "mongodb://localhost:27017/delta-bot-test";
});
