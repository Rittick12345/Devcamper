//@desc             GET all bootcamps
//@route            Get/api/bootcamps
//@access           public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'show all bootcamps' });
};

//@desc             GET bootcamp with id
//@route            Get/api/bootcamps/:id
//@access           public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: 'Fetching a bootcamp ' + req.params.id });
};

//@desc             POST bootcamps
//@route            Get/api/bootcamps
//@access           private
exports.createBootcamp = (req, res, next) => {
  res.status(201).json({ success: true, msg: 'bootcamps created' });
};

//@desc             UPDATE one bootcamp
//@route            Get/api/bootcamps/:id
//@access           private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `updating the bootcamp ${req.params.id}` });
};

//@desc             DELETE one bootcamps
//@route            Get/api/bootcamps/:id
//@access           public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `bootcamp ${req.params.id} deleted` });
};
