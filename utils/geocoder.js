const NodeGeocoder = require('node-geocoder');
const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdaptor: 'https',
  apiKey: process.env.GEOCODER_API_KEY,
  formatter: null,
};

const Geocoder = NodeGeocoder(options);

module.exports = Geocoder;
