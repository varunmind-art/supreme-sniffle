const Trade = require("../models/trade");
const mongoose = require("mongoose");

describe("Trade Model", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  it("should create trade", async () => {
    const trade = await Trade.create({
      type: "Call",
      strike: 30000,
      expiry: new Date(),
      premium: 0.20,
      quantity: 1,
      status: "Open",
    });
    expect(trade.type).toBe("Call");
    expect(trade.strike).toBe(30000);
  });
});
