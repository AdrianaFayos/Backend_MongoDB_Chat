const User = require('../models/user');
const Privateroom = require('../models/privateroom');

class ChatPrivado {

    async findAllChats() {
        return Room.find();
    }

    async createChat(chat){
        return Room.create(chat);
    }

} 


let privateroomController = new ChatPrivado();
module.exports = privateroomController;
