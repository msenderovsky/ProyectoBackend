const {createTransport} = require('nodemailer')
const TO_MAIL = process.env.MIMAIL
const password = process.env.PASS

const sendMail = async (TEST_MAIL, productsString,user) =>  {

    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: 'msenderovsky@gmail.com' ,
            pass: 'xlmqjzmdvcyjilgl'
        }
    });
    //${user.name}
    const mailOptions = {
        from : TEST_MAIL,
        to: TO_MAIL,
        subject: 'Nuevo pedido de ',
        html: `Hola ,
        'Gracias por su compra, a continuación un resumen de su pedido'
        '${productsString}'

        'Saludos'`
    }
    
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
}

module.exports = {sendMail}