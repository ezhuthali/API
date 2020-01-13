//eslint-disable-next-line no-unused-vars
const mongoose = require("kvell-db-plugin-mongoose").dbLib;
const bcrypt = require('bcryptjs');
const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

user.pre('save', function () {
    this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model('User', user);
// Create your User model 's schema here and export it.
module.exports = User;