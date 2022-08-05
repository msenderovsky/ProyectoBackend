import {graphqlHTTP} from "express-graphql"
import {buildSchema} from "graphql"

const app=express()
import {
    getProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
} from "./service/functions.js"


class Producto {
    constructor(id, { name, description, code, image, price }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.code = code;
    this.image= image;
    this.price=price
    }
}

const schema = buildSchema(`
    type Producto {
        id: ID!
        name: String,
        description: String,
        code: Int,
        imgage: String,
        price: Int
    }
    input ProductoInput {
        name: String,
        description: String,
        code: Int,
        imgage: String,
        price: Int
    }
    type Query {
        getProducto(id: ID!): Producto,
        getProductos(field: String, value: String): [Producto],
    }
    type Mutation {
        createProducto(data: ProductoInput): Producto
        updateProducto(id: ID!, datos: ProductoInput): Producto,
        deleteProducto(id: ID!): Producto,
    }
`);
