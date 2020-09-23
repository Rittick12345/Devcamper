const colors = require('colors');
const mongoose = require('mongoose');

exports.connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
  console.log(`Mongodb connected ${conn.connection.host}`.cyan.underline.bold);
};
