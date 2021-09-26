const mongoose = require('mongoose');
const {
  mongoDbUri
} = require('../config');

const connectDb = () => {
  const mongoServer = process.env.MONGO_URI || mongoDbUri;
  mongoose.connect(mongoServer, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(res => {
    console.log(`Backend connect db ${mongoDbUri}`);
  });
};

module.exports = connectDb;