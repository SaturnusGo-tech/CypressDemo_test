require('dotenv').config();

module.exports = (on, config) => {
  config.env = config.env || {};
  config.env.username = process.env.OPUS_LOGIN;
  config.env.password = process.env.OPUS_PASSWORD;
  return config;
};

console.log('OPUS_LOGIN:', process.env.OPUS_LOGIN);
console.log('OPUS_PASSWORD:', process.env.OPUS_PASSWORD);
