const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

describe("User Model", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
  });

  it("should hash password and authenticate user", async () => {
    const password = "secret";
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username: "tester", passwordHash });
    const found = await User.findOne({ username: "tester" });
    expect(found).toBeTruthy();
    expect(await bcrypt.compare(password, found.passwordHash)).toBe(true);
  });
});
