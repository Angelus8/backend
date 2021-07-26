const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name : {
        type: String
    },
    telephone: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Contacts', contactSchema);