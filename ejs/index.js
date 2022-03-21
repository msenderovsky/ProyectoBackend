const express = require("express")
const ejs =require('ejs')
const app = express()
const routerProd = express.Router()
const products= require('./contenedor/contenedor')

app.set('view engine', 'ejs')
app.set('views', './views')

const storeProducts=new products()

app.use (express.json())
app.use(express.urlencoded({extended: true}))
app.use('/productos', routerProd)

let vista= Boolean(true)

app.get('/', (req, res) => {
    vista=true
    res.render('index', {vista});
})

routerProd
    .get('/', (req, res) => {
        const prods = storeProducts.getAll()
        vista = false
        res.render('index', {prods, vista});
    })
    .post('/', (req, res) => {
        const newProduct= storeProducts.save(req.body)
        vista= true
        res.render("index", {vista})
    })

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
server.on('error', (err) => console.log(err.message))