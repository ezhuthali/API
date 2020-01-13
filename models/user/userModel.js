//eslint-disable-next-line no-unused-vars
const mongoose = require("kvell-db-plugin-mongoose").dbLib;

const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

const User = mongoose.model('User', user);
// Create your User model 's schema here and export it.
module.exports = User;