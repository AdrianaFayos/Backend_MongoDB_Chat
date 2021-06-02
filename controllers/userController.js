const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secreta = "Esto es lo más difícil";

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

    async loginUser(email, password){

        const user =  await User.findOne({email})
        if(!user){
            throw new Error('Email does not exist')
        }
        if (!await bcrypt.compare(password,user.password)){
            throw new Error('Password incorrect')
        }
        const payload = {
            userId: user._id,
            tokenCreationDate: new Date,
            isAdmin: user.isAdmin
        }

        const token = jwt.sign(payload, secreta)

        return ({token, user});

    }
}

let userController = new Cliente();
module.exports = userController;