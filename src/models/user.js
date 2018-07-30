const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema model user
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
});

//export the schema model user
module.exports = mongoose.model('User', UserSchema);