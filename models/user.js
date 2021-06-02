const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    nick: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean
    } 
});

const toJSONConfig = {
    transform: (doc,ret,opt) => {
           delete ret['password']  // esto es para que el password no se pase por el json y sea oculto (medidas de seguridad)
           return ret
    }
}
userSchema.set('toJSON', toJSONConfig);


const User = mongoose.model('User',userSchema);
module.exports = User ;