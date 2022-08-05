const { Router } = require('express')
const { router } = require('../app')
const productsController = require('../controllers/products')

router.get("/productos", productsController.getProducts)