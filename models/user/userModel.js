//eslint-disable-next-line no-unused-vars
const ezhuthali = require("kvell-db-plugin-mongoose").dbLib;

const user = new ezhuthali.Schema({
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
})

user.pre('save', function () {
    console.log(this);
})


const User = ezhuthali.model('User', user);
// Create your User model 's schema here and export it.
module.exports = User;