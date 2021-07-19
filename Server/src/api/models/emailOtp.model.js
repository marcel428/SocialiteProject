var mongoose = require('mongoose');


const emailOtpSchema = new mongoose.Schema({
    otp:String
});

module.exports = mongoose.model('EmailOtp', emailOtpSchema)
