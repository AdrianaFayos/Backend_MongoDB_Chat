const User = require('../models/user');
const bcrypt = require('bcrypt');

class Cliente {

    constructor(){

    }

    async findAllUsers() {
        return User.find();
    }

    async createUser(user){
        user.password = await bcrypt.hash(user.password, 10);
        return User.create(user);
    }

    async modifyUser(user) {
        return User.findByIdAndUpdate(
            {_id : user.id},
            { email : user.email,
            country : user.country,
            city: user.city,
            isActive : user.isActive},
            {new:true,omitUndefined:true}
        );
    }
}

let userController = new Cliente();
module.exports = userController;