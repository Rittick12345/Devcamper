const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
});
router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: 'Fetching a bootcamp ' + req.params.id });
});
router.post('/', (req, res) => {
  res.status(201).json({ success: true, msg: 'bootcamps created' });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `updating the bootcamp ${req.params.id}` });
});
router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `bootcamp ${req.params.id} deleted` });
});

module.exports = router;
