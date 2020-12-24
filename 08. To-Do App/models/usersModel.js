let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let userSchema = new Schema({
    username: String,
    password: String,
    imageNum: Number,
});

module.exports = mongoose.model('users', userSchema);