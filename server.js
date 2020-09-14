const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors'); //add colors to console

//loading env var
dotenv.config({ path: './config/config.env' });

connectDB.connectDB();
//bringing the router file
const bootcamps = require('./routes/bootcamps');

const app = express();
//using morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//mount the bootcamp router
app.use('/api/v1/bootcamps/', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(
    `server is  running in ${process.env.NODE_ENV} environment at ${PORT}`
      .yellow.bold
  );
});
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
