const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privateroomSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    participant1: {
        type: String,
        required: true
    },
    participant2: {
        type: String,
        required: true
    },
    mensajes : {
        type: Array
    },
    isActive: {
        type: Boolean,
        default: true
    } 
});


const Privateroom = mongoose.model('Privateroom',privateroomSchema);
module.exports = Privateroom ;