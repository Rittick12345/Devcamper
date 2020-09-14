const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();
app.get('/api/v1/bootcamps/', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
});
app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Fetching a bootcamp ' + req.params.id });
});
app.post('/api/v1/bootcamps/:id', (req, res) => {
  res.status(201).json({ success: true, msg: 'bootcamps created' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `updating the bootcamp ${req.params.id}` });
});
app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `bootcamp ${req.params.id} deleted` });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server is  running in ${process.env.NODE_ENV} environment at ${PORT}`
  );
});
