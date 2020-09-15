const Bootcamp = require('../models/Bootcamp');
//@desc             GET all bootcamps
//@route            Get/api/v1/bootcamps
//@access           public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res
      .status(200)
      .json({ success: true, count: bootcamp.length, data: bootcamp });
  } catch (error) {
    res.status(500).json({ success: false, err: error.message });
  }
};

//@desc             GET bootcamp with id
//@route            Get/api/v1/bootcamps/:id
//@access           public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(404).json({ success: false, err: error.message });
  }
};

//@desc             POST bootcamps
//@route            Get/api/v1/bootcamps
//@access           private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(404).json({ success: false, err: error.message });
  }
};

//@desc             UPDATE bootcamp with id
//@route            Get/api/bootcamps/:id
//@access           private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
      msg: `updating a bootcamp ${req.params.id}`,
    });
  } catch (error) {
    res.status(404).json({ success: false, err: error.message });
  }
};

//@desc             DELETE one bootcamp
//@route            Get/api/bootcamps/:id
//@access           public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: {},
      msg: `deleting the bootcamp ${req.params.id}`,
    });
  } catch (error) {
    res.status(404).json({ success: false, err: error.message });
  }
};
