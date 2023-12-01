const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Database connected');
  });
};

module.exports = {
  connectDB,
};
