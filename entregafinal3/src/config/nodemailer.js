const {createTransport} = require('nodemailer')
const TO_MAIL = process.env.MIMAIL
const pw = process.env.PASS
const products = order.products.map(({name,price,cant}))
const sendMail = async (order) =>  {

    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: TO_MAIL,
            pass: pw
        }
    });
    const mailOptions = {
        from : TEST_MAIL,
        to: TO_MAIL,
        subject: 'Nuevo compra',
        html: `Hola',
        'Gracias por su compra, a continuación un resumen de su pedido'
        '${order.adress}'
        '${products}'

        'Saludos'`
    }
    
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
}

module.exports = {sendMail}