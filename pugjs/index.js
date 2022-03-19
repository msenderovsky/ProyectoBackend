const express = require("express")
const pug =require('pug')
const app = express()
const routerProd = express.Router()
const products= require('./contenedor/contenedor')

app.set('view engine', 'pug')
app.set('views', './views')

const storeProducts=new products()

app.use (express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routerProd)

app.get('/', (req, res) => {
    res.render('index', {title:"asda"});
})

routerProd
    .get('/', (req, res) => {
        const prods = storeProducts.getAll()
        res.render('table', {prods});
    })
    .post('/', (req, res) => {
        const newProduct= storeProducts.save(req.body)
        res.render("form")
    })

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on('error', (err) => console.log(err.message))