const {createTransport} = require('nodemailer')
const TEST_MAIL = process.env.MIMAIL2
const TO_MAIL = process.env.MIMAIL
const password = process.env.PASS

const sendMail = async () =>  {
    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: TEST_MAIL ,
            pass: password
        }
    });
    
    const mailOptions = {
        from : TEST_MAIL,
        to: TO_MAIL,
        subject: 'Nuevo pedido de ',
        html: `Hola ${user.name},
        'Gracias por su compra, a continuación un resumen de su pedido'
        '${cart.products}'

        'Saludos'`
    }
    
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
}

module.exports = sendMail