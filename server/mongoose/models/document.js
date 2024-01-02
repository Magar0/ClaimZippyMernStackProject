const mongoose = require('mongoose');


const documentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: String,
    remarks: String,
});

const document = mongoose.model.DocumentDetails || mongoose.model('DocumentDetails', documentSchema);
module.exports = document;
