const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
//loading env var
dotenv.config({ path: './config/config.env' });

const app = express();

//mount the bootcamp router
app.use('/api/v1/bootcamps/', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server is  running in ${process.env.NODE_ENV} environment at ${PORT}`
  );
});
