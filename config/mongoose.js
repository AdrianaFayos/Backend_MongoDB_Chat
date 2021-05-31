// Aquí está la conexión a Atlas.

const mongoose = require('mongoose');
const QUERY_STRING = "mongodb+srv://AdrianaFayos:1234abcd@cluster0.uwvoz.mongodb.net/chatDia1?retryWrites=true&w=majority"

//Connection to DB
const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Conectado a la base de datos'))
.catch((error) => console.log(error));

module.exports = db;