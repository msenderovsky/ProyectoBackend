let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

let id = ''

const url = "http://localhost:8080"

describe("Comprobando que funcione correctamente", () => {
    before(() => {
        console.log('\n ****** Comienzo TOTAL del Test******')
    })
    after(() => {
        console.log("\n ****** Fin TOTAL del Test******'")
    })
    beforeEach(() => {
        console.log("\n ****** Comienzo Test ******")
    })
    afterEach(() => {
        console.log('***** FIN TEST ********')
    })

    //Subir un producto  
    it('Inserte un producto', (done) => {
        chai.request(url)
            .post('/api/products/')
            .send({
                name: "Buzo Estampado",
                description: "String",
                code: 111,
                image: "String",
                price: 3000,
                stock: 100
            })
            .end(function (err, res) {
                console.log(res.body)
                console.log(res.status)
                id = res.body._id
                expect(res).to.have.status(200);
            });
            chai.request(url)
            .get('/api/products')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200); 
                done();
            });
    });

    //Obtener todos los productos
    it('Traer los productos', (done) => {
        chai.request(url)
            .get('/api/products')
            .end(function (err, res) {
                console.log(res.status)
                expect(res).to.have.status(200);
                done();
            });
    });

    //Obtener el producto de un ID especifico
    it('Traer un producto de la base de datos', (done) => {
        chai.request(url)
            .get(`/api/products/${id}`)
            .end(function (err, res) {
                console.log(res.status)
                expect(res).to.have.status(200);
                done();
            });
    });

    //Test del producto creado
    it('Debe traer el producto creado recientemente', (done) => {
        chai.request(url)
            .get(`/api/products/${id}`)
            .end(function (err, res) {
                console.log(res.body)
                console.log(res.status)
                expect(res).to.have.status(200);
                done();
            });
    });

    //Modificacion del producto creado
    it('Debe modificar el producto', (done) => {
        chai.request(url)
        .put(`/api/products/${id}`)
        .send({
            name: "Buzo Estampado",
            description: "String",
            code: 111,
            image: "String",
            price: 2000,
            stock: 100
        })
        .end( function(err,res){
            console.log(res.body.name)
            expect(res).to.have.status(200);
            done();
        });
    });

    //Eliminacion del producto creado
    it('Debe eliminar el producto con ese id', (done) => {
        chai.request(url)
        .del(`/api/products/${id}`)
        .end( function(err,res){
            expect(res).to.have.status(200);
            chai.request(url)
            .get('/api/products')
            .end( function(err,res){
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
        });
    });
})