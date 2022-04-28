const mongoose=require('mongoose')

//La plantilla
const prodSchema= new mongoose.Schema({
    title: String,
    price: String,
    url: String,
    date: Date
})

//se crea un modelo en la coleccion partiendo del esquema
module.exports= mongoose.model('products', prodSchema)

