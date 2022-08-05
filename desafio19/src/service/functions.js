const persona= require ('../models/product.js')
const ProductsMap = {};

function getProducts({ campo, valor }) {
    const products = Object.values(ProductsMap)
    if (field && value) {
    return products.filter(p => p[ campo ] == valor);
    } else {
    return products;
    }
}

function getProduct({ id }) {
    if (!ProductsMap[ id ]) {
    throw new Error('producto not found.');
    }
    return ProductsMap[ id ];
}

function createProduct({ datos }) {
    const id = crypto.randomBytes(10).toString('hex');
    const newproduct = new product(id, datos)
    ProductsMap[ id ] = newproduct;
    return newproduct;
}

function updateProduct({ id, datos }) {
    if (!ProductsMap[ id ]) {
        throw new Error('Producto not found');
    }
    const updatedProduct = new Product(id, datos)
    ProductsMap[ id ] = updatedProduct;
    return updatedProduct;
}

function deleteProduct({ id }) {
    if (!ProductsMap[ id ]) {
        throw new Error('Product not found');
    }
    const deletedProduct = ProductsMap[ id ]
    delete ProductsMap[ id ];
    return deletedProduct;
}

export {getProducts, getProduct, createProduct, updateProduct, deleteProduct}