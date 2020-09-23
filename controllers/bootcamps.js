const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
//@desc             GET all bootcamps
//@route            Get/api/v1/bootcamps
//@access           public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find();
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found `, 404));
  }

  res.status(200).json({ success: true, count: bootcamp.length, data: bootcamp });
});

//@desc             GET bootcamp with id
//@route            Get/api/v1/bootcamps/:id
//@access           public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
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
    return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
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
    return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
  }
  res.status(200).json({
    success: true,
    data: {},
    msg: `deleting the bootcamp ${req.params.id}`,
  });
});

//@desc             GET bootcamps by radius
//@route            Get/api/bootcamps/radius/:zipcode/:distance
//@access           public
exports.getBootcampByRadius = asyncHandler(async (req, res, next) => {
  const { zipcode, distance } = req.params;
  const loc = await geocoder.geocode(zipcode);

  //find lat and lon
  const lat = loc[0].latitude;
  const lon = loc[0].longitude;

  //calc the radius
  //radius of earth = 3963 miles/6378 kms
  const radius = distance / 3963;

  const bootcamp = await Bootcamp.find({
    location: {
      $geoWithin: { $centerSphere: [[lon, lat], radius] },
    },
  });
  res.status(200).json({ success: true, count: bootcamp.length, data: bootcamp });
});
