//eslint-disable-next-line no-unused-vars
const mongoose = require("kvell-db-plugin-mongoose").dbLib;
const bcrypt = require('bcryptjs');
const credential = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});

credential.pre('save', function() {
    this.password = bcrypt.hashSync(this.password, 10);
});

const Credential = mongoose.model('Credential', credential);
// Create your User model 's schema here and export it.
module.exports = Credential;