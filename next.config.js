const path = require('path');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');

const dotenv = require('./client/src/helper/dotenv');

const { TEST } = dotenv.defaultEnv();

module.exports = {
  env: { TEST },
  webpack(config) {
    config.resolve.alias['@app'] = path.join(__dirname, 'client/src');

    config.plugins = config.plugins || [];
    config.plugins = [...config.plugins];

    return config;
  }
};
