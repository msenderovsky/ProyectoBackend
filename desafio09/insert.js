
const cont= require('./src/contenedor');
const { optionsMySQL } = require('./src/DB/optionsMySQL');
const container= new cont(optionsMySQL,'products')

const prods=[
        {name:'buzo', price:'5000', thumbnail:'a' },
        {name:'jeans', price:'3000', thumbnail:'b' },
        {name:'remera', price:'2000', thumbnail:'c' }
      ];

      {
          prods.forEach(prod=>container.save(prod))
      }