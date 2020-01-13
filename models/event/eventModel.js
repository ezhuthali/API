//eslint-disable-next-line no-unused-vars
const mongoose = require("kvell-db-plugin-mongoose").dbLib;

const event = new mongoose.Schema({
    event_name: {
        type: String,
        required: true
    },
    event_desc: {
        type: String,
        required: true
    },
    event_date: {
        type: String,
        required: true
    },
    panel_members: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Event = mongoose.model('Event', event);
// Create your User model 's schema here and export it.
module.exports = Event;