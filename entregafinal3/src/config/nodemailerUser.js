import { createTransport } from 'nodemailer'

const sendMailUser = async (user) => {
    const transporter = createTransport({
        service: 'gmail',
        port: 586,
        auth: {
            user: process.env.MAILBOT,
            pass : process.env.NODEMAILERPASS
        }
    })
    const mailOptions = {
        from: process.env.MAILBOT,
        to : process.env.MAILTO,
        subject : 'Nuevo Usuario Registrado',
        html: `Nuevo Registro de Usuario',
        'Datos del nuevo usuario:'
        '${user.name}'
        '${user.email}'
        '${user.phone}'`
    }
  
    await transporter.sendMail(mailOptions)
    
}

export default sendMailUser