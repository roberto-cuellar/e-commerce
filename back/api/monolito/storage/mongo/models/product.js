const { Schema, model } = require('mongoose');


const ProductSchema = Schema({
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
    id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

module.exports = model('Product', ProductSchema,'jumbo' );