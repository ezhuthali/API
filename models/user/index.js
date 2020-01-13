// eslint-disable-next-line no-unused-vars
const User = require("./userModel");

exports.getUser = (query) => User.findOne(query);