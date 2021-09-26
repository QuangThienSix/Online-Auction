require('dotenv').config();
const config = require('config');

const port = process.env.PORT || config.get('Application.port');
const mongoDbUri = process.env.DB_CONN || config.get('Database.dbConfig.uri');

module.exports = {
  port,
  mongoDbUri,
};
