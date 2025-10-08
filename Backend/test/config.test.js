const Config = require("../models/config");
const mongoose = require("mongoose");

describe("Config Model", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  it("should create and find config", async () => {
    const config = await Config.create({ riskLevel: "High", maxPosition: 10, autoTrade: false });
    expect(config.riskLevel).toBe("High");
    const found = await Config.findOne({ riskLevel: "High" });
    expect(found.maxPosition).toBe(10);
  });
});
