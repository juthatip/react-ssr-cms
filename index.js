const dotenv = require('./client/src/helper/dotenv');

process.env = { ...process.env, ...dotenv.getEnv() };

module.exports = require('./server.js');
