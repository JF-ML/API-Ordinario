const mongoose = require('mongoose');

const LotesSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    volume: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },

});

module.exports = mongoose.model('Lote', LotesSchema);