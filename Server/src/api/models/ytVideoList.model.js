const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ytVideoListSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});



module.exports = mongoose.model('YtVideoList', ytVideoListSchema)
