const mongoose = require('mongoose');
require('dotenv').config()
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log('DB READY TO USE');
  })
  .catch((err) => {
    console.log('ERR: ', err);
  });


const db = mongoose.connection;
db.on('error', (err) => {
  console.log('ERR:', err.message);
});

db.on('connected', () => {
  console.log('MONGO CONNECTED');
});

db.on('disconnected', () => {
  console.log('MONGO DISCONNECTED');
});