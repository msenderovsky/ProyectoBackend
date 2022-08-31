/*const { createTransport } = require ('nodemailer')
const TO_MAIL = process.env.MIMAIL
const pw = process.env.PASS
const products = order.products.map(({name,price,cant}))*/

import products from order.products.map(({name,price,cant}))
import TO_MAIL from process.env.MIMAIL
import pw from process.env.PASS
import { createTransport } from 'nodemailer'


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

export default {sendMail}