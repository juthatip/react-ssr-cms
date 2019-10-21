const fs = require('fs');
const dotenv = require('dotenv');

const defaultEnv = () => {
  const env = {};
  const path = `.env`.trim();
  if (fs.existsSync(path)) {
    const envConfig = dotenv.parse(fs.readFileSync(path));
    for (const k in envConfig) {
      if ({}.hasOwnProperty.call(envConfig, k)) {
        env[k] = envConfig[k];
      }
    }
  }
  return env;
};

module.exports = { defaultEnv };
