const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
//@desc             GET all bootcamps
//@route            Get/api/v1/bootcamps
//@access           public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found `, 404));
  }

  res
    .status(200)
    .json({ success: true, count: bootcamp.length, data: bootcamp });
});

//@desc             GET bootcamp with id
//@route            Get/api/v1/bootcamps/:id
//@access           public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

//@desc             POST bootcamps
//@route            Get/api/v1/bootcamps
//@access           private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp can not be created`, 404));
  }
  res.status(201).json({ success: true, data: bootcamp });
});

//@desc             UPDATE bootcamp with id
//@route            Get/api/bootcamps/:id
//@access           private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
    msg: `updating a bootcamp ${req.params.id}`,
  });
});

//@desc             DELETE one bootcamp
//@route            Get/api/bootcamps/:id
//@access           public
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: {},
    msg: `deleting the bootcamp ${req.params.id}`,
  });
});
