/*const { createTransport } = require ('nodemailer')
const TO_MAIL = process.env.MIMAIL
const pw = process.env.PASS
const products = order.products.map(({name,price,cant}))*/

import { createTransport } from 'nodemailer'

const pw= process.env.PASS
//const  TO_MAIL = process.env.MIMAIL
//const  TEST_MAIL = process.env.MIMAIL2

const sendMail = async (order) =>  {

    const products = order.products.map(({name,price,cant}) => `<li>${name} : $ ${price} </li>`)
    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: "marcos_senderovsky@hotmail.com",
            pass: 'qmsowdpabbzjupcl'
        }
    });
    const mailOptions = {
        from : "msenderovsky@gmail.com",
        to: "marcos_senderovsky@hotmail.com",
        subject: 'Nuevo compra',
        html: `Hola',
        'Gracias por su compra, a continuación un resumen de su pedido'
        '${order.adress}'
        <ul>
            ${products}
        </ul>

        'Saludos'`
    }
    
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
}

export default sendMail