const { Schema, model } = require('mongoose');


const JumboSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

module.exports = model('jumbo', JumboSchema,'jumbo' );