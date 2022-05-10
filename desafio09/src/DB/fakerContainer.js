const { faker } = require("@faker-js/faker");

class fakerContainer {
    constructor(){

    }

    generateRandomProduct(cant){
        const prodList=[]
        for (let i=0; i<cant; i++){
            const prod={
                id: i+1,
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                thumbnail: faker.commerce.imageUrl()
            }
            prodList.push(prod)
        }
        return prodList
    }
}

module.exports=generateRandomProduct