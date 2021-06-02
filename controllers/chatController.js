const Room = require('../models/room');
const User = require('../models/user');

class Sala {

    constructor(){

    }

    async findAllChats() {
        return Room.find();
    }

    async createChat(chat){
        return Room.create(chat);
    }

    async joinChat(data){
        const id = data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate({_id:id},
            {$push: {miembros:miembro}});
    }

    async leaveChat(data){
        const id = data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate({_id:id},
            {$pull: {miembros:miembro}});
    }

    async addMessage(data){
        const id = data.id;
        const userId = data.userId;
        
        const usuarioName = await User.findById(userId);

        let mensaje = {
            idUser : data.userId,
            usuario : usuarioName.name,
            text : data.texto,
            fecha : data.fecha,
            entregado: data.entregado
        }

        return Room.findByIdAndUpdate({_id:id},
            {$push: {mensajes:mensaje}});
    }

    async deleteChat(id){
        return Room.findByIdAndDelete(id);
    }

}

let chatController = new Sala();
module.exports = chatController;