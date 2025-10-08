const Config = require("../models/config");

async function getConfig() {
  let config = await Config.findOne();
  if (!config) {
    config = await Config.create({});
  }
  return config;
}

async function updateConfig(newValues) {
  let config = await Config.findOne();
  if (!config) {
    config = await Config.create(newValues);
  } else {
    Object.assign(config, newValues);
    config.updatedAt = new Date();
    await config.save();
  }
  return config;
}

module.exports = { getConfig, updateConfig };
