require('dotenv').config();

var config = {};
config.port = process.env.PORT || '9595';
config.host = process.env.HOST || '0.0.0.0';
config.secret = process.env.SECRET || 'secretphrase';
config.microphone = process.env.MICROPHONE || "Microphone"

module.exports = config;